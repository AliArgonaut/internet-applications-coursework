console.log("hello")
const canvas  = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

function roundedRect(x, y, w, h, r, fill, stroke, lineW = 4) {
    ctx.beginPath();

    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);

    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);

    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);

    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);

    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();

    ctx.strokeStyle = stroke;
    ctx.lineWidth = lineW;
    ctx.stroke();
}


roundedRect(20, 20,150, 100,15,"black","royalblue",6);

roundedRect(200,60,65,90,25,"red","darkgreen",8);

