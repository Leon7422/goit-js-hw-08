import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('videoplayer-current-time') !== null) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

player.on('play', function () {
  console.log('played the video!');
  getCurrentTime();
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(writeTimeStamp, 1000));

function writeTimeStamp(seconds) {
  localStorage.setItem('videoplayer-current-time', seconds.seconds);
}
