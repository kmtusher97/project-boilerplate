import { Box, Button } from '@mui/material';
import React from 'react';

import { useCourses } from '../hooks/useCourses';

import { CourseCard } from '../components/CourseCard';

export const CoursesPage = () => {
  const { courseQuery } = useCourses();

  if (courseQuery.status === 'loading') {
    return <h1>Loading!!!!!</h1>;
  }

  return (
    <Box>
      <Box
        sx={{
          paddingX: '16px',
        }}
      >
        <Button variant="contained" color="success">
          + Add Course
        </Button>
      </Box>
      <Box
        className="my-box"
        sx={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          paddingX: '24px',
          paddingY: '8px',
        }}
      >
        {(courseQuery.data || []).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  );
};
