import uuid from 'uuid';

export const addTrack = ({
    code = '',
    name = '',
    location = '',
    notableRaces = []
} = {}) => ({
    type: 'ADD_TRACK',
    track : {
        id: uuid(),
        code,
        name,
        location,
        notableRaces
    }
});

export const editTrack = ( id, update ) => ({
    type: 'EDIT_TRACK',
    id,
    update
});