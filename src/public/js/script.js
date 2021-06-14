// hor-scroll
$(document).ready(function() {

    var i = 0;
    show(i);

    function plus(n) {
        show(i += n);
    }


    $('.btnre').click(function(e) {
        e.preventDefault();
        plus(-1);
    });
    $('.btnnext').click(function(e) {
        e.preventDefault();
        plus(1);

    });

    function show(n) {
        switch (n) {
            case 0:
                $('.btnre').hide(1000);
                $('.horContainer').css("left", "0%")
                break;
            case 1:
                $('.btnre').show(1000);
                $('.btnnext').show(1000);
                $('.horContainer').css("left", "-100%")
                break;
            case 2:
                $('.btnnext').hide(1000);
                $('.horContainer').css("left", "-200%")
                break;
            default:
                break;
        }
    }

    var i1 = 0;
    show1(i1);

    function plus1(n) {
        show1(i1 += n);
    }


    $('.btnre1').click(function(e) {
        e.preventDefault();
        plus1(-1);
    });
    $('.btnnext1').click(function(e) {
        e.preventDefault();
        plus1(1);

    });

    function show1(n) {
        switch (n) {
            case 0:
                $('.btnre1').hide(1000);
                $('.btnnext1').show(1000);
                $('.horContainer1').css("left", "0%")
                break;
            case 1:
                $('.btnnext1').hide(1000);
                $('.btnre1').show(1000);
                $('.horContainer1').css("left", "-100%")
                break;
            default:
                break;
        }
    }
});




//format
function formatCash(str) {
    return str.trim().split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}
const PDelement = document.querySelectorAll('#formatPrice');
for (const element of PDelement) {
    const priceVND = formatCash(element.textContent);
    element.innerHTML = `${priceVND}`;

}
// scroll nav
window.onscroll = function() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("nav").classList.add("fixed-top");
    } else {

        document.getElementById("nav").classList.remove("fixed-top");
    }
}

// detail PD

const btnsizes = document.querySelectorAll(".btn--size")

function remove() {
    btnsizes.forEach(function(item, index) {
        if (item.classList.contains('btnsize--active')) {
            item.classList.remove("btnsize--active")
        }
    })
}

btnsizes.forEach(function(item, index) {

    item.addEventListener("click", function() {
        remove()
        item.classList.add("btnsize--active")
    })
})