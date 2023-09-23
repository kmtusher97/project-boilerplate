import React from 'react';
import {
  Card as MUICard,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';

export const CourseCard = ({ course }) => {
  return (
    <MUICard sx={{ width: 324 }}>
      <CardContent sx={{ minHeight: '240px' }}>
        <Typography variant="subtitle1" color="text.secondary">
          {course.name}
        </Typography>
        <Typography variant="subtitle2">{course.startDate}</Typography>
        <Typography variant="body2">{course.description}</Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant="button">{`${course.price}/-`}</Typography>
          <Button size="small" variant="outlined">
            Enroll
          </Button>
        </Box>
      </CardActions>
    </MUICard>
  );
};
