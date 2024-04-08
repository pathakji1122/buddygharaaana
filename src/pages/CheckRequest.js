import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Cookies from "js-cookie";
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import AcceptRequest from "../components/AcceptRequest";
// Ensure this path is correct

const CheckRequest = () => {
  const authToken = Cookies.get('authToken');
  const [orders, setOrders] = useState([]);
  const[student,setStudent]=useState(null);
  const [acceptingOrderId, setAcceptingOrderId] = useState(null);
  const handleAcceptOrder = (orderId) => {
    setAcceptingOrderId(orderId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8081/engineering/requests',
          {
            headers: {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setOrders(response.data.nitCheckOrder);
    
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
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
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
  <Card key={order.orderNIT.orderId} sx={{ maxWidth: 500, margin: 2, borderRadius: 4, boxShadow: 3 }}>
    <CardActionArea>
      <CardContent>
        <Typography variant="h5" component="div" style={{ fontFamily: 'Roboto', fontStyle: 'normal', marginBottom: '10px', color: '#333' }}>
          <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Request ID:</span> {order.orderNIT.orderId}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
          Type: {order.orderNIT.type}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Verdana', fontStyle: 'italic' }}>
          Store: {order.orderNIT.storeName}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Verdana', fontStyle: 'italic' }}>
          Order Details: {order.orderNIT.orderDetails}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Verdana', fontStyle: 'italic' }}>
          Order Time: {order.orderNIT.orderTime}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Verdana', fontStyle: 'italic' }}>
          Student Name: {order.student.name}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Verdana', fontStyle: 'italic' }}>
          Student Year: {order.student.year}
        </Typography>
        <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Verdana', fontStyle: 'italic' }}>
          Student Branch: {order.student.branch}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
       onClick={() => handleAcceptOrder(order.orderNIT.orderId)} 
        style={{
          display: 'block',
          margin: 'auto',
          border: '1px solid black',
          borderRadius: '5px',
          backgroundColor: '#76FF7A',
          color: 'white',
          padding: '8px 20px',
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
