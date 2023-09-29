import { useFormik } from 'formik';
import { Box, Button, TextField } from '@mui/material';

import { useCreateCourse } from '../hooks/useCreateCourse';

export const CreateCourseForm = ({ onCloseForm }) => {
  const { courseMutation } = useCreateCourse();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '0',
      startDate: new Date(),
    },
    onSubmit: (values) => {
      courseMutation.mutate(values);
      onCloseForm();
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingX: '72px',
        paddingY: '72px',
        gap: '16px',
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            onChange={formik.handleChange}
            required
          />
          <TextField
            label="Description"
            variant="outlined"
            name="description"
            onChange={formik.handleChange}
          />
          <TextField
            label="Price"
            variant="outlined"
            name="price"
            type="number"
            onChange={formik.handleChange}
          />
          <TextField
            name="startDate"
            type="date"
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            type="submit"
            disabled={formik.isSubmitting}
          >
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};
