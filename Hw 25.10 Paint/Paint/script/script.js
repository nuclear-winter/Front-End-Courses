
window.onload = function () {
    init();
};

let fillColor = 'black';
let flag = false;

function init() {
    const canvas = document.getElementById('canvas1');
    addEventListener(canvas);
}

function addEventListener(canvas) {
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mousemove', setCoordinates);
    document.getElementById('getColor').addEventListener('keydown', changeColor);
} 






function setFigure (event) {
    const canvas = event.target;
    if(canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = fillColor;
        let s = changeSize();
        //ctx.beginPath();
        
        //ctx.moveTo(event.offsetX, event.offsetY);
         if (document.getElementById('selectFigure').value === 'rectangle') {
            ctx.fillRect(event.offsetX, event.offsetY, 10 + s, 10 + s);
            let rectangle = 'rectangle';
            localStorage.setItem('Figure', rectangle);
        } else if (document.getElementById('selectFigure').value === 'circle') {
            let circleF = new Path2D();
            circleF.arc(event.offsetX, event.offsetY, 5 + s, 2 * Math.PI);
            ctx.fillRect(circleF);
            let circle = 'circle';
            localStorage.setItem('Figure', circle);
        } else {
            s /= 5;
            ctx.beginPath();
            ctx.moveTo(event.offsetX, event.offSetY);
            ctx.lineTo(event.offsetX + 5 * s, event.offsetY + 7 * s);
            ctx.lineTo(event.offsetX + 12 * s, event.offsetY + 7 * s);
            ctx.lineTo(event.offsetX + 17 * s, event.offsetY);
            ctx.lineTo(event.offsetX + 12 * s, event.offsetY - 7 * s);
            ctx.lineTo(event.offsetX + 5 * s, event.offsetY - 7 * s);
            ctx.fill();
            let hexagon = 'hexagon';
            localStorage.setItem('Figure', hexagon);
        }
    }
}



function startDraw (event) {
    const canvas = event.target;
        if(canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            if( flag === true) {
                let s = changeSize();
                ctx.lineWidth = s / 5;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(event.offsetX, event.offsetY);
                canvas.removeEventListener('mousedown', setFigure);
                canvas.addEventListener('mousemove', continueDraw);
       } else {
           canvas.addEventListener('mousedown', setFigure);
       }
    }
}

function continueDraw (event) {
    const canvas = event.target;
        if( canvas && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.stroke();
            ctx.strokeStyle = fillColor;
        }
}

function stopDraw (event) {
    const canvas = event.target;
        if(canvas && canvas.getContext) {
            canvas.removeEventListener('mousemove', continueDraw);
        }
        canvas.addEventListener('mousedown', setFigure);
}


function changeSize () {
    const canvas = event.target;
        if(canvas && canvas.getContext) {
            let size = document.getElementById('getColor').value;
            localStorage.setItem('Size', size);
            return size;
        }
}

function changeColor (event) {
    if(event.key === 'Enter') {
        fillColor = document.getElementById('getColor').value;
        //colorName
        //colorBg
        localStorage.setItem('Color', fillColor);
    }
}

function setPen () {
    if (flag === false) {
        document.getElementById("pen").style.backgroundColor = "pen";
        flag = true;
    } else {
        document.getElementById("pen").style.backgroundColor = '';
        flag = false;
    }
}

function setCoordinates (event) {
    const canvas = event.target;
        if( canvas && canvas.getContext) {
            document.getElementById('coordinates').innerHTML = event.offsetX + ':' + event.offsetY;
        }
}








