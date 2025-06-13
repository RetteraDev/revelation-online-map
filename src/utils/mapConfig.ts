import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const MAX_ZOOM = 6;
const PIC_WIDTH = 15000;
const PIC_HEIGHT = 10000;
const scale = 1 / Math.pow(2, MAX_ZOOM);

export const coordinateReference: L.CRS = L.extend({}, L.CRS.Simple, {
    transformation: new L.Transformation(scale, PIC_WIDTH * scale / 2,
    -scale, PIC_HEIGHT * scale / 2)
});
