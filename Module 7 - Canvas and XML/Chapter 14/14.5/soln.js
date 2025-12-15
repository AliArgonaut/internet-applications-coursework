console.log("hello")

const canvas  = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

ctx.font = '28px Arial'
ctx.fillStyle = 'black';

ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 6;
ctx.shadowColor = 'gray';

ctx.fillText("HTML5 Canvas", 50,50)
