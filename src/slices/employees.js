import { createSlice } from "@reduxjs/toolkit";


const employeesSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        addEmployees: (state, action) => {
            state.push({...action.payload, id: state.length});
            return;
        }
    }
})

const { reducer, actions } = employeesSlice

export const { addEmployees } = actions
export default reducer