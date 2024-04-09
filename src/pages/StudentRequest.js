import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Otp from "../components/Otp";
import { Button, CardActions, Grid, IconButton } from '@mui/material';
import { Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import amazon from "../images/amazon.png";
import flipkart from "../images/flipkar.jpg";
import JoyDip from "../images/2022-09-16.jpg";
import John from "../images/jhon.jpg";
import samratBazaar from "../images/samratbazaar.jpg";
const StudentRequest = () => {
  const [orderStatusId,SetOrderStatusId]=useState(null);
  const[getOtpOrderId,setGetOtpOrderId]=useState(null);
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
        "https://gharaanah.onrender.com/engineering/studentrequest",
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
  const handleCompleteOtp = (orderId) => {
    setGetOtpOrderId(orderId);
  };

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
  
 <Card key={order.orderId} sx={{ maxWidth: 500, margin: 2, borderRadius: 4, boxShadow: 3 }}>
   <CardContent  style={{padding:"5px"}} >
   <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold' }}>
        {order.orderPoint}
     </Typography>
   <div style={{ display: 'flex', alignItems: 'center',marginRight:"5px" }}>
     
   <img src={storeImages[order.storeName]} alt={order.storeName} style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '1px' }} />
   <Typography variant="body10" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
     <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}></span> {order.orderId}
     
   </Typography>
   
 </div>
 
     <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
   <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Type:</span> {order.type} 
   <span style={{ fontSize: '0.8rem', marginLeft: '20px', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Store:</span> {order.storeName}
 </Typography>
     <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
       <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Order Details:</span> {order.orderDetails}
     </Typography>
     <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
       <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Order Time:</span> {order.orderTime}
     </Typography>
     <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
  <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Order Status:</span>
  {order.orderStatus === 'NOT_ACCEPTED' ? 'Placed' : order.orderStatus === 'COMPLETED' ? 'Completed' : 'Accepted'}
</Typography>

{order.orderStatus === 'NOT_ACCEPTED' && (
  <Typography variant="body1" color="text.primary" sx={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
    <span style={{ fontSize: '0.8rem', marginRight: '5px', color: '#333', fontWeight: 'bold' }}>Your Buddy:</span> {order.buddy.name}, {order.buddy.phoneNo}
  </Typography>
)}
   </CardContent>
   <CardActions>
     <Button
       onClick={() => handleCompleteOtp(order.orderId)}
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
     Get Otp
     </Button>
   </CardActions>
 </Card>
 ))}
        
        {getOtpOrderId && <Otp orderId={getOtpOrderId} />} 
     </div>
   
  );
};

export default StudentRequest;
