import { formatStatusTime } from '@/lib/utils/format';
import { useAppDispatch } from '@/store';
import { setStatusUpdate } from '@/store/status';

export const useUpdateStatus = () => {
  const dispatch = useAppDispatch();

  const updateStatus = () => {
    const formattedTime = formatStatusTime(new Date());
    dispatch(setStatusUpdate(formattedTime));
  };

  return {
    updateStatus,
  };
};
