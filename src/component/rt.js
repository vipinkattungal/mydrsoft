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
export default function Rt() {
    return (
        <Router >
            <Routes>
                <Route  path="/viewpt" element={<EnhancedTable />} />
                <Route  path="/Addpt" element={<AddPatientForm />} />
                <Route  path="/PatientDetails" element={<Form />} />
                <Route  path="/Timeline" element={<VerticalTimeline />} />
                <Route  path="/" element={<Dashboard />} />
                <Route  path="/patientDashbord" element={<PatientDashboard />} />
            </Routes>
        </Router>
    )
}