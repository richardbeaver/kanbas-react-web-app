import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
  courses: db.courses,
  course: {
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.courses,
      ];
    },

    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },

    updateCourse: (state, action) => {
      state.courses = state.courses.map((c) => {
        if (c._id === action.payload._id) {
          return action.payload;
        } else {
          return c;
        }
      });
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
