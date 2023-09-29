import { useMutation } from '@tanstack/react-query';
import courseServices from '../services/courseServices';

export const useCreateCourse = () => {
  const courseMutation = useMutation({
    mutationKey: ['createCourse'],
    mutationFn: courseServices.createCourse,
  });

  return { courseMutation };
};
