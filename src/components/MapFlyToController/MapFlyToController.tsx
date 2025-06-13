import { useMap, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import 'animate.css';
import { useRef, useEffect } from 'react';

interface MapFlyToControllerProps {
  coords: [number, number] | null;
  zoom?: number;
  duration?: number;
}

export function MapFlyToController({ 
  coords, 
  zoom = 6, 
  duration = 2 
}: MapFlyToControllerProps) {
  const map = useMap();
  const hasAnimated = useRef(false);

  // 1. При загрузке карты запускаем перемещение
  useEffect(() => {
    if (!coords) return;
    
    map.flyTo(coords, zoom, {
      duration,
      easeLinearity: 0.25
    });
  }, [map, coords, zoom, duration]);

  // 2. После завершения перемещения показываем анимацию
  useMapEvent('moveend', () => {
    if (hasAnimated.current || !coords) return;
    
    // Создаем временный маркер с анимацией
    const circle = L.circle(coords, {
        radius: 30,
        color: '#ff0000',
        weight: 5,
        className: 'animate__animated animate__flash',
        pane: 'popupPane'
      }).addTo(map);

    hasAnimated.current = true;

    // Удаляем через 2 секунды
    setTimeout(() => {
      map.removeLayer(circle);
    }, 2000);
  });

  return null;
}