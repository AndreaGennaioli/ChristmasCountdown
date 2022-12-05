var playList = [
  './songs/Jingle Bell Rock Remix (A Trappy Christmas).mp3',
  './songs/LET IT SNOW! LET IT SNOW! (Trap Remix).mp3',
  './songs/Caskada - Last Christmas (Dance Remix 2012).mp3',
  './songs/Mariah Carey - All I Want For Christmas Is You (Lyrics).mp3',
  './songs/Ariana Grande – Santa Tell Me (Lyrics).mp3',
  './songs/HERE COMES SANTA CLAUS (TRAP REMIX).mp3',
  './songs/Feliz Navidad (Onderkoffer Trap Remix).mp3',
  './songs/SANTA CLAUS IS COMING TO TOWN (OFFICIAL Dance Remix).mp3',
  './songs/Rockin\' Around The Christmas Tree (Christmas Trap Remix).mp3'
];
var audio = new Audio(playList[0]);
audio.onended = () => {
  setTimeout(() => {
    onend();
  }, 1000)
}
audio.pause()
audio.volume = 0.06;
document.getElementById('player-name').innerHTML = playList[0].replace('./songs/', '')
var index = 0;
var playing = false;

function validateBackButton() {
  if(index == 0) {
    document.getElementById('player-back').classList.add('disabled')
  } else {
    document.getElementById('player-back').classList.remove('disabled')
  }
}

document.getElementById('player-play').addEventListener('click', (e) => {
  if (playing) {
    playing = false;
    e.target.setAttribute('src', 'play.svg')
    audio.pause();
  } else {
    playing = true;
    e.target.setAttribute('src', 'stop.svg')
    audio.play();
  }
});

document.getElementById('player-back').addEventListener('click', (e) => {
  if(document.getElementById('player-back').classList.contains('disabled')) return;

  audio.pause()
  index--;
  audio = new Audio(playList[index]);
  audio.onended = () => {
    setTimeout(() => {
      onend();
    }, 1000)
  }
  document.getElementById('player-name').innerHTML = playList[index].replace('./songs/', '')
  audio.volume = 0.06;
  validateBackButton();
  setInterval(() => {
    audio.play();
  }, 500)
})

document.getElementById('player-next').addEventListener('click', (e) => {
  audio.pause()
  index = index == playList.length - 1 ? 0 : index + 1;
  audio = new Audio(playList[index]);
  audio.onended = () => {
    setTimeout(() => {
      onend();
    }, 1000)
  }
  document.getElementById('player-name').innerHTML = playList[index].replace('./songs/', '')
  audio.volume = 0.06;
  validateBackButton();
  setInterval(() => {
    audio.play();
  }, 500)
});

function onend() {
  index = index == playList.length - 1 ? 0 : index + 1;
  audio = new Audio(playList[index]);
  audio.onended = () => {
    setTimeout(() => {
      onend();
    }, 1000)
  }
  document.getElementById('player-name').innerHTML = playList[index].replace('./songs/', '')
  audio.volume = 0.06;
  validateBackButton();
  audio.play();
}