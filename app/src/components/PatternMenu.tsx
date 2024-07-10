import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Svg, Mask } from '@svgdotjs/svg.js';
import createGridPattern from '../utils/gridPattern';
import createDotPattern from '../utils/dotPattern';
import React, { useRef } from 'react';
import { Rect } from '@svgdotjs/svg.js';

function PatternMenu({ drawPlane }: { drawPlane: Svg }) {
  const rectMask = useRef<Rect | null>(null);

  /**
   * Create a blank mask for the draw plane
   */
  function handleNoPattern() {
    if (rectMask.current) {
        rectMask.current.unmask();
        console.log("Removed pattern!");
    }
  }

  /**
   * Create a dot pattern for the draw plane
   */
  function handleDotPattern() {
    if (rectMask.current) {
        rectMask.current.unmask();
    }

    const newMask = drawPlane.mask();
    newMask.add(drawPlane.rect('100%', '100%').fill('#fff'));

    const dotPattern = createDotPattern(drawPlane);
    dotPattern.maskWith(newMask);

    rectMask.current = drawPlane.rect('100%', '100%').fill(dotPattern);

    console.log('Changed to dot pattern!');
  }

  /**
   * Create a grid pattern for the draw plane
   */
  function handleGridPattern() {
    if (rectMask.current) {
      rectMask.current.unmask();
    }

    const newMask = drawPlane.mask();
    newMask.add(drawPlane.rect('100%', '100%').fill('#fff'));

    const gridPattern = createGridPattern(drawPlane);
    gridPattern.maskWith(newMask);

    rectMask.current = drawPlane.rect('100%', '100%').fill(gridPattern);

    console.log('Changed to grid pattern!');
  }

  return (
    <ButtonGroup size='small' variant="contained" aria-label="Basic button group">
      <Button onClick={handleNoPattern}>No Pattern</Button>
      <Button onClick={handleDotPattern}>Dot</Button>
      <Button onClick={handleGridPattern}>Grid</Button>
    </ButtonGroup>
  );
}

export default PatternMenu;