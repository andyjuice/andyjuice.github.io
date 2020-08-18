// ANIMATE OUT Main Tabs onClick
const animateFadeOut = (id) =>
    new Promise((resolve, reject) => {
        row = $('#' + id);
        row.addClass('animate__animated animate__fadeOutRight');
        function handleAnimationEnd() {
            row.removeClass('animate__animated animate__fadeOutRight');
            row.unbind('animationend', handleAnimationEnd);
            resolve('Animation ended');
        }
        row.on('animationend', handleAnimationEnd);
    });

const hideClass = (className, callback) => {
    $('.' + className).fadeOut(1000);
    if(callback !== null){
        callback();
    }
}

const showClass = (className, callback) => {
    $('.' + className).fadeIn(2000);
    if(callback !== null){
        callback();
    }
}

const leaveMain = (id) => {
    animateFadeOut(id).then(hideClass('main', () => {showClass(id, null)}));
}

const shakeJuiceBox = () => new Promise((resolve, reject) => {
    box = $('.juicebox');
    box.addClass('animate__animated animate__tada');
    function handleAnimationEnd() {
        box.removeClass('animate__animated animate__tada');
        box.unbind('animationend', handleAnimationEnd);
        resolve('Animation ended');
    }
    box.on('animationend', handleAnimationEnd);
});