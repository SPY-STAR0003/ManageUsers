import React from "react";

const usersContext = React.createContext({
    state : [],
    dispatch : () => {},
})

export default usersContext