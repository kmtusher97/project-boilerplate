import { Box } from '@mui/material';
import React from 'react';
import { CourseCard } from '../components/CourseCard';

export const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      name: 'MERN & PERN',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      price: 5000,
      startDate: new Date().toLocaleDateString(),
    },
  ];
  return (
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
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Box>
  );
};
