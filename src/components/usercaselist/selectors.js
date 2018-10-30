export const selectUserCase = (userCases, id) => {
    return userCases.find(u => u.id === parseInt(id));
};