import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import wallet from "../images/wallet.png";

const Rewards = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const authToken = Cookies.get("authToken");
            const response = await axios.get(
                "https://gharaanah.onrender.com/engineering/profile",
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );
            setProfile(response.data.student);
        
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: 10 }}>
        <Card sx={{ width: 200, borderRadius: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',borderColor: 'gold', borderWidth: '2px', borderStyle: 'solid' }}>
            <CardContent style={{ textAlign: 'center', paddingTop: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={wallet} alt="Wallet" style={{ width: 50, marginBottom: 20 }} />
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#333' }}>
                        {profile && profile.coin}
                    </Typography>
                  
                </div>
            </CardContent>
        </Card>
    </div>
   
    )
}

export default Rewards;
