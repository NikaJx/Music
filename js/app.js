
    let musicArr = [{
        id: 0,
        img: './icons/Изображение 491.png',
        title: 'Hero',
        artist: 'David Bowie',
        albom: 'Heroes',
        time: '6:11',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music.mp3'
    },
    {
        id: 1,
        img: './icons/Изображение 492.png',
        title: 'Life On Mars',
        artist: 'David Bowie',
        albom: 'Hunky Dory',
        time: '7:11',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/CryJaxx-CandyShop(feat. Junior Charles).mp3'
    },
    {
        id: 2,
        img: './icons/Изображение 493.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music3.mp3'
    },
    {
        id: 3,
        img: './icons/Изображение 494.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music4.mp3'
    },
    {
        id: 4,
        img: './icons/Изображение 495.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music5.mp3'
    },
    {
        id: 5,
        img: './icons/Изображение 494.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music6.mp3'
    },
    {
        id: 6,
        img: './icons/Изображение 492.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music7.mp3'
    },
    {
        id: 7,
        img: './icons/Изображение 494.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music8.mp3'
    },
    {
        id: 8,
        img: './icons/Изображение 491.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music9.mp3'
    },
    {
        id: 9,
        img: './icons/Изображение 493.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music9.mp3'
    },
    {
        id: 10,
        img: './icons/Изображение 494.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music6.mp3'
    },
    {
        id: 11,
        img: './icons/Изображение 492.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music7.mp3'
    },
    {
        id: 12,
        img: './icons/Изображение 494.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music8.mp3'
    },
    {
        id: 13,
        img: './icons/Изображение 491.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music9.mp3'
    },
    {
        id: 14,
        img: './icons/Изображение 493.png',
        title: 'Ashes To Ashes',
        artist: 'David Bowie',
        albom: 'Scary Monsters (and Super Creeps)',
        time: '7:22',
        favorite: './icons/Play.png',
        pause: './icons/Pause.png',
        add: './icons/Add To Playlist (web).png',
        src: './music/music9.mp3'
    }
];

let indexSong = 0;

function pauseChangeIcon(src, id) {
    let pauseIconChange = document.querySelectorAll('.icons');
    pauseIconChange.forEach((iconChange, i) => {
        if(id === i) {
            iconChange.setAttribute('src', src);
        } else {
            iconChange.setAttribute('src', './icons/Play.png');
        }
    });
}

function activeSong(id) {
    let trColor = document.querySelectorAll('tr');
    trColor.forEach((trC, i) => {
        if(id + 1 === i) {
            if(trC.classList.contains('actived')) {
                trC.classList.remove('actived');
                pauseChangeIcon('./icons/Play.png', id);
            } else {
                trC.classList.add('actived'); 
                showPlayer();
                pauseChangeIcon('./icons/Pause.png', id);
            }
        } else {
            trC.classList.remove('actived');
        }
    });
}

function playerMusic(name, id) {
    activeSong(id);
    let pauseIcon = document.querySelector('.pause');
    pauseIcon.style.display = 'block';

    let audio = document.getElementById('audio');
    audio.setAttribute('src', name);
    
    audio.pause();
    audio.load();
    audio.play()

    indexSong = id;
}

function pauseSong() {
    let pauseMusic = document.querySelector('.pause');
    let audio = document.getElementById('audio');

    pauseMusic.addEventListener('click', () => {
        pauseMusic.style.display = 'none';
        let playerIcon = document.querySelector('.playIcon');
        playerIcon.style.display = 'block';

        audio.pause();

    });
}

pauseSong();

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

nextBtn.addEventListener('click', nextMusic);
prevBtn.addEventListener('click', prevMusic);

function nextMusic() {
    if(indexSong > musicArr.length) {
        indexSong = 0;
        playerMusic(musicArr[indexSong].src, musicArr[indexSong].id);
    } else {
        playerMusic(musicArr[indexSong + 1].src, musicArr[indexSong + 1].id);
    }

    
}

let progres = document.querySelector('.label');

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;

    progres.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);

let progresCont = document.querySelector('.progres-bar');

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

progresCont.addEventListener('click', setProgress);

audio.addEventListener('ended', nextMusic);

function prevMusic() {
    if(indexSong < musicArr.length) {
        playerMusic(musicArr[indexSong - 1].src, musicArr[indexSong -1].id);
    }
}

function volume() {
    let rangeValue = document.querySelector('#volume').value;
    document.querySelector('.val').innerHTML = 'Value' + rangeValue;
    console.log(rangeValue);
}

volume();

function showPlayer() {
    let playerMove = document.querySelector('.playerMusic');
    playerMove.style.display = 'flex';

    let playerIcon = document.querySelector('.playIcon');
    playerIcon.style.display = 'none'
}

function hidePlayer() {
    let hideMove = document.querySelector('.playerMusic');
    let close = document.querySelector('.exit');

    close.addEventListener('click', () => {
        hideMove.style.display = 'none';
    });
}

hidePlayer();


let tbody = document.querySelector('#musicTable');
var musicData = '';

let loadedMusicNumber = 5;

function addMusic(arr, loadedMusicNumber) {
    arr.slice(0, loadedMusicNumber).forEach((item) => {
        var rowItem = `<tr>
            <td>
                <div class="align">
                    <h6>${item.id}</h6>
                    <img class="wallpaper" src="${item.img}">
                </div>
            </td>
            <td>${item.title}</td>
            <td>${item.artist}</td>
            <td>${item.albom}</td>
            <td>${item.time}</td>
            <td>
                <div class="align">
                    <img class="icons" src="./icons/Play.png" onclick="playerMusic('${item.src}', ${item.id})">
                    <img class="icon" src="icon" src="./icons/AddToPlaylist(web).png">
                </div>
            </td>
        </tr>`;

        musicData += rowItem; 
    });
}

addMusic(musicArr, loadedMusicNumber);

function clearContent() {
    tbody.innerHTML = "";
    musicData = "";
}

let btnAdd = document.querySelector('.bt-add');
let btnRemove = document.querySelector('.remove');

function showAndHideBtn(block, none) {
    btnAdd.style.display = none;
    btnRemove.style.display = block;
}

btnAdd.addEventListener('click', () => {
    switch(loadedMusicNumber) {
        case 5:
            clearContent();
            addMusic(musicArr, loadedMusicNumber += 5);
            tbody.innerHTML = musicData;
            break;
        case 10:
            clearContent();
            addMusic(musicArr, loadedMusicNumber += 5);
            tbody.innerHTML = musicData;

            showAndHideBtn('block', 'none');
            break;
    }
});

btnRemove.addEventListener('click', () => {
    switch(loadedMusicNumber) {
        case 15:
            clearContent();
            addMusic(musicArr, loadedMusicNumber -= 5);
            tbody.innerHTML = musicData;
            break;
        case 10:
            clearContent();
            addMusic(musicArr, loadedMusicNumber -= 5);
            tbody.innerHTML = musicData;

            showAndHideBtn('none', 'block');
            break;
    }
});

tbody.innerHTML = musicData;
