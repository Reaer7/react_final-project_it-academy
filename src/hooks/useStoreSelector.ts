import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
