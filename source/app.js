import hello from './js/hello.js';
import world from './js/world.js';

import css from './style.css';

document.querySelector('#app').innerHTML = hello + ' ' + world;

console.log('css', css);