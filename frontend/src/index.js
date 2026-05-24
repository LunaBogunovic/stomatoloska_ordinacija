import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.css';
import './assets/styles/index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ServiceScreen from './screens/ServiceScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import PatientInfoScreen from './screens/InfoScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmAppointmentScreen from './screens/ConfirmAppointmentScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomeScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route path="service/:id" element={<ServiceScreen />} />
      <Route path="appointment" element={<AppointmentScreen />} />
      <Route path="zakazivanje" element={<AppointmentScreen />} />
      <Route path="patient-info" element={<PatientInfoScreen />} />
      <Route path="payment" element={<PaymentScreen />} />
      <Route path="confirmation" element={<ConfirmAppointmentScreen />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();