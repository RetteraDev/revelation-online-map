import { useSearchParams } from 'react-router-dom';
import { getIcon } from '../../utils/icon';
import { Marker } from 'react-leaflet';
import MapPopup from '../MapPopup/MapPopup';
import { spots } from '../../data/spot';
import { items } from '../../data/item';
import { Location, spotLocations } from '../../data/location';
import { EItem, ESpot } from '../../data/enums';
import { decompressSearchParams } from '../../utils/searchParams';
import { useMemo } from 'react';

export default function MapMarker() {
    const [searchParams] = useSearchParams();
    const selectedItems = decompressSearchParams(searchParams.get('ids') || '');
    
    const uniqueSpots = useMemo(() => {
        const spotsSet = new Set<ESpot>();
        selectedItems.forEach(itemId => {
            const item = items[itemId];
            if (item?.spots) {
                item.spots.forEach(spot => spotsSet.add(spot));
            }
        });
        return spotsSet;
    }, [selectedItems]);
    
    // Мемоизированный список точек
    const filteredSpots = useMemo(() => {
        const result: Array<{
            key: string
            name: string
            location: Location
            drop: EItem[],
            iconName?: string
        }> = [];
        
        Array.from(uniqueSpots).forEach(spotId => {
            const spot = spots[spotId];
            spotLocations[spotId]?.forEach((location, index) => {
                if (!spot.hide) {
                    result.push({
                        key: `${spotId}_${index}_${location.x}_${location.y}`,
                        name: spot.name,
                        location: { 
                            x: Math.round(location.x), 
                            y: Math.round(location.y), 
                            z: Math.round(location.z)
                        },
                        drop: spot.drop,
                        iconName: spot.icon
                    });
                }
            });
        });
        
        return result;
    }, [uniqueSpots]);

    // Мемоизация иконок
    const markersWithIcons = useMemo(() => {
        return filteredSpots.map(spot => ({
            ...spot,
            icon: getIcon(spot.iconName)
        }));
    }, [filteredSpots]);

    return (
        <>
            {markersWithIcons.map(spot => (
                <Marker 
                    icon={spot.icon || ''}
                    key={spot.key}
                    position={[spot.location.y, spot.location.x]}
                >
                    <MapPopup
                        key={spot.key}
                        spotIcon={spot.iconName}
                        spotName={spot.name}
                        coordinates={{ x: spot.location.x, y: spot.location.y, z: spot.location.z }}
                        drop={spot.drop}
                    />
                </Marker>
            ))}
        </>
    );
}
