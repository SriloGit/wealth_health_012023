import employeesReducer from "../slices/employees";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
    employees: employeesReducer
}
export default configureStore({
  reducer: reducer,
  devTools: true,
});