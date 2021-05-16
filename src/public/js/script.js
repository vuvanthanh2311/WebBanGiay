// hor-scroll
$(document).ready(function() {

    var i = 0;
    show(i);

    function plus(n) {
        show(i += n);
    }


    $('.btn--re').click(function(e) {
        e.preventDefault();
        plus(-1);
    });
    $('.btn--next').click(function(e) {
        e.preventDefault();
        plus(1);

    });

    function show(n) {
        console.log(n);
        switch (n) {
            case 0:
                $('.btn--re').hide(1000);
                $('.horscroll__container').css("left", "0%")
                break;
            case 1:
                $('.btn--re').show(1000);
                $('.btn--next').show(1000);
                $('.horscroll__container').css("left", "-100%")
                break;
            case 2:
                $('.btn--next').hide(1000);
                $('.horscroll__container').css("left", "-200%")
                break;
            default:
                break;
        }
    }
});


// cart - soluong

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
        textbox.addEventListener(event, function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    });
}

setInputFilter(document.getElementById("soluong"), function(value) {
    return /^\d*$/.test(value) && (value === "" || parseInt(value) >= 1);
});


//custom
const cartitem = document.querySelectorAll('#cartitem');


cartitem.forEach(function(item, index) {
    const quanity = item.querySelector('#quanity');
    const sotien = item.querySelector('#sotien')
    const dongia = item.querySelector('#dongia')

    var price = dongia.querySelector('.dongia')

    var money = sotien.querySelector('.sotien')

    var subbtn = quanity.querySelector("#sub");
    var soluong = quanity.querySelector("#soluong");
    var addbtn = quanity.querySelector("#add");

    var dg = Number(price.innerHTML);

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
    })
    soluong.addEventListener("blur", function() {
        if (soluong.value <= 1) {
            subbtn.setAttribute("disabled", true)
        } else {
            subbtn.disabled = false;
        }
        money.innerHTML = dg * Number(soluong.value);
        const fmmoney = formatCash(money.textContent)
        money.innerHTML = `${fmmoney}`;
    })
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
        }

    });

})

//format
function formatCash(str) {
    return str.trim().split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
const PDelement = document.querySelectorAll('#formatPrice');
for (const element of PDelement) {
    const priceVND = formatCash(element.textContent);
    element.innerHTML = `${priceVND}`;

}