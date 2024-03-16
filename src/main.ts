import "./style.css";
import * as P5Instance from "p5";

const p = new P5Instance(() => { }, document.getElementById("app")!);

let color = 0;

p.setup = () => {
  p.createCanvas(400, 400);
};

p.draw = () => {
  color = (color + 1) % 256;
  p.background(color);
};
