import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { coordinateReference } from '../../utils/mapConfig';
import './Map.css';
import MapCoordinates from '../MapCoordinates/MapCoordinates';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gatheringSpotItems, gatheringSpots, IMapPoint, mapPoints } from '../../data/resources';


function Map() {
    const [searchParams] = useSearchParams();
    const [filteredPoints, setFilteredPoints] = useState<IMapPoint[]>([]);

    useEffect(() => {
        const itemIds = searchParams.get('items')?.split(',') || [];

        const spotsWithItem = gatheringSpotItems
        .filter(gsItem => itemIds.includes(String(gsItem.itemId)) )
        .map(gsItem => gsItem.gatheringSpotId);
        
        setFilteredPoints(mapPoints.filter(point => 
        spotsWithItem.includes(point.gatheringSpotId)
        )) 

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

            {/* Пока не понятно надо или нет */}
            {/* <SearchString /> */}

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
