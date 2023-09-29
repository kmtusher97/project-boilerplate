import { useQuery } from '@tanstack/react-query';

import courseServices from '../services/courseServices';

export const useCourses = () => {
  const coursesQuery = useQuery({
    queryKey: ['courses'],
    queryFn: courseServices.getCourses,
  });

  return { coursesQuery };
};
