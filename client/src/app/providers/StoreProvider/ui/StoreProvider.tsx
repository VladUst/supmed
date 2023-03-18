import { type ReactNode } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { createReduxStore } from '../config/store';
import { type StateSchema } from '../config/StateSchema';
import { type DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState
  } = props;
  const store = createReduxStore(initialState as StateSchema);
  return (
      <Provider store={store}>
          {children}
      </Provider>
  );
};
type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();