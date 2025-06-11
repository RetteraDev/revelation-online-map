import { useSearchParams } from 'react-router-dom';
import { getSpotIcon } from '../../utils/icon';
import { Marker } from 'react-leaflet';
import { EItem, ESpot, items, Location, spots } from '../../data/resources';
import MapPopup from '../MapPopup/MapPopup';

export default function MapMarker() {
    const [searchParams] = useSearchParams();
    const selectedItems = searchParams.get('ids')?.split('_') || [];
    
    const uniqueSpots = new Set<ESpot>();
    
    selectedItems.forEach(itemId => {
        const item = items[itemId as EItem];
        if (item?.spots) {
            item.spots.forEach(spot => uniqueSpots.add(spot));
        }
    });
    
    // Собираем все точки для отображения
    const filteredSpots: Array<{
        id: ESpot
        name: string
        location: Location
        itemIds: EItem[]
        key: string
    }> = [];
    
    Array.from(uniqueSpots).forEach(spotId => {
        const spot = spots[spotId];
        if (spot?.locations) {
            spot.locations.forEach((location, index) => {
                filteredSpots.push({
                    id: spotId,
                    name: spot.name,
                    location: { 
                        x: location.x, 
                        y: location.y, 
                        z: location.z 
                    },
                    itemIds: spot.items,
                    key: `${spotId}_${index}_${location.x}_${location.y}`
                });
            });
        }
    });

    return (
        <>
            {filteredSpots.map(spot => (
                <Marker 
                    icon={getSpotIcon(spot.id.toString())}
                    key={spot.key}
                    position={[spot.location.y, spot.location.x]}
                >
                    <MapPopup
                        key={spot.key}
                        spotId={spot.id}
                        spotName={spot.name}
                        coordinates={{ x: spot.location.x, y: spot.location.y, z: spot.location.z }}
                        itemIds={spot.itemIds}
                    />
                </Marker>
            ))}
        </>
    );
}
