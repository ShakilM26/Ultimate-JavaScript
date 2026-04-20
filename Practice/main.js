import {pi, add} from './mathUtils.js';
import welcomeMessage from './greetings.js';
import { calculateArea } from './circle.js';

const radius = 5;
const area = calculateArea(radius)
console.log(`${area}`);