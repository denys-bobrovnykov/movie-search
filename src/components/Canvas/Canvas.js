import React, { useEffect, useRef } from 'react';


export const Canvas = (props) => {

    const canvasRef = useRef(null);

    const draw = ctx => {
        ctx.strokeStyle = +props.rating >= 7 ? 'green': 'yellow';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, ctx.canvas.width / 2 - 4, 1.5 * Math.PI,  (2 * Number(props.rating) / 10 - 2.5) * Math.PI);
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.font = "14px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"
        ctx.fillText(`${props.rating.toFixed(1)}`, ctx.canvas.width / 2, ctx.canvas.height / 2 + 3.5);
    }
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        draw(context);
    }, []);
    
    return <canvas ref={ canvasRef } height="40" width="40" />

}