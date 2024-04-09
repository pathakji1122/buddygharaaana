import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid, IconButton } from '@mui/material';
import { Divider } from '@mui/material';
import amazon from "../images/amazon.png";
import flipkart from "../images/flipkar.jpg";
import JoyDip from "../images/2022-09-16.jpg";
import John from "../images/jhon.jpg";
import samratBazaar from "../images/samratbazaar.jpg";
import CompleteRequest from "../components/CompleteRequest";

const BuddyRequests = () => {
  const [completeOrderId,setCompleteOrderId]=useState(null);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetchOrders();
  }, []);
  const storeImages = {
    'amazon': amazon,
    'flipkart': flipkart,
    'JoyDip': JoyDip,
    'John': John,
    'Samrat': samratBazaar
  };

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
      setOrders(response.data.orderNITList)
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
  const handleCompleteOrder=(orderId)=>{
    setCompleteOrderId(orderId);
  }

  return (


    <div>
        
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
     
{orders.map(order => (
 
<Card key={order.orderNIT.orderId} sx={{ maxWidth: 500, margin: 2, borderRadius: 4, boxShadow: 3 }}>
  <CardContent  style={{padding:"5px"}} >
  <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold' }}>
       {order.orderNIT.orderPoint}
    </Typography>
  <div style={{ display: 'flex', alignItems: 'center',marginRight:"5px" }}>
    
  <img src={storeImages[order.orderNIT.storeName]} alt={order.orderNIT.storeName} style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '1px' }} />
  <Typography variant="body10" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
    <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}></span> {order.orderNIT.orderId}
    <Typography variant="body10" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
    <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}></span> {order.student.enrollmentNo}
  </Typography>
  </Typography>
  
</div>

    <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
  <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Type:</span> {order.orderNIT.type} 
  <span style={{ fontSize: '0.8rem', marginLeft: '20px', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Store:</span> {order.orderNIT.storeName}
</Typography>
    <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
      <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Order Details:</span> {order.orderNIT.orderDetails}
    </Typography>
    <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
      <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Order Time:</span> {order.orderNIT.orderTime}
    </Typography>
    <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
      <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Requested by:</span> {order.student.name},{order.student.phoneNo}
    </Typography>
  </CardContent>
  <CardActions>
    <Button
      onClick={() => handleCompleteOrder(order.orderNIT.orderId)}
      variant="contained"
      sx={{
        borderRadius: '5px',
        backgroundColor: '#76FF7A',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
    Complete Request
    </Button>
  </CardActions>
</Card>
))}
       
       {completeOrderId && <CompleteRequest orderId={completeOrderId} />} 
    </div>
  )

};

export default BuddyRequests;
