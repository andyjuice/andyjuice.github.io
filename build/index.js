// ANIMATE OUT Main Tabs onClick
const animateFadeOut = (id) =>
    new Promise((resolve, reject) => {
        row = $('#' + id);
        row.addClass('animate__animated animate__fadeOutRight');
        function handleAnimationEnd() {
            row.unbind('animationend', handleAnimationEnd);
            resolve('Animation ended');
        }
        row.on('animationend', handleAnimationEnd);
    });
const hideClass = (className) => {
    $('.' + className).fadeOut(500);
}

const showClass = (className) => {
    $('.' + className).fadeIn(1000);
}
const leaveMain = (id) => {
    animateFadeOut(id);
    hideClass('juicebox');
    hideClass('main');
    setTimeout(() => { showClass(id) }, 777);
}
const returnMain = (id) => {
    $('#' + id).removeClass('animate__animated animate__fadeOutRight');
    hideClass(id);
    setTimeout(() => { showClass('main'); showClass('juicebox'); }, 777)
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
const showMovingImages = () => {
    hideClass('other-image');
    setTimeout(() => { showClass('moving-image') }, 777);
}
const showOtherImages = () => {
    hideClass('moving-image');
    setTimeout(() => { showClass('other-image') }, 777);
}
const toggleProject = (id) => {
    $('#' + id).slideToggle();
}
const play = (id) => {
    var audio = document.getElementById(id);
    audio.play();
}
const clickTitle = () => {
    console.log('here');
    shakeJuiceBox();
    play('juicebox-slurp');
}
const downloadCV = () = > {
    window.location.href = '../cv/andyJuResume_PM2025.pdf'
}
