import { pushState, replaceState } from 'redux-router';

export default ({ getState, dispatch }) => next => action => {
    if (action.location) {
        const { state: currentState, pathname: currentPathname } = getState().router.location;
        const { op, state, pathname, query = null } = action.location;
        const newPathname = pathname || currentPathname;
        const newState = state ? { ...currentState, ...state } : null;

        if (op === 'replace') {
            dispatch(replaceState(newState, newPathname, query));
        } else {
            dispatch(pushState(newState, newPathname, query));
        }
    }

    return next(action);
};
