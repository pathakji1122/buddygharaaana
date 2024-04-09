import React from 'react';
import { Typography, Input, Button, Stack, Box } from '@mui/material';
import Intro from "../components/Intro";
import EntryGate from '../components/EntryGate';
import Footer from '../components/Footer';


const StudentHome = () => {

    return (
        <>
            <Intro />
           
            
            <EntryGate/>
            <Footer/>
        </>
    )
}


export default StudentHome;
