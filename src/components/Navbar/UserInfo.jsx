import React from 'react'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function UserInfo() {


  const User = <div>
    <p style={{ margin: 0 }} ><b>Paco Rion</b></p>
    <p style={{ margin: 0 }} >Agente Mesa</p>
  </div>

  return (
    <Stack direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Badge badgeContent={4} color="primary">
        <NotificationsIcon color="action" />
      </Badge>
      <Chip
        sx={{
          height: 'auto',
          '& .MuiChip-label': {
            display: 'block',
            whiteSpace: 'normal',
          },
        }}
        avatar={<Avatar>P</Avatar>} label={User} />
    </Stack>
  )
}
