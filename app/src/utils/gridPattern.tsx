import { Svg } from "@svgdotjs/svg.js";

// Function to create a grid pattern
function createGridPattern(draw: Svg) {
    return draw.pattern(10, 10, function(add) {
        add.rect(10, 10).fill('none').stroke({ color: 'black', width: 1 }).opacity(0.4);
    });
};

export default createGridPattern;