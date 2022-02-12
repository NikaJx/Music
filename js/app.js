window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.playL');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let music = document.createElement('div');

        music = new Audio();
        music.src = './music/Эндшпиль - Мой Babylon (HD 1080P).mp3';

        music.play();
    });
    console.log("sdfds")
  
    const btAdd = document.querySelectorAll('.bt');
    
    btAdd.forEach((bt) => {
        bt.addEventListener('click', () => {
            alert('Hello Gali');
        });
    });
    console.log("hello");


 

});
