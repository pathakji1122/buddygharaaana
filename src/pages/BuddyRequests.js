import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid, IconButton } from '@mui/material';
import { Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const BuddyRequests = () => {
  const [orderStatusId,SetOrderStatusId]=useState(null);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetchOrders();
  }, []);


  const fetchOrders = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get(
        "https://gharaanah.onrender.com/engineering/buddy",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      console.log("Fetched orders:", response.data.orderNITList);
      setOrders(response.data.orderNITList);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  
  const handleRefresh = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get(
        "https://gharaanah.onrender.com/customer/myorder",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setOrders(response.data.orderNITList);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
     <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleRefresh}
        style={{ margin: '20px' }}
      >
        Refresh
      </Button>
    </div>
    {orders.length > 0 ? (
      orders.map((orderNIT) => (
        <Grid item key={orderNIT.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Order no {orderNIT.orderId}
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                Buddy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Store
              </Typography>
            </CardContent>   
          </Card>
        </Grid>
      ))
    ) : (
      <Typography variant="body1" color="text.secondary">
        No orders found.
      </Typography>
    )}
  </Grid>
    
  );
};

export default BuddyRequests;
