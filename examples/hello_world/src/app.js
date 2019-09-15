import {Plot} from 'sigplot';
import {AccordionPlugin} from 'sigplot/js/plugins';

let options = {};
let plot = new Plot(document.getElementById('plot'), options);

let accordion = new AccordionPlugin({
    draw_center_line: true,
    shade_area: true,
    draw_edge_lines: false,
    direction: "horizontal",
    center_line_style: {
        strokeStyle: "#0000FF"
    }
});
accordion.set_center(0)
accordion.set_width(1)
plot.add_plugin(accordion);
