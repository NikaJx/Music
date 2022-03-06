
    let musicArr = [{
        id: 0,
        img: './icons/Изображение 491.png',
        title: 'Hero',
        artist: 'David Bowie',
        albom: 'Heroes',
        time: '6:11',
        favorite: './icons/Play.png',
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
        add: './icons/Add To Playlist (web).png',
        src: './music/music9.mp3'
    }
];

let indexSong = 0;

function playerMusic(name, id) {
    showPlayer();
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
        audio.pause();
        pauseMusic.style.display = 'none';
        let playerIcon = document.querySelector('.playIcon');
        playerIcon.style.display = 'block';
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

function prevMusic() {
    if(indexSong < musicArr.length) {
        playerMusic(musicArr[indexSong - 1].src, musicArr[indexSong -1].id);
    }
}

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
                <img class="icon" src="./icons/Play.png" onclick="playerMusic('${item.src}', ${item.id})">
                <img class="icon" src="./icons/Add To Playlist (web).png">
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
            break;
        case 15:
            clearContent();
            addMusic(musicArr, loadedMusicNumber += 5);
            tbody.innerHTML = musicData;
            break;
        case 20:
            btnAdd.innerHTML = 'Remove 5 files';
            clearContent();
            addMusic(musicArr, loadedMusicNumber -= 10);
            tbody.innerHTML = musicData;
            break;
    }
});

// btnAdd.addEventListener('click', function() {
//     if(loadedMusicNumber <= 10) {
//         clearContent();
//         addMusic(musicArr, loadedMusicNumber = loadedMusicNumber + 5);
//         tbody.innerHTML = musicData;
//     } else if(loadedMusicNumber <= 15) {
//         clearContent();
//         addMusic(musicArr, loadedMusicNumber = loadedMusicNumber + 5);
//         tbody.innerHTML = musicData;
//     } else if(loadedMusicNumber === 20) {
//         console.log(loadedMusicNumber);
//         btnAdd.innerHTML = 'Remove 5 files';
//         clearContent();
//         addMusic(musicArr, loadedMusicNumber = loadedMusicNumber - 5);
//         tbody.innerHTML = musicData;
//     }
// });

tbody.innerHTML = musicData;
