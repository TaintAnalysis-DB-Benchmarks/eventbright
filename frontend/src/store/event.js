import { csrfFetch } from "./csrf";

const GET_ALL_EVENTS = 'events/getAllEvents';
const GET_ONE_EVENT = 'events/getOneEvent';

const getEvents = eventList => {
    return {
        type: GET_ALL_EVENTS,
        eventList
    }
}

const getEvent = event => {
    return {
        type: GET_ONE_EVENT,
        event
    }
}

export const getAllEvents = data => async dispatch => {
    let { location, category } = data;
    if (!location) location = 'Any';

    const response = await csrfFetch(`/api/events/search/${location}/${category}`);
    const eventList = await response.json();
    dispatch(getEvents(eventList));
    return eventList;
}

export const getOneEvent = id => async dispatch => {
    const response = await csrfFetch(`/api/events/${id}`);
    const event = await response.json();
    dispatch(getEvent(event));
    return event;
}

const initialState = {};

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_EVENTS: {
            return { ...state, eventList: action.eventList };
        }
        case GET_ONE_EVENT: {
            return { ...state, event: action.event }
        }
        default:
            return state;
    }
}

export default eventsReducer;
