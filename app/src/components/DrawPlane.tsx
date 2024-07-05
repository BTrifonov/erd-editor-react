import { useEffect, useRef } from 'react';
import './DrawPlane.css';

import {SVG } from '@svgdotjs/svg.js';

function DrawPlane() {

    const drawPlaneRef = useRef(null);

    useEffect(() => {
        if (drawPlaneRef.current) {
            const draw = SVG().addTo(drawPlaneRef.current).size('100%', '100%').fill('lightgrey');
            const rect = draw.rect(100, 100).attr({ fill: '#f06' });

            rect.draggable(true);
        }
    }, []);

    return (
        <div id='draw-plane' ref={drawPlaneRef}>
        </div>
    );
}

export default DrawPlane;
