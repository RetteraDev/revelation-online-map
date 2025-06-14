import { 
  Chip, 
  Stack, 
  Typography,
  Box,
} from '@mui/material';
import { green, orange, red } from '@mui/material/colors';

import { Tooltip } from '@mui/material';

enum Server {
  ATUM = 'Атум',
  KENSAI = 'Кенсай',
  RAELIS = 'Раэлис',
}

enum Role {
  DEV = 'Разработчик',
  RESEARCHER = 'Искатель'
}

enum ClassColor {
  DRUID = '#4caf50',
  GUNNER = '#f44336',
  KNIGHT = '#ff9800'
}

type People = {
  name: string,
  server: string,
  role: string,
  classColor: string
}

const people: People[] = [
  {
    name: 'Rettera',
    server: Server.ATUM,
    role: Role.DEV,
    classColor: ClassColor.DRUID
  },
  {
    name: 'Jegermeister',
    server: Server.ATUM,
    role: Role.RESEARCHER,
    classColor: ClassColor.DRUID
  },
  {
    name: 'mrsLunarie',
    server: Server.ATUM,
    role: Role.RESEARCHER,
    classColor: ClassColor.DRUID
  },
  {
    name: 'Megaferz',
    server: Server.RAELIS,
    role: Role.RESEARCHER,
    classColor: ClassColor.KNIGHT
  },
  {
    name: 'курвалол',
    server: Server.ATUM,
    role: Role.RESEARCHER,
    classColor: ClassColor.DRUID
  },
  {
    name: 'JustJigurda',
    server: Server.ATUM,
    role: Role.RESEARCHER,
    classColor: ClassColor.DRUID
  },
  {
    name: 'Usy',
    server: Server.ATUM,
    role: Role.RESEARCHER,
    classColor: ClassColor.DRUID
  },
  {
    name: 'Meimo',
    server: Server.ATUM,
    role: Role.RESEARCHER,
    classColor: ClassColor.GUNNER
  }
];


export default function Thanks() {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Над картой работали</Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
                {people.map((person, index) => (
                    <Tooltip key={index} title={`${person.role} (${person.server})`}>
                        <Stack alignItems="center" spacing={1}>
                            <Chip
                                key={index}
                                label={person.name}
                                variant="outlined"
                                size="small"
                                sx={{ 
                                    borderColor: person.classColor,
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