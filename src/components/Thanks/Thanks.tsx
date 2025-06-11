import { 
  Chip, 
  Stack, 
  Typography,
  Box,
} from '@mui/material';
import { green, red } from '@mui/material/colors';

import { Tooltip } from '@mui/material';

type People = {
    name: string,
    tooltip: string,
    color: string
  }

const people: People[] = [
  {
    name: 'Rettera',
    tooltip: 'Разработчик',
    color: green[500]
  },
  {
    name: 'mrsLunarie',
    tooltip: 'Искатель',
    color: green[500]
  },
  {
    name: 'Meimo',
    tooltip: 'Искатель',
    color: red[500]
  }
];


export default function Thanks() {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Над картой работали</Typography>
            <Stack direction="row" spacing={2}>
                {people.map((person, index) => (
                    <Tooltip key={index} title={person.tooltip}>
                        <Stack alignItems="center" spacing={1}>
                            <Chip
                                key={index}
                                label={person.name}
                                variant="outlined"
                                size="small"
                                sx={{ 
                                    borderColor: person.color,
                                    borderWidth: 2,
                                    fontWeight: 'bold'
                                }}
                            />
                        </Stack>
                    </Tooltip>
                ))}
            </Stack>
        </Box>
    );
}