import { useQuery } from 'react-query';

import courseServices from '../services/courseServices';

export const useCourses = () => {
  const courseQuery = useQuery({
    queryKey: 'courses',
    queryFn: courseServices.getCourses,
  });

  return {
    courseQuery,
  };
};
