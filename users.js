let users = ['John', 'Paul', 'George', 'Ringo'];

function getUsers() {
    return users;
}

export default getUsers();

// had problems with { getUsers } here,
// but it works with default and () at the end of the function