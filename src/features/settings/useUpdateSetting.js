import toast from 'react-hot-toast';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting successfully updated');
      queryClient.invalidateQueries(['settings']);
    },
    onError: error => toast.error(error.message),
  });

  return { updateSetting, isUpdating };
}
