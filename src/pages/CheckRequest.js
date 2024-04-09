import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Cookies from "js-cookie";
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import AcceptRequest from "../components/AcceptRequest";
import amazon from "../images/amazon.png";
import flipkart from "../images/flipkar.jpg";
import JoyDip from "../images/2022-09-16.jpg";
import John from "../images/jhon.jpg";
import samratBazaar from"../images/samratbazaar.jpg";

const CheckRequest = () => {

  const authToken = Cookies.get('authToken');
  const [orders, setOrders] = useState([]);
  const[student,setStudent]=useState(null);
  const [lastRefreshTime, setLastRefreshTime] = useState(new Date());
  
  const storeImages = {
    'amazon': amazon,
    'flipkart': flipkart,
    'JoyDip': JoyDip,
    'John': John,
    'Samrat': samratBazaar
  };
  const [acceptingOrderId, setAcceptingOrderId] = useState(null);
  const handleAcceptOrder = (orderId) => {
    setAcceptingOrderId(orderId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://gharaanah.onrender.com/engineering/requests',
          {
            headers: {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setOrders(response.data.nitCheckOrder);
        setLastRefreshTime(new Date());
    
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchData();
  }, [authToken]);
  const handleRefresh = async () => {

    try {
      const response = await axios.get(
        'https://gharaanah.onrender.com/engineering/requests',
        {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setOrders(response.data.nitCheckOrder);
      setStudent(response.data.student);
      setLastRefreshTime(new Date());
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  
  return (
    <div>
        <Typography>Last updated: {lastRefreshTime.toLocaleTimeString()}</Typography>
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
      onClick={() => handleAcceptOrder(order.orderNIT.orderId)} 
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
      Accept
    </Button>
  </CardActions>
</Card>
))}
       {acceptingOrderId && <AcceptRequest orderId={acceptingOrderId} />}
          
    </div>
  );
};
export default CheckRequest;
