const selectById = (id, userCases = []) => (userCases.length && userCases[0].id
    ? userCases.find(u => u.id && u.id === parseInt(id, 10))
    : undefined);

export default selectById;
