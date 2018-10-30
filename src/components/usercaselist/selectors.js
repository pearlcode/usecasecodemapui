export const findUserCase = (userCases, id) => {
    return userCases.find(u => u.id === parseInt(id));
};