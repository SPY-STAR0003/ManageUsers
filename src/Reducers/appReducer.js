import moment from "moment-jalaali";

export default function AppReducer(state , action) {
    switch (action.type) {
        case "changeUsersList":
            let {userList} = action.payload;
            return {
                ...state,
                users: [
                    {
                        code : Date.now(),
                        key : Date.now(),
                        name : userList.name,
                        IDCode : userList.IDCode,
                        email : userList.email,
                        accessRate : userList.accessRate,
                        date : moment().format('jYYYY/jM/jD'),
                    },
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
                // to disappear modal we require toggle modal
                return {
                    ...state,
                    accessToModal : false,
                    accessModalClass : "d-none",
                    users: state.users.filter(user => user.code !== state.userCode)
                }
            } else {
                let {code} = action.payload;
                return {
                    ...state,
                    accessModalClass: "d-flex",
                    accessToModal: true,
                    userCode : code,    
                }
            }
        default:
            return state;
    }
}