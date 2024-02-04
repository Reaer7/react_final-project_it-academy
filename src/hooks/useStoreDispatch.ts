import { useDispatch } from 'react-redux';
import { StoreDispatch } from '../store';

export const useStoreDispatch = () => useDispatch<StoreDispatch>();
