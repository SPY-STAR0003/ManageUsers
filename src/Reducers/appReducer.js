import axios from "axios";

export default function AppReducer(state , action) {
    switch (action.type) {
        case "getUsersFromDatabase":
            let {usersInDataBase} = action.payload;
            return {
                ...state,
                users : usersInDataBase,
            }
        case "changeUsersList":
            let {userList} = action.payload;
            return {
                ...state,
                users: [
                    userList,
                    ...state.users,
                ],
            }
        case "toggleForm": 
            if (state.formClass === "d-none") {
                return {
                    ...state,
                    formClass : "d-flex",
                }
            } else {
                return {
                    ...state,
                    formClass : "d-none",
                }
            }
        case "toggleModal":
            let {modalClass , bool , userCode} = action.payload;
            return {
                ...state,
                accessModalClass: modalClass,
                accessToModal: bool,
                userCode : userCode,
            }
        case "editUser":
            // I added users from state to a new list !
            // then I remove last user and then add edited user !
            let {user} = action.payload;
            let usersList = state.users;
            let filteredList = usersList.filter(item => item.code !== user.code);
            filteredList.push(user);

            return {
                ...state,
                users: [...filteredList]
            }
        case "deleteUser":
            if (state.accessToModal) {
                let deleteUserFunction = async () => {
                    let deleteUser = await axios.delete(`https://628cca310432524c58e5e052.endapi.io/users/${state.userCode}`);
                }
                deleteUserFunction()
                // to disappear modal we require toggle modal
                return {
                    ...state,
                    accessToModal : false,
                    accessModalClass : "d-none",
                    users: state.users.filter(user => user.id !== state.userCode)
                }
            } else {
                let {id} = action.payload;
                return {
                    ...state,
                    accessModalClass: "d-flex",
                    accessToModal: true,
                    userCode : id,    
                }
            }
        default:
            return state;
    }
}