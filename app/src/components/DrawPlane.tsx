import { useEffect, useRef, useState } from 'react';
import './DrawPlane.css';
import { SVG, Svg, Rect } from '@svgdotjs/svg.js';
import PatternMenu from './PatternMenu';

import '@svgdotjs/svg.draggable.js';
import ElementGenerator from './ElementGenerator';

function DrawPlane() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [drawPlane, setDrawPlane] = useState<Svg | null>(null);
  const [rectMask, setRectMask] = useState<Rect | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svgElement = SVG().addTo('#draw-plane');
    setDrawPlane(svgElement);

    // Create the background pattern
    const rect = svgElement.rect('100%', '100%').fill('none');
    setRectMask(rect);

    svgElement.rect(50, 50).fill('red').draggable();

    return () => {
      svgElement.clear();
      svgElement.remove();
    };
  }, [svgRef]);

  if (drawPlane == null || rectMask == null) {
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
        </div>
      </div>
    );
  }

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
          <PatternMenu drawPlane={drawPlane} backgroundPattern={rectMask} />
          <ElementGenerator drawPlane={drawPlane}/>
        </div>
      </div>
    </div>
  );
}

export default DrawPlane;
