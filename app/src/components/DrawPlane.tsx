import { useEffect, useRef, useState } from 'react';
import './DrawPlane.css';
import { SVG } from '@svgdotjs/svg.js';

import createDotPattern from '../utils/dotPattern';

import '@svgdotjs/svg.draggable.js';
import ElementGenerator from './ElementGenerator';


function DrawPlane() {
    const drawPlaneRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Update the dimensions state whenever the container's size changes
    useEffect(() => {
        const updateDimensions = () => {
            if (drawPlaneRef.current) {
                setDimensions({
                    width: drawPlaneRef.current.clientWidth,
                    height: drawPlaneRef.current.clientHeight
                });
            }
        };

        updateDimensions(); // Update dimensions initially
        window.addEventListener('resize', updateDimensions); // Update dimensions on window resize

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    // Depend on dimensions state to re-run when they change
    useEffect(() => {
        if (drawPlaneRef.current && dimensions.width && dimensions.height) {
            // Initialize SVG.js
            const draw = SVG().addTo(drawPlaneRef.current).size('100%', '100%').fill('lightgrey');

            // Create a mask to hide the pattern inside entities and relationships
            const mask = draw.mask();
            mask.add(draw.rect(dimensions.width, dimensions.height).fill('#fff')); // White background to hide everything
 
            const dotPattern = createDotPattern(draw);
            dotPattern.maskWith(mask);

            // Apply the pattern as the fill for a large rectangle covering the whole SVG area
            draw.rect(dimensions.width, dimensions.height).fill(dotPattern);

            const rect = draw.rect(50, 50).fill('red').draggable();
            
            // Cleanup function to remove the SVG on component unmount
            return () => {
                draw.clear();
                draw.remove();
            };
        }
    }, [dimensions]); // Depend on dimensions state to re-run when they change


    return (
        <div id='draw-plane' ref={drawPlaneRef}>
            <ElementGenerator/>
        </div>
    );
}

export default DrawPlane;

