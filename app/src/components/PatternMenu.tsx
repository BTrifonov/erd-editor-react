import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Svg, Rect } from '@svgdotjs/svg.js';
import createGridPattern from '../utils/gridPattern';
import createDotPattern from '../utils/dotPattern';


/**TODO: Good practice to extract it in another file */
interface PatternMenuProps {
  drawPlane: Svg;
  backgroundPattern: Rect | null;
}

function PatternMenu({ drawPlane, backgroundPattern }: PatternMenuProps) {
  /**
   * Create a blank mask for the draw plane
   */
  function handleNoPattern() {
    if (backgroundPattern) {
      backgroundPattern.fill('none');
      console.log("Removed pattern!\n");
      console.log(backgroundPattern);
    }
  }

  /**
   * Create a dot pattern for the draw plane
   */
  function handleDotPattern() {
    if (backgroundPattern) {
      backgroundPattern.fill('none');
    }

    const dotPattern = createDotPattern(drawPlane);
    if (backgroundPattern) {
      backgroundPattern.fill(dotPattern);
    }

    console.log('Changed to dot pattern!\n');
    console.log(backgroundPattern);
  }

  /**
   * Create a grid pattern for the draw plane
   */
  function handleGridPattern() {
    if (backgroundPattern) {
      backgroundPattern.fill('none');
    }

    const gridPattern = createGridPattern(drawPlane);
    if (backgroundPattern) {
      backgroundPattern.fill(gridPattern);
    }

    console.log('Changed to grid pattern!\n');
    console.log(backgroundPattern);
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
