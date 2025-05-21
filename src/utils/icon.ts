import L from 'leaflet';

export function getItemIcon(item: number): L.Icon {
    const icon = new L.Icon({
        iconUrl: `/revelation-online-map/icon/item/${item}.png`,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    return icon
}

export function getGatheringSpotIcon(gatheringSpotId: number): L.Icon {
    const icon = new L.Icon({
        iconUrl: `/revelation-online-map/icon/gatheringSpot/${gatheringSpotId}.png`,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    return icon
}
