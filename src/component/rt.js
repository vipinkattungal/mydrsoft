import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Addpt from './addPatient';
import EnhancedTable from './viewPatient'
import { useLocation } from 'react-router-dom';

import Form from './patientDetailsForm'
import VerticalTimeline from './TimeLine'

// import EnhancedTable from '../component/viewPatient'
import AddPatientForm from './addPtnew'
import Dashboard from './Dashbord/index'
import PatientDashboard from './Dashbord/patientDashbord'
import AppointmentTable from'./Dashbord/components/appointmentTable'
import InvoiceGenerator from'./Dashbord/components/invoice'
import Login from '../login'
export default function Rt() {
    return (
        <Router >
            <Routes>
                <Route  path="/viewpt" element={<EnhancedTable />} />
                <Route  path="/Addpt" element={<AddPatientForm />} />
                <Route  path="/PatientDetails" element={<Form />} />
                <Route  path="/Timeline" element={<VerticalTimeline />} />
                <Route  path="/" element={<Login />} />
                <Route  path="/dashboard" element={<Dashboard />} />

                <Route  path="/patientDashbord" element={<PatientDashboard />} />
                <Route  path="/appointment" element={<AppointmentTable />} />
                <Route  path="/invoice" element={<InvoiceGenerator />} />

            </Routes>
        </Router>
    )
}