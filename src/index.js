import "./reset.css";
import "./styles.css";
import { greeting } from "./greeting.js";
import { compareAsc, format } from "date-fns";

greeting();

format(new Date(2014, 1, 11), "yyyy-MM-dd");
let today = new Date();
console.log(today);
let todayFormatted = format(today,"yyyy-MM-dd");
console.log(todayFormatted);

const Color = require('color');
const color1 = Color('#7743CE');
const color2 = color1.lighten(0.3);
const color3 = color1.lighten(0.6);

document.querySelector(".color1").style.color = color1;
document.querySelector(".color2").style.color = color2;
document.querySelector(".color3").style.color = color3;

console.log(color1.string());
console.log(color2.string());
console.log(color3.string());