import uuid from 'uuid';

export const addJockey = ({
    name = '',
    meetStats = {},
    yearStats = {}
} = {}) => ({
    type: 'ADD_JOCKEY',
    jockey : {
        id: uuid(),
        name,
        meetStats,
        yearStats
    }
});

export const removeJockey = ({ id } = {}) => ({
    type: 'REMOVE_JOCKEY', 
    id
});

export const editJockey = ( id, update ) => ({
    type: 'EDIT_JOCKEY',
    id,
    update
});