window.addEventListener('DOMContentLoaded', () => {
   const btn1 = document.querySelector('.fav1'),
         btn2 = document.querySelector('.fav2'),
         btn3 = document.querySelector('.fav3'),
         btn4 = document.querySelector('.fav4'),
         btn5 = document.querySelector('.fav5');

    // btn1.addEventListener('click', () => {
    //     let music = document.createElement('div');

    //     music = new Audio();
    //     music.src = './music/music.mp3';

    //     music.play();
    // });

    // btn2.addEventListener('click', () => {
    //     let music = document.createElement('div');

    //     music = new Audio();
    //     music.src = './music/CryJaxx-CandyShop(feat. Junior Charles).mp3';

    //     music.play();
    // });

    // btn3.addEventListener('click', () => {
    //     let music = document.createElement('div');

    //     music = new Audio();
    //     music.src = './music/music3.mp3';

    //     music.play();
    // });

    // btn4.addEventListener('click', () => {
    //     let music = document.createElement('div');

    //     music = new Audio();
    //     music.src = './music/music4.mp3';

    //     music.play();
    // });

    // btn5.addEventListener('click', () => {
    //     let music = document.createElement('div');

    //     music = new Audio();
    //     music.src = './music/music5.mp3';

    //     music.play();
    // });


    function musicPlay(btn, event, srcs) {
        btn.addEventListener(event, () => {
            let music = document.createElement('div');

            music = new Audio();
            music.src = srcs;

            music.play();
        });
    }

    musicPlay(btn1, 'click', './music/music.mp3');
    musicPlay(btn2, 'click', './music/CryJaxx-CandyShop(feat. Junior Charles).mp3');
    musicPlay(btn3, 'click', './music/music3.mp3');
    musicPlay(btn4, 'click', './music/music4.mp3');
    musicPlay(btn5, 'click', './music/music5.mp3');

});