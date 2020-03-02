import hello from './hello.js';
import world from './world.js';

import css from './style.css';

document.querySelector('#app').innerHTML = hello + ' ' + world;

console.log('css', css);