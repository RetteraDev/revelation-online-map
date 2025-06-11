import {
  Box,
  Typography,
  Divider,
  Avatar,
  Chip,
} from '@mui/material';
import { EItem, ESpot, items, Location } from '../../data/resources';
import { getItemIconURL, getSpotIconURL } from '../../utils/icon';
import { Popup } from 'react-leaflet';

interface MapPopupProps {
  spotId: ESpot
  spotName: string
  coordinates: Location
  itemIds: EItem[]
}

function MapPopup (props: MapPopupProps) {

  return (
    <Popup maxWidth={400}>
      <Box display="flex" alignItems="center" mb={1}>
        <Avatar 
          src={getSpotIconURL(props.spotId)} 
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

      <Typography variant="overline" color="primary" display="block" gutterBottom>
        Можно добыть:
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {props.itemIds.map((item) => (
          <Chip
            key={items[item].id}
            avatar={<Avatar src={getItemIconURL(item)} />}
            label={items[item].name}
            size="small"
            variant="outlined"
          />
        ))}
      </Box>
    </Popup>
  );
};

export default MapPopup;
