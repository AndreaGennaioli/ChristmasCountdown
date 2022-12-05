function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

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
shuffle(playList);
var audio = new Audio(playList[0]);
audio.onended = () => {
  setTimeout(() => {
    onend();
  }, 1000)
}
audio.pause()
audio.volume = 0.06;
audio.id = 'music-player'
audio.style.display = 'none'
document.body.appendChild(audio)
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
  console.log('play click')
  if (playing) {
    playing = false;
    e.target.setAttribute('src', 'play.svg')
    document.getElementById('music-player').pause();
  } else {
    playing = true;
    e.target.setAttribute('src', 'stop.svg')
    document.getElementById('music-player').play();
  }
});

document.getElementById('player-back').addEventListener('click', (e) => {
  if(document.getElementById('player-back').classList.contains('disabled')) return;

  document.getElementById('music-player').pause()
  index--;
  document.getElementById('music-player').setAttribute('src', playList[index])
  document.getElementById('music-player').load()
  document.getElementById('player-name').innerHTML = playList[index].replace('./songs/', '')
  validateBackButton();
  setTimeout(() => {
    playing = true;
    document.getElementById('player-play').setAttribute('src', 'stop.svg')
    document.getElementById('music-player').play();
  }, 500)
})

document.getElementById('player-next').addEventListener('click', (e) => {
  document.getElementById('music-player').pause()
  index = index == playList.length - 1 ? 0 : index + 1;
  document.getElementById('music-player').setAttribute('src', playList[index])
  document.getElementById('music-player').load()
  document.getElementById('player-name').innerHTML = playList[index].replace('./songs/', '')
  validateBackButton();
  setTimeout(() => {
    playing = true;
    document.getElementById('player-play').setAttribute('src', 'stop.svg')
    document.getElementById('music-player').play();
  }, 500)
});

function onend() {
  console.log('ending')
  index = index == playList.length - 1 ? 0 : index + 1;
  document.getElementById('music-player').setAttribute('src', playList[index])
  document.getElementById('music-player').load()
  document.getElementById('music-player').play()
  document.getElementById('player-name').innerHTML = playList[index].replace('./songs/', '')
  validateBackButton();
}