import React from "react";

const usersContext = React.createContext({
    modalClass : "",
    formClass : "",
    dispatch : () => {},
})

export default usersContext