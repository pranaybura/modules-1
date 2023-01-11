(
    function usersWrapper () { 
        var users = ['John', 'Paul', 'George', 'Ringo'];
    
        function getUsers() {
            return users;
        }
    
        APP.getUsers = getUsers;
    }
)()