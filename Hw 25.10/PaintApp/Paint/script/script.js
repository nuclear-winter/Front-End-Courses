window.onload = function () {
    init();
};

function init() {
    const canvas = document.getElementById('canvas1');
    addEventListener(canvas);
}

function addEventListener(canvas) {
    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mouseup', stop);
} 


function start (event) {
    const canvas = event.target;
    if(canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = document.getElementById('getColor').value;
        ctx.lineWidth = document.getElementById('myRange').value;
        ctx.beginPath();
        
        ctx.moveTo(event.offsetX, event.offsetY);
        if(document.getElementById('selectFigure').value === 'round') {
        canvas.addEventListener('mousemove', onPaintRound);
        } else if (document.getElementById('selectFigure').value === 'square') {
        canvas.addEventListener('mousemove', onPaintSquare);   
        } else if (document.getElementById('selectFigure').value === 'triangle') {
            canvas.addEventListener('mousemove', onPaintTriangle);
        }
    }
}

function onPaintRound(event) {
    const canvas = event.target;
    if(canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineTo(event.offsetX-10, event.offsetY-10);
        ctx.stroke();
    }
}

function onPaintSquare (event) {
    const canvas = event.target;
    if(canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.fillRect(event.offsetX-10, event.offsetY-10, ctx.lineWidth, ctx.lineWidth);
        ctx.stroke();
    }
}

function onPaintTriangle (event) {
    const canvas = event.target;
    if(canvas && canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.moveTo(event.offsetX, event.offsetY);
            ctx.lineTo(event.offsetX -ctx.lineWidth , event.offsetY +ctx.lineWidth );
            ctx.lineTo(event.offsetX +ctx.lineWidth , event.offsetY +ctx.lineWidth );
            ctx.fill();
    }
}

function stop (event) {
    const canvas = event.target;
    if(document.getElementById('selectFigure').value === 'round') {
        canvas.removeEventListener('mousemove', onPaintRound);
    } if(document.getElementById('selectFigure').value === 'square') {
        canvas.removeEventListener('mousemove', onPaintSquare);
    } if(document.getElementById('selectFigure').value === 'triangle') {
        canvas.removeEventListener('mousemove', onPaintTriangle);
    }
}








