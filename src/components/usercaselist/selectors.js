export const selectById = (id, userCases = []) => {
    return userCases.length && userCases[0].id
        ? userCases.find(u => u.id && u.id === parseInt(id))
        : undefined;
};
