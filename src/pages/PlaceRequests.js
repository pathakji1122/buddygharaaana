import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from 'react-router-dom';

import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const PlaceRequests = (props) => {
  const authToken = Cookies.get('authToken');
  const location = useLocation();
  const data = location.state;
  const currentDate = new Date();

const hours = currentDate.getHours().toString().padStart(2, '0'); // Get hours and pad with leading zero if needed
const minutes = currentDate.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if needed
const day = currentDate.getDate().toString().padStart(2, '0'); // Get day and pad with leading zero if needed
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Get month (+1 because January is 0) and pad with leading zero if needed
const year = currentDate.getFullYear(); // Get full year

const formattedDateTime = `${hours}:${minutes} ${day}-${month}-${year}`;
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    orderPoint:data.orderPoint,
    type:data.type,
    storeName:data.storeName,
    orderDetails:"",
    orderTime:formattedDateTime,
  });

  const handleOrderDataChange = (event) => {
    const { name, value } = event.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Navigate to the home page
  };


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true during form submission

    try {
      // API call to post the order data
      const response = await axios.post(
        'http://localhost:8081/engineering/placeorder',
        orderData,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json', // Adjust content type as needed
          },
        }
      );

      if (response.data.action === true) {
        window.alert("Order Successful");
        handleClose(); // Close the dialog on successful submission
      } else {
        window.alert("Order failed. Try again.");
      }
    } catch (error) {
      console.error('Error sending data:', error);
      window.alert("Network or server error. Try again.");
    } finally {
      setLoading(false); // Set loading state back to false after form submission
    }
  };

  return (
    <>

      <div style={{ pointerEvents: 'auto' }}>
        
        <Dialog open={open} PaperProps={{ component: 'form', onSubmit: handleSubmit }}>
        <DialogTitle>
          Place Order
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
          <DialogContentText>
            Please enter the request.
          </DialogContentText>
          <TextField
  id="order-details"
  label="Order Details"
  variant="outlined"
  name="orderDetails" // Make sure this matches the property name in the state
  value={orderData.orderDetails}
  onChange={handleOrderDataChange}
/>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Place Order</Button>
        </DialogActions>
      </Dialog>
          
      </div>
    </>
  );
};

export default PlaceRequests;
