import React from "react";  
import { Card, CardActionArea, Typography, IconButton } from '@mui/material';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import joydip from "../images/2022-09-16.jpg";
import john from "../images/jhon.jpg";
import samrat from"../images/samratbazaar.jpg";
import amazon from "../images/amazon.png";
import flipkart from "../images/flipkar.jpg";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

const EntryGate = () => {
    const amazonParcel = { orderPoint: "Gate 2",type:"Parcel",storeName:"amazon" };
    const flipkartParcel = { orderPoint: "Gate 2",type:"Parcel",storeName:"flipkart" };
    const JoyDip = { orderPoint: "Gate 2",type:"food",storeName:"Joydip" };
    const JohnRestaurant = { orderPoint: "Gate 2",type:"food",storeName:"John" };
    const SamratShop = { orderPoint: "Gate 2",type:"shop",storeName:"Samrat" };
    const navigate = useNavigate();
    const handleClick = (order) => {
        navigate('/placerequest', { state: { orderPoint: order.orderPoint,type:order.type,storeName:order.storeName } });
    }
   


    return (
        <>
           
           <div style={{ marginTop: "100px" }}>
                <Typography variant="h5" align="center" fontWeight="bold" sx={{ marginTop: "20px", color: "#333", margin: "20px" }}>
                    Our Services
                </Typography>
            </div>
            <Box sx={{ width: '100%', backgroundColor: '#baf1f0', marginTop: "25px", marginBottom: "88px" }}>
                <Grid container spacing={2} direction="row">
                    <Grid item xs={6} sm={6} md={3}>
                    <Card style={{ height: "fit-content", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
    <CardActionArea style={{ flexGrow: 1 }}>
        <img
            src={amazon}
            alt="Amazon Parcel"
            style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px", borderRadius: "10px 10px 0 0" }}
        />
        <Typography variant="h6" component="div" style={{ fontSize: "1rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "1.2", padding: "0 10px" }}>
            Amazon Parcel
        </Typography>
    </CardActionArea>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "10px" }}>
        <Button
            disableElevation
            variant="contained"
            onClick={() => handleClick(amazonParcel)}
            style={{
                textTransform: 'none',
                width: '100%',
                backgroundColor: '#ff9900',
                color: '#fff',
                borderRadius: '10px'
            }}
        >
            Order Now
        </Button>
    </div>
</Card>

                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <Card style={{ height: "fit-content", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
    <CardActionArea style={{ flexGrow: 1 }}>
        <img
            src={flipkart}
            alt="Amazon Parcel"
            style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px", borderRadius: "10px 10px 0 0" }}
        />
        <Typography variant="h6" component="div" style={{ fontSize: "1rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "1.2", padding: "0 10px" }}>
            Flipkart Parcel
        </Typography>
    </CardActionArea>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "10px" }}>
        <Button
            disableElevation
            variant="contained"
            onClick={() => handleClick(flipkartParcel)}
            style={{
                textTransform: 'none',
                width: '100%',
                backgroundColor: '#ff9900',
                color: '#fff',
                borderRadius: '10px'
            }}
        >
            Order Now
        </Button>
    </div>
</Card>

                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <Card style={{ height: "fit-content", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
    <CardActionArea style={{ flexGrow: 1 }}>
        <img
            src={samrat}
            alt="Amazon Parcel"
            style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px", borderRadius: "10px 10px 0 0" }}
        />
        <Typography variant="h6" component="div" style={{ fontSize: "1rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "1.2", padding: "0 10px" }}>
          Samrat Store
        </Typography>
    </CardActionArea>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "10px" }}>
        <Button
            disableElevation
            variant="contained"
            onClick={() => handleClick(samrat)}
            style={{
                textTransform: 'none',
                width: '100%',
                backgroundColor: '#ff9900',
                color: '#fff',
                borderRadius: '10px'
            }}
        >
            Order Now
        </Button>
    </div>
</Card>

                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <Card style={{ height: "fit-content", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
    <CardActionArea style={{ flexGrow: 1 }}>
        <img
            src={joydip}
            alt="Amazon Parcel"
            style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "70px", borderRadius: "10px 10px 0 0" }}
        />
        <Typography variant="h6" component="div" style={{ fontSize: "1rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "1.2", padding: "0 10px" }}>
            Joydip
        </Typography>
    </CardActionArea>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "10px" }}>
        <Button
            disableElevation
            variant="contained"
            onClick={() => handleClick(joydip)}
            style={{
                textTransform: 'none',
                width: '100%',
                backgroundColor: '#ff9900',
                color: '#fff',
                borderRadius: '10px'
            }}
        >
            Order Now
        </Button>
    </div>
</Card>

                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <Card style={{ height: "fit-content", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
    <CardActionArea style={{ flexGrow: 1 }}>
        <img
            src={john}
            alt="Amazon Parcel"
            style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px", borderRadius: "10px 10px 0 0" }}
        />
        <Typography variant="h6" component="div" style={{ fontSize: "1rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "1.2", padding: "0 10px" }}>
           John
        </Typography>
    </CardActionArea>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "10px" }}>
        <Button
            disableElevation
            variant="contained"
            onClick={() => handleClick(john)}
            style={{
                textTransform: 'none',
                width: '100%',
                backgroundColor: '#ff9900',
                color: '#fff',
                borderRadius: '10px'
            }}
        >
            Order Now
        </Button>
    </div>
</Card>

                    </Grid>
                    
                  
                </Grid>
            </Box>
        </>
    )
}

export default EntryGate;
