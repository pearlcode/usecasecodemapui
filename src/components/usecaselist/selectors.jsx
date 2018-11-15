const selectById = (id, usecases = []) => (usecases.length && usecases[0].id
    ? usecases.find(u => u.id && u.id === parseInt(id, 10))
    : undefined);

export default selectById;
