// lay data trong localstore
var Pro_carts = JSON.parse(localStorage.getItem("Pro_carts"));

if (Pro_carts != null) {
    const content = Pro_carts.map(function(item, index) {
        return ` <div id="cartitem" class="cart__content">
        <div class="cart__content--checkbox checkbox">
            <input type="checkbox" name="check" id="${index}" class="check" >
        </div>
        <div class="cart__content--sanpham">
            
            <div class="cart__content--sanpham_image">
                <a href="#">
                    <img id="cart_image" src="${item.image}" alt="image" style="width: 10rem; height:10rem">
                </a>
            </div>
            <div class="cart__content--sanpham_name">
                <a id="cart_name" href="#">
                    ${item.name}
                </a>
            </div>
        </div>
        <div id="dongia" class="cart__content--dongia">
            <p   class="dongia">
                ${item.dongia}
            </p>
            <p id="formatPrice"  class="dongiashow">
                    ${item.dongia}
            </p>
            <span>VNĐ</span>
        </div>
        <div class="cart__content--soluong">
            <div id="quanity" class="cart__content--soluong_quanity" >
                <button id="sub" class="quanity" disabled><i class="far fa-minus"></i></button>
                <input type="numer" name="soluong" id="soluong" value="1">
                <button id="add" class="quanity"><i class="fal fa-plus"></i></button>
            </div>
            
        </div>
        <div id="sotien" class="cart__content--sotien">
            <p id="formatPrice"  class="sotien">
                    ${item.dongia}
            </p>
            <span>VNĐ</span>
        </div>
        <div class="cart__content--thaotac">
            <button id="${index}" class="btn--white Cbtndel">Xóa</button>
        </div>
    </div>`
    })
    document.querySelector('.Cart_pro').innerHTML = content.join("")


    // Restricts input for the given textbox to the given inputFilter.
    // function setInputFilter(textbox, inputFilter) {
    //     ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    //         textbox.addEventListener(event, function() {
    //             if (inputFilter(this.value)) {
    //                 this.oldValue = this.value;
    //                 this.oldSelectionStart = this.selectionStart;
    //                 this.oldSelectionEnd = this.selectionEnd;
    //             } else if (this.hasOwnProperty("oldValue")) {
    //                 this.value = this.oldValue;
    //                 this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
    //             }
    //         });
    //     });
    // }

    // setInputFilter(document.getElementById("soluong"), function(value) {
    //     return /^\d*$/.test(value) && (value === "" || parseInt(value) >= 1);
    // });
    // cart - soluong



    //custom
    const cartitem = document.querySelectorAll('#cartitem');
    const tong = document.getElementById("tongtien");
    const all = document.getElementById("all")
    const alltt = document.getElementById("alltt")
    const checklt = document.querySelectorAll(".check")


    function Cart() {
        var tongtien = 0;
        cartitem.forEach(function(item, index) {
            const quanity = item.querySelector('#quanity');
            const dongia = item.querySelector('#dongia')
            const checkbox = item.querySelector('.checkbox');

            var check = checkbox.querySelector(".check")
            var price = dongia.querySelector('.dongia')
            var soluong = quanity.querySelector("#soluong");

            const dg = Number(price.innerHTML);
            if (check.checked === true) {
                tongtien = tongtien + (dg * soluong.value)
            }

        })
        tong.innerHTML = tongtien;
        Checkout(tongtien);
        const priceVND = formatCash(tong.textContent);
        tong.innerHTML = `${priceVND}`;
    }

    //function check
    function check(element) {
        element.checked = true;
    }

    function uncheck(element) {
        element.checked = false;
    }

    all.onchange = function() {

        if (all.checked === true) {
            check(alltt)
            checklt.forEach(function(item, index) {
                check(item)
            })
        } else {
            uncheck(alltt)
            checklt.forEach(function(item, index) {
                uncheck(item)
            })
        }
        Cart();

    }
    alltt.onchange = function() {

        if (alltt.checked === true) {
            check(all)
            checklt.forEach(function(item, index) {
                check(item)
            })
        } else {
            uncheck(all)
            checklt.forEach(function(item, index) {
                uncheck(item)
            })
        }
        Cart();

    }

    // update soluong
    cartitem.forEach(function(item, index) {
        const quanity = item.querySelector('#quanity');
        const sotien = item.querySelector('#sotien')
        const dongia = item.querySelector('#dongia')
        const checkbox = item.querySelector('.checkbox');

        var check = checkbox.querySelector(".check")

        var price = dongia.querySelector('.dongia')

        var money = sotien.querySelector('.sotien')

        var subbtn = quanity.querySelector("#sub");
        var soluong = quanity.querySelector("#soluong");
        var addbtn = quanity.querySelector("#add");

        const dg = Number(price.innerHTML);

        //event click
        addbtn.addEventListener("click", function() {
            soluong.value++;
            if (soluong.value <= 1) {
                subbtn.setAttribute("disabled", true)
            } else {
                subbtn.disabled = false;
            }
            money.innerHTML = dg * Number(soluong.value);
            const fmmoney = formatCash(money.textContent)
            money.innerHTML = `${fmmoney}`;

            Cart();

        })
        subbtn.addEventListener("click", function() {
                soluong.value--;
                if (soluong.value <= 1) {
                    subbtn.setAttribute("disabled", true)
                } else {
                    subbtn.disabled = false;
                }
                money.innerHTML = dg * Number(soluong.value);
                const fmmoney = formatCash(money.textContent)
                money.innerHTML = `${fmmoney}`;

                Cart();
            })
            //event blur
        soluong.addEventListener("blur", function() {
                if (soluong.value <= 1) {
                    subbtn.setAttribute("disabled", true)
                } else {
                    subbtn.disabled = false;
                }
                money.innerHTML = dg * Number(soluong.value);
                const fmmoney = formatCash(money.textContent)
                money.innerHTML = `${fmmoney}`;

                Cart();
            })
            //event enter
        soluong.addEventListener("keyup", function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                if (soluong.value <= 1) {
                    subbtn.setAttribute("disabled", true)
                } else {
                    subbtn.disabled = false;
                }

                money.innerHTML = dg * Number(soluong.value);
                const fmmoney = formatCash(money.textContent)
                money.innerHTML = `${fmmoney}`;

                Cart();
            }

        });
        check.addEventListener("change", function() {
            Cart();
        })
    })

    // comfirmdel
    const bg = document.getElementById("bgblack");
    const confirmdel = document.getElementById("confirmdel");
    const btndel = document.querySelectorAll(".Cbtndel");
    const btnclose = document.getElementById("Cbtnclose");
    const btndestroy = document.getElementById("Cbtndestroy");
    const refesh_cart = document.getElementById("refesh_cart");


    btnclose.addEventListener("click", function() {
        confirmdel.style.display = "none"
        bg.style.display = "none"
    })

    btndel.forEach(function(item, index) {
        item.addEventListener("click", function() {
            bg.style.display = "block"
            confirmdel.style.display = "block"

            btndestroy.addEventListener("click", function() {
                const remove_cart = JSON.parse(localStorage.getItem("Pro_carts"))
                remove_cart.splice(Number(item.id), 1)
                localStorage.setItem("Pro_carts", JSON.stringify(remove_cart))
                refesh_cart.click()
            })
        })
    })

    // confirm checkout

    const btncheckout = document.getElementById("btncheckout");
    const confirmcheckout = document.getElementById("comfirm-checkout");
    const btnOK = document.querySelector(".checkout--btnOK");

    function Checkout(tongtien) {
        sessionStorage.setItem("tongtien", tongtien);
    }
    var products = [];
    var done_cart = [];

    btncheckout.addEventListener("click", function() {
        const user = sessionStorage.getItem("user");
        const checkbox = document.querySelectorAll('input[name="check"]:checked');
        if (Number(tong.innerHTML) != 0) {
            btncheckout.href = "/cart/checkout"
            sessionStorage.setItem("length", checkbox.length);
            cartitem.forEach(function(item, index) {
                const quanity = item.querySelector('#quanity');
                const sotien = item.querySelector('#sotien')
                const dongia = item.querySelector('#dongia')
                const image = item.querySelector('#cart_image')
                const name = item.querySelector('#cart_name')
                const checkbox = item.querySelector('.checkbox');

                var check = checkbox.querySelector(".check")

                var price = dongia.querySelector('.dongia')

                var money = sotien.querySelector('.sotien')


                var soluong = quanity.querySelector("#soluong");



                var product = {};

                if (check.checked) {
                    product.name = name.innerHTML.trim();
                    product.image = image.src.trim();
                    product.dongia = price.innerHTML.trim();
                    product.soluong = soluong.value.trim();
                    products.push(product)
                    done_cart.unshift(check.id)
                }

            })
            sessionStorage.setItem("done_cart", JSON.stringify(done_cart));
            sessionStorage.setItem("products", JSON.stringify(products));

        } else {
            bg.style.display = "block"
            confirmcheckout.style.display = "block"
        }
    });

    btnOK.addEventListener("click", function() {
        bg.style.display = "none"
        confirmcheckout.style.display = "none"
    })
}