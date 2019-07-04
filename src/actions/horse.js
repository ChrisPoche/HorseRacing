import uuid from 'uuid';

export const addHorse = (horse) => ({
    type: 'ADD_HORSE',
    horse: {
        id: uuid(),
        name : horse.name,
        owner : horse.owner,
        silks : horse.silks,
        pedigree : horse.pedigree,
        stats : horse.stats,
        trackStats : horse.trackStats,
        currentRace : horse.currentRace
    }
});

export const removeHorse = ({ id } = {}) => ({
    type: 'REMOVE_HORSE',
    id
});

export const editHorse = (id, update) => ({
    type: 'EDIT_HORSE',
    id,
    update
});