import { RootState } from '@store/index';

export const selectStatusLastUpdated = (state: RootState) => state.updateStatus.lastUpdated;
