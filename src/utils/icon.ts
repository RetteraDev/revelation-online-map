import L from 'leaflet';

export function getIcon(id: any) : L.DivIcon {
    const url = getIconURL(id)

    return url ?
    new L.DivIcon({
        html: `
            <div style="
            background-image: url('${url}');
            background-size: cover;
            width: 36px;
            height: 36px;
            filter: drop-shadow(0 0 2px white);
            "></div>
        `,
        className: '', // Убираем стандартные стили Leaflet
        iconSize: [36, 36]
    }) : new L.DivIcon({
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
