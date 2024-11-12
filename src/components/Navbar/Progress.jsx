import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

export default function Progress() {

  const progress = 50
  
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ color: 'text.secondary', mr: "10px" }}>
        Estado de Folio
      </Typography>
      <div style={{ minWidth: '100px' }} >
        <LinearProgress variant="determinate" value={progress} />
      </div>
      <Typography variant="body2" sx={{ color: 'text.secondary', ml: '10px' }}>
        {`${Math.round(progress)}%`}
      </Typography>
    </div>
  );
}

