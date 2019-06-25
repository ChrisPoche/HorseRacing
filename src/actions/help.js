// TOGGLE_HELP
// export const toggleHelp = ( hoverHelp ) => ({
//     type: 'TOGGLE_HELP',
//     hoverHelp
// });
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