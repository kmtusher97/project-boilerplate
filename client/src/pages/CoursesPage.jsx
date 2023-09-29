import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';

import { useCourses } from '../hooks/useCourses';

import { CourseCard } from '../components/CourseCard';
import { CreateCourseForm } from '../components/CreateCourseForm';

export const CoursesPage = () => {
  const { coursesQuery } = useCourses();

  const [openModal, setOpenModal] = useState(false);

  const handleCloseForm = () => setOpenModal(false);

  if (coursesQuery.isLoading) {
    return <h1>Loading!!!!!</h1>;
  }

  return (
    <Box>
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
        {(coursesQuery.data || []).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </Box>
      <Button onClick={() => setOpenModal(true)}>+ Add Course</Button>
      <Modal
        open={openModal}
        onClose={handleCloseForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            marginTop: '72px',
            bgcolor: 'background.paper',
          }}
        >
          <CreateCourseForm onCloseForm={handleCloseForm} />
        </Box>
      </Modal>
    </Box>
  );
};
