import { useSearchParams } from 'react-router-dom';
import { getIcon } from '../../utils/icon';
import { Marker } from 'react-leaflet';
import MapPopup from '../MapPopup/MapPopup';
import { spots } from '../../data/spot';
import { items } from '../../data/item';
import { Location, spotLocations } from '../../data/location';
import { EItem, ESpot } from '../../data/enums';
import { decompressSearchParams } from '../../utils/searchParams';

export default function MapMarker() {
    const [searchParams] = useSearchParams();
    const selectedItems = decompressSearchParams(searchParams.get('ids') || '');
    
    const uniqueSpots = new Set<ESpot>();
    
    selectedItems.forEach(itemId => {
        const item = items[itemId];
        if (item?.spots) {
            item.spots.forEach(spot => uniqueSpots.add(spot));
        }
    });
    
    // Собираем все точки для отображения
    const filteredSpots: Array<{
        key: string
        name: string
        location: Location
        drop: EItem[],
        icon?: string
    }> = [];
    
    Array.from(uniqueSpots).forEach(spotId => {
        const spot = spots[spotId];
        spotLocations[spotId].forEach((location, index) => {
            if (!spot.hide) {
                filteredSpots.push({
                key: `${spotId}_${index}_${location.x}_${location.y}`,
                name: spot.name,
                location: { 
                    x: Math.round(location.x), 
                    y: Math.round(location.y), 
                    z: Math.round(location.z)
                },
                drop: spot.drop,
                icon: spot.icon

            });
            }
        });
    });

    return (
        <>
            {filteredSpots.map(spot => (
                <Marker 
                    icon={getIcon(spot.icon) || ''}
                    key={spot.key}
                    position={[spot.location.y, spot.location.x]}
                >
                    <MapPopup
                        key={spot.key}
                        spotIcon={spot.icon}
                        spotName={spot.name}
                        coordinates={{ x: spot.location.x, y: spot.location.y, z: spot.location.z }}
                        drop={spot.drop}
                    />
                </Marker>
            ))}
        </>
    );
}
