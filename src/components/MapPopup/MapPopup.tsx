import {
  Box,
  Typography,
  Divider,
  Chip,
} from '@mui/material';
import { getItemIconURL, getSpotIconURL } from '../../utils/icon';
import { Popup } from 'react-leaflet';
import Icon from '../Icon/Icon';
import { items } from '../../data/item';
import { Location } from '../../data/location';
import { EItem } from '../../data/enums';
import CopyButton from '../CopyButton/CopyButton';

interface MapPopupProps {
  spotName: string
  coordinates: Location
  spotIcon?: string
  drop: EItem[]
}

function MapPopup(props: MapPopupProps) {
  const iconUrl = getSpotIconURL(props.spotIcon || '');
  const hasDrop = props.drop.length > 0;

  return (
    <Popup maxWidth={400}>
      <Box display="flex" alignItems="center" mb={1}>
        <Icon 
          src={iconUrl}
          sx={{ 
            width: 40, 
            height: 40, 
            mr: 2,
            border: '2px solid',
            borderColor: 'primary.main'
          }}
        />
        
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {props.spotName}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ({props.coordinates.x}, {props.coordinates.y}, {props.coordinates.z})
          </Typography>
        </Box>
      </Box>
      
      <Divider sx={{ my: 1 }} />
      <CopyButton additionSearchParams={`&center=${props.coordinates.x},${props.coordinates.y}`}/>

      {hasDrop && (
        <>
          <Divider sx={{ my: 1 }} />
          <Typography variant="overline" color="primary" display="block" gutterBottom>
            Можно добыть:
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {props.drop.map((item) => (
              <Chip
                key={item}
                avatar={<Icon src={getItemIconURL(items[item].icon)} />}
                label={items[item].name}
                size="small"
                variant="outlined"
              />
            ))}
          </Box>
        </>
      )}
    </Popup>
  );
};

export default MapPopup;
