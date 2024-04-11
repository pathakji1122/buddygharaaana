import React from "react";
import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
import { useRef } from "react";
const SignUp = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedHostel, setSelectedHostel] = useState(null);
  const hostelInputRef = useRef(null); 
  const branchInputRef = useRef(null); 
  const yearInputRef = useRef(null); 
  const [loading, setLoading] = React.useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(null);
  const [registrationError, setRegistrationError] = React.useState(null);
  const Hostel = [
    "Aryabhatta",
    "RNT",
    "Gargi"
  ];
  const Branch = [
    "Computer Science",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
    "Chemical",
    "Producation",
    "Instrumentation",
    "BioTech",
    "IIIT",
    // Add more branches as needed
  ];
  const Year = [
    "First Year",
    "Second Year",
    "Third Year",
    "Fourth Year",
    
  ];
  const [student, setStudent] = useState({
     name: "",
    year: "",
    phoneNo: "",
    password: "",
    branch: "",
    hostel:"",
    enrollmentNo:"",
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    setRegistrationError(null);
    e.preventDefault();
    try {
      const studentData = {
        ...student,
        hostel: selectedHostel,
        year:selectedYear,
        branch:selectedBranch
        
      };
      const response = await axios.post('https://gharaanah.onrender.com/engineering/signup', 
        studentData
      );

      if (response.data.action === true) {
        console.log('Data sent successfully:', response.data);
        setStudent({
          name: "",
          year: "",
          phoneNo: "",
          password: "",
          branch: "",
          hostel:"",
          enrollmentNo:""
        });
        
        setSelectedHostel(null); 
        setSelectedBranch(null);
        setSelectedYear(null);
        hostelInputRef.current.value = "";
        branchInputRef.current.value="";
        yearInputRef.current.value="";
        setRegistrationSuccess(response.data.response);
      } else if (response.data.action === false) {
         setSelectedHostel(null); 
         setSelectedBranch(null);
         setSelectedYear(null);
        hostelInputRef.current.value = "";
        branchInputRef.current.value="";
        yearInputRef.current.value="";
        setRegistrationError(response.data.response);
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setStudent({
        name: "",
        year: "",
        phoneNo: "",
        password: "",
        branch: "",
        hostel:"",
        enrollmentNo:""
      });
      setSelectedHostel(null); 
      setSelectedBranch(null);
      setSelectedYear(null);
      hostelInputRef.current.value = "";
        branchInputRef.current.value="";
        yearInputRef.current.value="";
    }
    finally {
      setLoading(false);
    }
  };
  return (
 <>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
         <Card sx={{
        backgroundColor: 'inherit',
        width: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
        alignItems: 'center',
        border: 'none',
        maxWidth: '450px',
      }}>
             <Typography variant="h5" sx={{ fontFamily: 'system-ui' }}>
        SignUp 
      </Typography>
      <Stack spacing="20px" sx={{ alignItems: 'center', width: '100%' }}> 
      <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing=" 5px">
           <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}
            required
             >
            Full Name
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQzNy4wMiAzMzAuOThjLTI3Ljg4My0yNy44ODItNjEuMDcxLTQ4LjUyMy05Ny4yODEtNjEuMDE4QzM3OC41MjEgMjQzLjI1MSA0MDQgMTk4LjU0OCA0MDQgMTQ4IDQwNCA2Ni4zOTMgMzM3LjYwNyAwIDI1NiAwUzEwOCA2Ni4zOTMgMTA4IDE0OGMwIDUwLjU0OCAyNS40NzkgOTUuMjUxIDY0LjI2MiAxMjEuOTYyLTM2LjIxIDEyLjQ5NS02OS4zOTggMzMuMTM2LTk3LjI4MSA2MS4wMThDMjYuNjI5IDM3OS4zMzMgMCA0NDMuNjIgMCA1MTJoNDBjMC0xMTkuMTAzIDk2Ljg5Ny0yMTYgMjE2LTIxNnMyMTYgOTYuODk3IDIxNiAyMTZoNDBjMC02OC4zOC0yNi42MjktMTMyLjY2Ny03NC45OC0xODEuMDJ6TTI1NiAyNTZjLTU5LjU1MSAwLTEwOC00OC40NDgtMTA4LTEwOFMxOTYuNDQ5IDQwIDI1NiA0MHMxMDggNDguNDQ4IDEwOCAxMDgtNDguNDQ5IDEwOC0xMDggMTA4eiIgZmlsbD0iIzdhN2E3YSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              placeholder="Enter Full name"
              label="Name"
            value={student.name}
            onChange={handleInputs}
            name="name"
              disableUnderline></Input>
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}
            required
           >
            Phone no
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQ2NyA3Nkg0NUMyMC4xMzcgNzYgMCA5Ni4yNjIgMCAxMjF2MjcwYzAgMjQuODg1IDIwLjI4NSA0NSA0NSA0NWg0MjJjMjQuNjU1IDAgNDUtMjAuMDMgNDUtNDVWMTIxYzAtMjQuNjk0LTIwLjA1Ny00NS00NS00NXptLTYuMzAyIDMwTDI4Ny44MiAyNzcuOTY3Yy04LjUgOC41LTE5LjggMTMuMTgtMzEuODIgMTMuMThzLTIzLjMyLTQuNjgxLTMxLjg0OC0xMy4yMDhMNTEuMzAyIDEwNmg0MDkuMzk2ek0zMCAzODQuODk0VjEyNy4xMjVMMTU5LjYzOCAyNTYuMDggMzAgMzg0Ljg5NHpNNTEuMzIxIDQwNmwxMjkuNTg3LTEyOC43NjMgMjIuMDU5IDIxLjk0M2MxNC4xNjYgMTQuMTY2IDMzIDIxLjk2NyA1My4wMzMgMjEuOTY3czM4Ljg2Ny03LjgwMSA1My4wMDUtMjEuOTM5bDIyLjA4Ny0yMS45NzFMNDYwLjY3OSA0MDZINTEuMzIxek00ODIgMzg0Ljg5NCAzNTIuMzYyIDI1Ni4wOCA0ODIgMTI3LjEyNXYyNTcuNzY5eiIgZmlsbD0iIzdhN2E3YSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="tel"
              placeholder="Enter Phoneno"
              label="Phoneno"
              value={student.phoneNo}
              onChange={handleInputs}
              name="phoneNo"
              disableUnderline></Input>
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Enter EnrollmentNo
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              placeholder="Enter enrollmentNo"
              label="enrollmentNo"
            value={student.enrollmentNo}
            onChange={handleInputs}
            name="enrollmentNo"
              disableUnderline></Input>
          </Stack>
        </Stack>
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Choose Password
          </InputLabel>
          <Stack
            sx={{
              borderRadius: '0.25rem',
              alignItems: 'center',
              border: '1px solid rgb(207,210,217)',
              width: '100%',
              paddingLeft: '10px',
              columnGap: '3px',
              cursor: 'pointer',
            }}
            spacing="0px"
            direction="row">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
              width="16px"
              height="16px"
            />
            <Input
              sx={{
                '& .MuiInput-input': { padding: '0' },
                border: 'none',
                width: '94%',
                fontSize: '14px',
                padding: '8px',
                borderRadius: '4px',
                outline: 'none',
              }}
              type="text"
              placeholder="Enter password"
              label="password"
            value={student.password}
            onChange={handleInputs}
            name="password"
              disableUnderline></Input>
          </Stack>
        </Stack>
        
        <Stack
          sx={{
            alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
          }}
          spacing="10px">
          <InputLabel
            sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
            Enter Hostel
          </InputLabel>
          <Stack
  sx={{
    borderRadius: '0.25rem',
    alignItems: 'center',
    border: '1px solid rgb(207,210,217)',
    width: '100%',
    paddingLeft: '10px',
    columnGap: '3px',
    cursor: 'pointer',
  }}
  spacing="0px"
  direction="row">
    
  <img
    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
    width="16px"
    height="16px"
  />
    <Autocomplete
            ref={hostelInputRef}
  disablePortal
  id="combo-box-demo"
  options={Hostel}
  sx={{ width: '100%', flex: 1 }}
  value={selectedHostel}
  onChange={(event, newValue) => setSelectedHostel(newValue)}
  renderInput={(params) => (
    <TextField
      {...params}
      label=""
      variant="standard"
    />
  )}
  />
</Stack>
      </Stack>
      <Stack
              sx={{
                alignItems: 'flex-start',
            width: '100%',
            fontFamily: 'system-ui',
              }}
              spacing="10px">
             
              <InputLabel
                sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
                Branch
              </InputLabel>
              <Stack
                sx={{
                  borderRadius: '0.25rem',
                  alignItems: 'center',
                  border: '1px solid rgb(207,210,217)',
                  width: '100%',
                  paddingLeft: '10px',
                  columnGap: '3px',
                  cursor: 'pointer',
                }}
                spacing="0px"
                direction="row">
    
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                  width="16px"
                  height="16px"
                />
                <Autocomplete
                  value={selectedBranch}
                  disablePortal
                  id="combo-box-demo"
                  onChange={(event, newValue) => {
                    setSelectedBranch(newValue);
                  }}
                  options={Branch}
                  sx={{ width: '100%', flex: 1 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={branchInputRef}
                      placeholder="Select Branch"
                      label="Branch"
                      disableUnderline
                    />
                  )}
                />
              </Stack>
            </Stack>
            <Stack
              sx={{
                alignItems: 'flex-start',
                width: '100%',
                fontFamily: 'system-ui',
              }}
              spacing="10px">
              {/* Year Input */}
              <InputLabel
                sx={{ color: '#0d2036', fontSize: '14px', fontWeight: '600' }}>
                Year
              </InputLabel>
              <Stack
                sx={{
                  borderRadius: '0.25rem',
                  alignItems: 'center',
                  border: '1px solid rgb(207,210,217)',
                  width: '100%',
                  paddingLeft: '10px',
                  columnGap: '3px',
                  cursor: 'pointer',
                }}
                spacing="0px"
                direction="row">
                {/* Year Icon */}
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIGRhdGEtbmFtZT0iMTItTG9jayI+PHBhdGggZD0iTTIzIDEyVjguNzFBNi43MiA2LjcyIDAgMCAwIDE2LjI5IDJoLS41OEE2LjcyIDYuNzIgMCAwIDAgOSA4LjcxVjEyYTMgMyAwIDAgMC0zIDN2OS4zYTUuNzEgNS43MSAwIDAgMCA1LjcgNS43aDguNmE1LjcxIDUuNzEgMCAwIDAgNS43LTUuN1YxNWEzIDMgMCAwIDAtMy0zWk0xMSA4LjcxQTQuNzEgNC43MSAwIDAgMSAxNS43MSA0aC41OEE0LjcxIDQuNzEgMCAwIDEgMjEgOC43MVYxMkgxMVpNMjQgMjQuM2EzLjcgMy43IDAgMCAxLTMuNyAzLjdoLTguNkEzLjcgMy43IDAgMCAxIDggMjQuM1YxNWExIDEgMCAwIDEgMS0xaDE0YTEgMSAwIDAgMSAxIDFaIiBmaWxsPSIjN2E3YTdhIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PHBhdGggZD0iTTE3IDIwLjcyVjI0YTEgMSAwIDAgMS0yIDB2LTMuMjhhMiAyIDAgMSAxIDIgMFoiIGZpbGw9IiM3YTdhN2EiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                  width="16px"
                  height="16px"
                />
                {/* Year Input Field */}
                <Autocomplete
                  value={selectedYear}
                  onChange={(event, newValue) => {
                    setSelectedYear(newValue);
                  }}
                  options={Year}
                  sx={{ width: '100%', flex: 1 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={yearInputRef}
                      
                      placeholder="Select Year"
                      label="Year"
                      disableUnderline
                    />
                  )}
                />
              </Stack>
            </Stack>   
        </Stack>
        <br></br>
                  {registrationSuccess && <Typography variant="body1" sx={{ color: "green", textAlign: "center" }}>{registrationSuccess}</Typography>}
          {registrationError && <Typography variant="body1" sx={{ color: "red", textAlign: "center" }}>{registrationError}</Typography>}
        <Button
          disableElevation
          variant="contained"
          sx={{
            '&:hover': { backgroundColor: '#9ca3af' },
            gap: '8px',
            color: 'rgb(255, 255, 255)',
            textTransform: 'none',
            fontFamily: 'system-ui',
            backgroundColor: 'rgb(123, 104, 238)',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            fontSize: '14px',
          }}
          onClick={handleSubmit} type="submit">
                      {loading ? "Signingup..." : "Signup"}    
        </Button>
  
            </Card>   
            </div>
        </>
 
  
  );
}
export default SignUp;
