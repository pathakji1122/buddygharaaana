import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const AcceptRequest = ({ orderId }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState();
  const [requestAccepted, setRequestAccepted] = useState(false);
  const handleClose = () => {
    navigate('/');
    setOpen(false);
    window.location.reload();
  };
  useEffect(() => {
    setOpen(true);
  }, []);


  const handleAccept = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post(
        'https://gharaanah.onrender.com/engineering/acceptrequest',
        { orderId }, // Send orderId in the request body
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
     if(response.data.action==true){
        setRequestAccepted(true);
     }
     console.log("Order accepted successfully", response.data);
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
        </DialogTitle>
        <DialogContent>
  {requestAccepted ? (
    <Typography>Request accepted</Typography>
  ) : (
    <Typography
      variant="body2"
      sx={{
        textAlign: 'left',
        fontWeight: '600',
        fontSize: '18px',
      }}
    >
      Please confirm if you want to accept this request
    </Typography>
  )}
</DialogContent>
<DialogActions>
  {!requestAccepted && (
    <>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleAccept} color="primary" variant="contained">Accept</Button>
    </>
  )}
</DialogActions>

      </Dialog>
    </div>
  );
};

export default AcceptRequest;
