import { MapContainer, TileLayer } from 'react-leaflet';
import { coordinateReference } from '../../utils/mapConfig';
import './Map.css';
import MapCoordinates from '../MapCoordinates/MapCoordinates';
import MapMarker from '../MapMarker/MapMarker';
import { useSearchParams } from 'react-router-dom';
import { MapFlyToController } from '../MapFlyToController/MapFlyToController';
import 'leaflet/dist/leaflet.css';


function Map() {
    const [searchParams, setSearchParams] = useSearchParams()
    const urlCoords = searchParams.get('center')?.split(',').map(Number)

    return (
        <MapContainer
            crs={coordinateReference}
            center={[0, 0]}
            zoom={3}
            minZoom={3}
            maxZoom={6}
            zoomControl={false}
            style={{ height: '100vh', width: '100%', backgroundColor: "#BEBEBE" }}
            bounds={[[-5000, -7500], [5000, 7500]]}
            maxBounds={[[-7500, -10000], [7500, 10000]]}
        >
            <TileLayer
                url={process.env.PUBLIC_URL + '/map/{z}/{x}/{y}.jpg'}
                noWrap={true}
            />
            <MapFlyToController coords={urlCoords? [urlCoords[1], urlCoords[0]] : null}/>
            <MapMarker />
            <MapCoordinates />
        </MapContainer>
    );
}

export default Map;
