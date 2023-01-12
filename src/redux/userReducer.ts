import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./store";
import User from "../units/User";
import {UserState} from "./type";
import Lucy from "../scripts/Lucy";

export type initialStateType = {
    user: User
}

const user = new User()
const initialState: initialStateType = {
    user
}

export const UserReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userRegister: (state, action: PayloadAction<UserState>) => {
            if (action.payload.user) {
                state.user = action.payload.user
            }
        },
        userLogin: (state, action: PayloadAction<UserState>) => {
            if (action.payload.user.token) {
                state.user = action.payload.user;
            } else {
                // log out
                console.log("logged-out")
                state.user = action.payload.user;
            }
        },
        userLogout: (state, action: PayloadAction) => {
            console.log("logged-out")
            state.user.token = ""
        },
    }
});

export const {userRegister, userLogin, userLogout} = UserReducer.actions;
export const selectUser = (state: RootState) => state.user;

export default UserReducer.reducer;