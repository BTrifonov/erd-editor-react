import { Svg } from "@svgdotjs/svg.js";

// Function to create a dot pattern
function createDotPattern(draw: Svg) {
    return draw.pattern(10, 10, function(add) {
        add.circle(2).fill('grey').move(4, 4).opacity(0.8); // Create a dot with a radius of 2 at the center of each 20x20 cell
    });
};

export default createDotPattern;