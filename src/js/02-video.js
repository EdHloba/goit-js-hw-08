import Player from '@vimeo/player';
var throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

currentTime();

player.on('timeupdate', throttle(timeUpdateHendler, 1000));

function timeUpdateHendler(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
}

function currentTime() {
  if (localStorage.getItem('videoplayer-current-time')) {
    const data = JSON.parse(localStorage.getItem('videoplayer-current-time'));

    if (data.seconds === data.duration) {
      localStorage.removeItem('videoplayer-current-time');
      return;
    }

    player.setCurrentTime(data.seconds);
  }
}