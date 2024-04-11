import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

const CancelRequest = ({ orderId}) => {
  const [open, setOpen] = useState(false);
  const [orderCancelled, setOrderCancelled] = useState(false); // New state to track if the order is cancelled
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const handleClose = () => {
    setOpen(false);
    navigate('/');
    
  };
  useEffect(() => {
    setOpen(true);
  }, []);
  
  const handleCancelOrder = async () => {
    try {
      const authToken = Cookies.get("authToken");
      await axios.post('https://gharaanah.onrender.com/engineering/cancel', { orderId }, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      // Update state to indicate successful cancellation
      setOrderCancelled(true);
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  useEffect(() => {
    
  }, []);

  return (
    <>
      <Dialog open={open}>
      <DialogTitle sx={{ fontSize: '15px' }}>
            Are you sure to cancel order
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
        {orderCancelled ? (
          <DialogContent>
            <Typography>Order cancelled successfully!</Typography>
          </DialogContent>
        ) : (
          <DialogActions>
            <Button onClick={handleCancelOrder} variant="contained" color="secondary">
              Cancel Order
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default CancelRequest;
