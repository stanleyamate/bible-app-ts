import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ErrProps } from '../types/Bible.types';
import { MdError } from 'react-icons/md';

interface NotificationProps {
  data: ErrProps
}

const Notification = ({data}: NotificationProps) => {

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <MdError className="fill-red-600"/>
        <Typography sx={{ fontSize: 14 }} color="red" gutterBottom>
          {data.error} : {data.statusCode}
        </Typography>
        <Typography color="red" variant="body2">
          {data.message}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Notification