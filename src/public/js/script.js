window.onscroll = function () {
    if (
        document.body.scrollTop > 150 ||
        document.documentElement.scrollTop > 150
    ) {
        document.getElementById('nav').className = 'fixed';
    } else {
        document.getElementById('nav').className = '';
    }
};
