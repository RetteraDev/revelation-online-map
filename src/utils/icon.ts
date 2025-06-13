import L from 'leaflet';

function getIcon(url: any) : L.Icon {
    return url ?
    new L.Icon({
        iconUrl: url || '/revelation-online-map/icon/missing.svg',
        iconSize: new L.Point(36, 36)
    }) : new L.Icon({
        iconUrl: '/revelation-online-map/icon/missing.svg',
        iconSize: new L.Point(20, 20)
    })
}

export function getItemIconURL(id: any): string {
    if (!id) {
        return ''
    }
    return `/revelation-online-map/icon/item/${id}.png`
}

export function getSpotIconURL(id: any): string {
    if (!id) {
        return ''
    }
    return `/revelation-online-map/icon/gatheringSpot/${id}.png`
}

export function getItemIcon(id: any): L.Icon {
    return getIcon(getItemIconURL(id))
}

export function getSpotIcon(id: any): L.Icon {
    return getIcon(getSpotIconURL(id))
}
