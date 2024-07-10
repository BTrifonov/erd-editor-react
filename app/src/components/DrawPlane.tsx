import React, { useEffect, useRef, useState } from 'react';
import './DrawPlane.css';
import { SVG, Svg } from '@svgdotjs/svg.js';

import PatternMenu from './PatternMenu';


import createGridPattern from '../utils/gridPattern';

// TODO: Resolve issue with the import of draggable
import '@svgdotjs/svg.draggable.js';

function DrawPlane() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [drawPlane, setDrawPlane] = useState<Svg | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svgElement = SVG().addTo('#draw-plane');
    setDrawPlane(svgElement);

    const rect = svgElement.rect(50, 50).fill('red').draggable();

    return () => {
      svgElement.clear();
      svgElement.remove();
    };
  }, []);

  return (
    <div id='draw-container'>
      <div id='draw-plane-container'>
        <svg
          ref={svgRef}
          id='draw-plane'
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
        ></svg>
        <div id='pattern-menu-container'>
            <PatternMenu drawPlane={drawPlane} />
        </div>
      </div>
    </div>
  );
}

export default DrawPlane;
