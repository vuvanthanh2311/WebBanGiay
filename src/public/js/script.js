function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
const PDelement = document.querySelectorAll('#formatPrice');
for (const element of PDelement) {
    const priceVND = formatCash(element.textContent);
    element.innerHTML = `${priceVND} VNĐ`;

}


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