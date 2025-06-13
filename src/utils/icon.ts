import L from 'leaflet';

export function getIcon(id: any) : L.Icon {
    const url = getIconURL(id)

    return url ?
    new L.Icon({
        iconUrl: url,
        iconSize: new L.Point(36, 36)
    }) : new L.Icon({
        iconUrl: '/revelation-online-map/icon/missing.svg',
        iconSize: new L.Point(20, 20)
    })
}

export function getIconURL(id: any): string {
    if (!id) {
        return ''
    }
    return `/revelation-online-map/icon/${id}.png`
}
