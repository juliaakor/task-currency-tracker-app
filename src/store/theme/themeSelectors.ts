import { RootState } from '@store/index';

export const selectIsThemeDark = (state: RootState) => state.theme.isThemeDark;
