import React from 'react';
import { Popup } from 'react-leaflet';
import styles from './GatheringSpotPopup.module.css';
import { IGatheringSpot, IItem, EGatheringSpot, EItem, IGatheringSpotItem } from '../../data/resources';

interface GatheringSpotPopupProps {
  point: {
    gatheringSpotId: EGatheringSpot;
    location: {
      x: number;
      y: number;
      z: number;
    };
  };
  gatheringSpots: Record<EGatheringSpot, IGatheringSpot>;
  gatheringSpotItems: IGatheringSpotItem[];
  itemsData: Record<EItem, IItem>;
}

export const GatheringSpotPopup: React.FC<GatheringSpotPopupProps> = ({
  point,
  gatheringSpots,
  gatheringSpotItems,
  itemsData
}) => {
  const spot = gatheringSpots[point.gatheringSpotId];
  const spotItems = gatheringSpotItems
    .filter(item => item.gatheringSpotId === point.gatheringSpotId);

  return (
    <Popup maxWidth={400}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            className={styles.spotIcon}
            src={`/revelation-online-map/icon/gatheringSpot/${point.gatheringSpotId as EGatheringSpot}.png`}
            alt={spot.gatheringSpotName}
          />
          <div>
            <h3 className={styles.title}>{spot.gatheringSpotName}</h3>
            <p className={styles.subtitle}>({point.location.x}, {point.location.y}, {point.location.z})</p>
          </div>
        </div>

        <hr className={styles.divider} />

        <h4 className={styles.sectionTitle}>Можно получить</h4>
        <div className={styles.itemsGrid}>
          {spotItems.map((item, index) => (
            <div key={index} className={styles.itemBadge}>
              <img
                className={styles.itemIcon}
                src={`/revelation-online-map/icon/item/${item.itemId as EItem}.png`} 
                alt={itemsData[item.itemId as EItem].itemName}
              />
              <span>{itemsData[item.itemId as EItem].itemName}</span>
            </div>
          ))}
        </div>
      </div>
    </Popup>
  );
};