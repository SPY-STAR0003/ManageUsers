
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list : [],
    formClass : "d-none",
    simpleModalClass: "d-none",
    accessToSimpleModal : false,
    userCode:"",
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersFromDatabase : (state , {payload}) => {
        let usersInDataBase = payload;
        return {
            ...state,
            list : usersInDataBase,
        }
    },
    changeUsersList : (state , { payload }) => {
        let userList = payload;
        return {
            ...state,
            list: [
                userList,
                ...state.list,
            ],
        }
    },
    toggleForm :  ( state ) => {
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
    },
    toggleModal :  ( state , { payload } ) => {
        let {modalClass , bool , userCode} = payload;
        return {
            ...state,
            simpleModalClass: modalClass,
            accessToSimpleModal: bool,
            userCode : userCode,
        }
    },
    editUser :  ( state , { payload } ) => {
        // I added list from state to a new list !
        // then I remove last user and then add edited user !
        let user = payload;
        let usersList = state.list;
        let filteredList = usersList.filter(item => item.code !== user.code);
        filteredList.push(user);

        return {
            ...state,
            list: [...filteredList]
        }
    },
    deleteUser :  ( state , { payload } ) => {
        if (state.accessToSimpleModal) {
            // to disappear modal we require toggle modal
            return {
                ...state,
                accessToSimpleModal : false,
                simpleModalClass : "d-none",
                list: state.list.filter(user => user.id !== state.userCode)
            }
        } else {
            let id = payload;
            return {
                ...state,
                simpleModalClass: "d-flex",
                accessToSimpleModal: true,
                userCode : id,    
            }
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    getUsersFromDatabase,
    changeUsersList,
    toggleForm,
    toggleModal,
    editUser,
    deleteUser
 } = usersSlice.actions;

export default usersSlice.reducer;