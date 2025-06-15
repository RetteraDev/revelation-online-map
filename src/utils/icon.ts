import L from 'leaflet';

const iconCache = new Map<any, L.DivIcon>();

export function getIcon(id: any): L.DivIcon {
    if (iconCache.has(id)) {
        return iconCache.get(id)!;
    }

    const url = getIconURL(id);
    const icon = url ?
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
            className: '',
            iconSize: [36, 36]
        }) : 
        new L.DivIcon({
            iconUrl: '/revelation-online-map/icon/missing.svg',
            iconSize: new L.Point(20, 20)
        });

    iconCache.set(id, icon);
    return icon;
}

export function getIconURL(id: any): string {
    if (!id) {
        return ''
    }
    return `/revelation-online-map/icon/${id}.png`
}
