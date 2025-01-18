import toast from 'react-hot-toast';
import { createUpdateCabin } from '../../services/apiCabins';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
    mutationFn: ({ newCabinData, id }) => createUpdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully updated');
      queryClient.invalidateQueries(['cabins']);
      //   reset(); // does't work
    },
    onError: error => toast.error(error.message),
  });

  return { updateCabin, isUpdating };
}
