import React from "react";
import { Typography, Paper, TextField, Autocomplete, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import home from "../images/Firefly an illustration of a welcoming doorway with icons representing different home services float.jpg";

const Intro = () => {
  const expertise = [{ label: 'Electrician' }];
  const theme = useTheme(); // Using theme to access breakpoints

  return (
    <>
       <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh", // Set minimum height to cover the viewport
      marginTop: 10,
      flexDirection: theme.breakpoints.down('sm') ? 'column' : 'row', // Flex direction based on screen size
    }}>
      <Paper elevation={10} style={{
        borderRadius: "20px",
       
      }}>
        <img src={home} alt="Background" style={{
          width: "100%",
          maxWidth:"1000px",
          height: "100%",
          objectFit: "cover", // Maintain aspect ratio and cover entire area
          borderRadius: "20px",
         
        }} />
      </Paper>
      <div style={{ flex: 1, textAlign: "center",marginTop:20 }}>
        <Typography variant="h4" style={{
          color: "gold",
          fontFamily: "Arial",
          fontSize: "clamp(2rem, 5vw, 3.5rem)", // Responsive font size
          margin: "0 5%",
        }}>
        Buddy  Gharaana
        </Typography>
        <Typography variant="h6" style={{
          marginBottom: "20px",
          fontSize: "clamp(1.5rem, 3vw, 2rem)", // Responsive font size
          fontFamily: "Arial",
        }}>
         Why rely on others when Gharaana is at your service? Secure your items from your Buddy today!
        </Typography>
      
      </div>
    </div>
    </>
  );
}

export default Intro;
