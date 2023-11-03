import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import coursesReducer from "../Dashboard/coursesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";

const store = configureStore({
  reducer: {
    coursesReducer,
    modulesReducer,
    assignmentsReducer,
  },
});

export default store;
