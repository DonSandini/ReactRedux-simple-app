import { START_LOADING, STOP_LOADING } from '../constants/loaders';

export function startLoading({ name }) {
    return {
        type: START_LOADING,
        payload: { name }
    };
}

export function stopLoading({ name }) {
    return {
        type: STOP_LOADING,
        payload: { name }
    };
}
