import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Input,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SignUpOtp = ({ nitStudent }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [otp, setOtp] = useState('');
  const [requestAccepted, setRequestAccepted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClose = () => {
    navigate('/');
    setOpen(false);
  };

  const [student, setStudent] = useState({
    name: nitStudent.name,
    year: nitStudent.year,
    phoneNo: nitStudent.phoneNo,
    password: nitStudent.password,
    branch: nitStudent.branch,
    hostel: nitStudent.branch,
    enrollmentNo: nitStudent.enrollmentNo,
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAccept = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post(
        'https://gharaanah.onrender.com/engineering/otpverify',
        student,
      );
      if (response.data.action === true) {
        setRequestAccepted(true);
        setResponseMessage(response.data.response);
        console.log*=(response.data.message)
      } else if(response.data.action === false) {
        setErrorMessage(response.data.response);
      setOtp('');
      }
      
    } catch (error) {
      console.error('Error accepting order:', error);
    }
  };

  return (
    <div style={{ pointerEvents: 'auto' }}>
    <Dialog open={open} PaperProps={{ sx: { minWidth: '300px', maxWidth: '80%', borderRadius: '20px' } }}>
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        Please Enter OTP
      </DialogTitle>
      <DialogContent>
        {requestAccepted ? (
         <Typography variant="body1" sx={{ color: 'green', marginBottom: '16px' }}>
         {responseMessage}
       </Typography>
       
        ) : (
          <div>
            <TextField
              sx={{
                '& .MuiInput-input': { padding: '10px' },
                width: '100%',
                marginBottom: '16px',
              }}
              type="text"
              placeholder="Enter OTP"
              label="OTP"
              value={student.otp}
              onChange={handleChange}
              name="otp"
              variant="outlined"
            />
            {errorMessage && (
              <Typography variant="body2" color="error" sx={{ marginTop: '8px', marginBottom: '16px' }}>
                {errorMessage}
              </Typography>
            )}
            <Typography variant="body2" sx={{ marginBottom: '16px' }}>
              Didn't receive the OTP? Contact us at <a href="mailto:gharaanabuddy@gmail.com">gharaanabuddy@gmail.com</a>
            </Typography>
          </div>
        )}
        
      </DialogContent>
      <DialogActions>
        {!requestAccepted && (
          <Button onClick={handleAccept} color="primary" variant="contained">
            Sign Up
          </Button>
        )}
      </DialogActions>
    </Dialog>
  </div>
  
  );
};

export default SignUpOtp;
