import { createSlice } from "@reduxjs/toolkit";
import { updateAppointment } from "../utils/appointmentUtils";

const initialState = localStorage.getItem("appointment")
  ? JSON.parse(localStorage.getItem("appointment"))
  : {
      appointmentItems: [],
      patientInfo: {},
      paymentMethod: "PayPal",
    };

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    addToAppointment: (state, action) => {
      const item = action.payload;

      const existItem = state.appointmentItems.find(
        (x) => x._id === item._id
      );

      if (existItem) {
        state.appointmentItems = state.appointmentItems.map((x) =>
          x._id === existItem._id ? item : x
        );
      } else {
        state.appointmentItems = [...state.appointmentItems, item];
      }

      return updateAppointment(state);
    },

    removeFromAppointment: (state, action) => {
      state.appointmentItems = state.appointmentItems.filter(
        (x) => x._id !== action.payload
      );

      return updateAppointment(state);
    },

    savePatientInfo: (state, action) => {
      state.patientInfo = action.payload;

      return updateAppointment(state);
    },

    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;

      return updateAppointment(state);
    },

    clearAppointmentItems: (state) => {
      state.appointmentItems = [];

      return updateAppointment(state);
    },
  },
});

export const {
  addToAppointment,
  removeFromAppointment,
  savePatientInfo,
  savePaymentMethod,
  clearAppointmentItems,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;