function validator(options) {



    // định nghĩa hàm getParents
    function getParents(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }

    }




    var selectorRules = {};
    // định nghĩa hàm validate()
    function validate(inputElement, rule, Mes) {
        var errorMes;

        var rules = selectorRules[rule.selector];

        var ruleslength = rules.length;
        for (var i = 0; i < ruleslength; i++) {
            switch (inputElement.type) {
                case "radio":
                case "checkbox":
                    errorMes = rules[i](formElement.querySelector(rule.selector + ":checked"));
                    break;
                default:
                    errorMes = rules[i](inputElement.value);
                    break;
            }

        }

        // thêm class xử lí màu khi có lỗi và xóa class khi khong có lỗi
        if (errorMes) {
            Mes.innerText = errorMes;
            getParents(inputElement, options.formGroups).classList.add("invalid");
        } else {
            Mes.innerText = "";
            getParents(inputElement, options.formGroups).classList.remove("invalid")
        }

        return errorMes;
    }




    var formElement = document.querySelector(options.form);
    if (formElement) {

        //vòng lặp qua từng rule
        options.rules.forEach(function(rule) {

            // đưa các hàm của rule vào mảng để dễ lấy ra và không bị trùng
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            // lấy các element trong rule và thêm event cho từng cái
            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function(inputElement) {
                var Mes = getParents(inputElement, options.formGroups).querySelector(options.errorSelector);
                inputElement.onblur = function() {
                    validate(inputElement, rule, Mes);
                }
                inputElement.oninput = function() {

                    Mes.innerText = "";
                    getParents(inputElement, options.formGroups).classList.remove("invalid")
                }
            })

        });




        //thêm event submit cho form
        formElement.addEventListener('submit', function(e) {
            e.preventDefault();


            var isSucess = true;
            //lặp qua từng rule kiểm tra xem có cái nào bị lỗi không
            // options.rules.forEach(function(rule) {
            for (var rule of options.rules) {
                var inputElement = formElement.querySelector(rule.selector);
                var Mes = getParents(inputElement, options.formGroups).querySelector(options.errorSelector);
                var isValid = validate(inputElement, rule, Mes);
                if (!isValid) {} else {
                    isSucess = false;
                }
            }

            // });
            // nếu không có lỗi thì lấy giá trị và lưu vào mảng values
            if (isSucess) {
                if (typeof options.onSubmit === "function") {
                    var enableInputs = formElement.querySelectorAll("[name]");
                    var arrInput = Array.from(enableInputs).reduce(function(values, input) {
                        switch (input.type) {
                            case "radio":
                                if (input.matches(":checked")) {
                                    values[input.name] = input.value.trim();
                                }
                                break;
                            case "checkbox":
                                if (!input.matches(":checked")) return values;
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value.trim());

                                break;
                            case "file":
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value.trim();
                        }
                        return values;
                    }, {})
                    options.onSubmit(arrInput);
                }
            }

        })

    }
}





// định nghĩa các hàm 
validator.isRequired = function(selector, message) {

    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || "vui long nhap truong nay";
        }
    };
}

validator.isEmail = function(selector, message) {

    return {
        selector: selector,
        test: function(value) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(value) ? undefined : message || " truong nay phai la email";
        }
    };

}
validator.isPassword = function(selector, min, message) {

    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || 'vui long nhap toi thieu ' + min + " ki tu";
        }
    };
}
validator.isConfirmed = function(selector, confirm, message) {

    return {
        selector: selector,
        test: function(value) {
            return value === confirm() ? undefined : message || "Troung nay khong chinh xac";
        }
    };
}