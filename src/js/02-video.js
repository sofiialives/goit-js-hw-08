import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const PLAYER_CURRENT_TIME = "videoplayer-current-time";
function getCurrentTime(currTime){
    localStorage.setItem(PLAYER_CURRENT_TIME, currTime.seconds)
} 
player.on('timeupdate', throttle(getCurrentTime, 1000))

const timeValue = localStorage.getItem(PLAYER_CURRENT_TIME);
player.setCurrentTime(timeValue || 0)
