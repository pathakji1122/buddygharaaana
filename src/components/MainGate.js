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
import{ Stack} from '@mui/material';

const MainGate = () => {
    const amazonParcel = { orderPoint: "Gate 2",type:"Parcel",storeName:"amazon" };
    const flipkartParcel = { orderPoint: "Gate 2",type:"Parcel",storeName:"flipkart" };
    const JoyDip = { orderPoint: "Gate 2",type:"food",storeName:"Joydip" };
    const JohnRestaurant = { orderPoint: "Gate 2",type:"food",storeName:"John" };
    const SamratShop = { orderPoint: "Gate 2",type:"shop",storeName:"Samrat" };
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login',);
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
                    
                  
                </Grid>
            </Box>
            <Stack
                    sx={{
                        alignItems: 'center',
                        width: '50%',
                        borderRadius: '16px',
                        maxWidth: '400px',
                        background: 'rgba(247, 246, 246, 0.51)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(5.4px)',
                        webkitBackdropFilter: 'blur(5.4px)',
                        border: '1px solid rgba(247, 246, 246, 0.79)',
                        margin:"10px"
                    }}
                    spacing="0px">
                    <img
                        src={john}
                        style={{
                            borderTopLeftRadius: '10px',
                            borderTopRightRadius: '10px',
                            objectFit: 'cover',
                            height: '80px', // Adjusted height here
                        }}
                        width="100%"
                    />
                    <Stack
                        sx={{
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '600px',
                            padding: '10px 15px 20px 15px', // Adjusted padding here
                            '@media(max-width:479px)': { padding: '5px' }, // Adjusted padding here
                        }}
                        spacing="15px">
                        <Typography
                            variant="p"
                            sx={{
                                fontSize: '10px', // Adjusted font size here
                                fontWeight: '500',
                                lineHeight: '30px', // Adjusted line height here
                                '@media(max-width:479px)': {
                                    fontSize: '16px', // Adjusted font size here
                                    fontWeight: '700',
                                },
                            }}>
                            JohnRestaurant
                        </Typography>
                        <Button
                            disableElevation
                            variant="contained"
                            sx={{
                                '&:hover': { backgroundColor: 'rgb(245,91,83)' },
                                gap: '8px',
                                color: 'white',
                                textTransform: 'none',
                                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                                fontWeight: '600',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '10px', // Adjusted padding here
                                fontSize: '16px', // Adjusted font size here
                                backgroundColor: 'rgb(245,91,83)',
                                '@media(max-width:479px)': { fontSize: '14px' },
                            }}>
                            Order now
                        </Button>
                       
                    </Stack>
                </Stack>
        </>
    )
}

export default MainGate;
