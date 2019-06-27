export const enableHelp = () => {
    return {
        type: 'ENABLE_HELP',
    }
};
export const disableHelp = () => {
    return {
        type: 'DISABLE_HELP',
    }
};
export const openModal = (helpType) => ({
        type: 'OPEN_MODAL',
        helpType
});
export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    }
};
