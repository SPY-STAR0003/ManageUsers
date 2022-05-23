
import React from "react";

const usersContext = React.createContext({
    medalClass : "",
    del : "",
    toggleModal : () => {},
    deleteUser : () => {},
    users : [],
    edit : () => {},
    hide : () => {},
    formClass : "",
    changeUsersList : () => {},
})

export default usersContext