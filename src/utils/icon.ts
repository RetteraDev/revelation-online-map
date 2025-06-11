import L from 'leaflet';

function getIcon(url: string) : L.Icon {
    const icon = new L.Icon({
        iconUrl: url,
        iconSize: new L.Point(20, 20),
        className: 'leaflet-div-icon'
    });

    return icon
}

export function getItemIconURL(id: string): string {
    return `/revelation-online-map/icon/item/${id}.png`
}

export function getSpotIconURL(id: string): string {
    return `/revelation-online-map/icon/gatheringSpot/${id}.png`
}

export function getItemIcon(id: string): L.Icon {
    return getIcon(getItemIconURL(id))
}

export function getSpotIcon(id: string): L.Icon {
    return getIcon(getSpotIconURL(id))
}
