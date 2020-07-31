import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILURE, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from "./constants"

const initialState = {
    searchfield: ""
}

const initialRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchfield: action.payload });

        default:
            return state;
    }
}

export const requestRobots = (state = initialRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILURE:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}