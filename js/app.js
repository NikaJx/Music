
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
    }
];

function playMusic(name) {
    var player = document.getElementById("player");
    document.getElementById("src").setAttribute('src', name);
    player.pause();
    player.load();
    player.play();

//     let playerBtn = document.querySelector('.play');
//     let prevBtn = document.querySelector('.prev');
//     let nextBtn = document.querySelector('.next');
//     let audio = document.getElementById('audio');

//    audio.setAttribute('src', name);

//    playerBtn.pause();
//    playerBtn.load();
//    playerBtn.play();

} 

function showPlayer() {
    let playerMove = document.querySelector('.playerMusic');
    playerMove.style.display = 'flex';
    console.log(playerMove);
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

let index = 5;

function addMusic(arr, index) {
    arr.slice(0, index).forEach((item) => {
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
                <img class="icon" src="./icons/Play.png" onclick="playMusic('${item.src}'), showPlayer()">
                <img class="icon" src="./icons/Add To Playlist (web).png">
            </div>
        </td>
    </tr>`;
    
    musicData += rowItem; 
});
}

addMusic(musicArr, index);

let addBtn = document.querySelector('.bt-add');

addBtn.addEventListener('click', () => {
    tbody.innerHTML = "";
    musicData = "";
    addMusic(musicArr, index = index + 4);
    tbody.innerHTML = musicData;
});

tbody.innerHTML = musicData;
