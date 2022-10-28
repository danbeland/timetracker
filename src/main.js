import { createApp } from 'vue'
import App from './App.vue'

// utility function - probably a better way to do this...
export function secondsToString(duration) {
  let seconds = Math.floor((duration) % 60),
      minutes = Math.floor((duration / 60) % 60),
      hours = Math.floor((duration / (60 * 60)) % 24);
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0'); 
  seconds = String(seconds).padStart(2, '0'); 
  return hours + ":" + minutes + ":" + seconds;
}

createApp(App).mount('#app')
