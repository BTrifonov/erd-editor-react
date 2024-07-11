import React, { useEffect, useRef, useState } from 'react';
import { Svg } from '@svgdotjs/svg.js';
import '@svgdotjs/svg.draggable.js';
import EntityKeySelect from './EntityKeySelect';

interface ElementGeneratorProps {
  drawPlane: Svg;
}

function ElementGenerator({ drawPlane }: ElementGeneratorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const foreignObjectRef = useRef<any>(null);  // Reference to the foreignObject for access

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the foreignObject
    const foreignObject = drawPlane.foreignObject(250, 50).move(0, 0);
    const foreignObjectNode = foreignObject.node;

    // Store reference to the foreignObject
    foreignObjectRef.current = foreignObject;

    // Append the container div to the foreignObject
    foreignObjectNode.appendChild(containerRef.current);

    // Make the foreignObject draggable
    foreignObject.draggable();

    // Clean up by removing the foreignObject when the component unmounts
    return () => {
      foreignObjectNode.removeChild(containerRef.current!);
      foreignObject.remove();
    };
  }, [drawPlane]);

 


  return (
    <div
      ref={containerRef}
    >
      <EntityKeySelect />
    </div>
  );
}

export default ElementGenerator;
