import { MapContainer, TileLayer } from 'react-leaflet'
import { coordinateReference } from '../../utils/mapConfig'

import './Map.css'
import MapCoordinates from '../MapCoordinates/MapCoordinates'
import SearchString from '../MapFilter/SearchString'


function Map() {

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
        >
            <TileLayer
                url={process.env.PUBLIC_URL + '/map/{z}/{x}/{y}.jpg'}
                noWrap={true}
            />

            <MapCoordinates/>
            <SearchString/>
        </MapContainer>
    )
}

export default Map;
