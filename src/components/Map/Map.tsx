import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { coordinateReference } from '../../utils/mapConfig';
import './Map.css';
import MapCoordinates from '../MapCoordinates/MapCoordinates';
import SearchString from '../MapFilter/SearchString';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterMapPoints } from '../../utils/resourceFilter';
import { gatheringSpots, IMapPoint } from '../../data/resources';


function Map() {
    const [searchParams] = useSearchParams();
    const [filteredPoints, setFilteredPoints] = useState<IMapPoint[]>([]);

    useEffect(() => {
        const points = filterMapPoints(searchParams);
        console.log(points)
        setFilteredPoints(points);
    }, [searchParams]);

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

            <MapCoordinates />
            <SearchString />

            {/* Рисуем ресурсы */}
            {filteredPoints.map(point => (
                <Marker key={point.mapPointId} position={[point.location.y, point.location.x]}>
                    <Popup>{gatheringSpots[point.gatheringSpotId].gatheringSpotName}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Map;
