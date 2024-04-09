import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Grid, Card, CardContent, Typography } from "@mui/material";





const StudentProfile = () => {

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
    <div style={{ marginTop: 10 }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                My Profile
              </Typography>
              {profile && (
                <>
                  <Typography variant="subtitle1">
                    Name: {profile.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    Branch: {profile.branch}
                  </Typography>
                  <Typography variant="subtitle1">
                    Phone Number: {profile.phoneNo}
                  </Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    
                    <Typography variant="subtitle1">
                     Hostel: {profile.hostel}
                    </Typography>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentProfile;
