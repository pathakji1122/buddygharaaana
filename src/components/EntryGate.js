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
                        <Card style={{ height: "250px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
                            <CardActionArea>
                                <img
                                    src={amazon}
                                    alt="Amazon Parcel"
                                    style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px" }}
                                />
                                <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
                                    Amazon Parcel
                                </Typography>
                            </CardActionArea>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "auto" }}>
                            <Button
                    disableElevation
                    variant="contained"
                    onClick={() => handleClick(amazonParcel)}
                    sx={{
                        textTransform: 'none',
                        width: '100%',
                    }}
                >
                    Order
                </Button>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Card style={{ height: "250px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
                            <CardActionArea>
                                <img
                                    src={flipkart}
                                    alt="flipkart"
                                    style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px" }}
                                />
                                <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
                                    flipkart
                                </Typography>
                            </CardActionArea>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "auto" }}>
                            <Button
                    disableElevation
                    variant="contained"
                    onClick={() => handleClick(flipkartParcel)}
                    sx={{
                        textTransform: 'none',
                        width: '100%',
                    }}
                >
                    Order
                </Button>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Card style={{ height: "250px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
                            <CardActionArea>
                                <img
                                    src={samrat}
                                    alt="Samrat store"
                                    style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px" }}
                                />
                                <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
                                    Samrat store
                                </Typography>
                            </CardActionArea>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "auto" }}>
                            <Button
                    disableElevation
                    variant="contained"
                    onClick={() => handleClick(SamratShop)}
                    sx={{
                        textTransform: 'none',
                        width: '100%',
                    }}
                >
                    Order
                </Button>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Card style={{ height: "250px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
                            <CardActionArea>
                                <img
                                    src={joydip}
                                    alt="john"
                                    style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px" }}
                                />
                                <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
                                    Joydip
                                </Typography>
                            </CardActionArea>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "auto" }}>
                            <Button
                    disableElevation
                    variant="contained"
                    onClick={() => handleClick(JoyDip)}
                    sx={{
                        textTransform: 'none',
                        width: '100%',
                    }}
                >
                    Order
                </Button>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Card style={{ height: "250px", borderRadius: "10px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)", margin: "auto", marginTop: "20px", display: "flex", flexDirection: "column" }}>
                            <CardActionArea>
                                <img
                                    src={john}
                                    alt="john"
                                    style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto", display: "block", objectFit: "cover", width: "80%", maxHeight: "150px" }}
                                />
                                <Typography variant="h6" component="div" style={{ fontSize: "0.67rem", color: "#333", textAlign: "center", fontWeight: "bold", marginTop: "10px", lineHeight: "0.8" }}>
                                    John
                                </Typography>
                            </CardActionArea>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "auto" }}>
                            <Button
                    disableElevation
                    variant="contained"
                    onClick={() => handleClick(JohnRestaurant)}
                    sx={{
                        textTransform: 'none',
                        width: '100%',
                    }}
                >
                    Order
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
