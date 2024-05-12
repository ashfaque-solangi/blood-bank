import { Box, Chip, Grid, Paper, Typography } from "@mui/material";
import React from "react";

function BloodGroupCard(props) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={2}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"primary.main"}
          color="white"
          component={Paper}
          height="100%"
        >
          <Typography variant="h4">{props.bloodGroup}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={10}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          p={2}
          gap={2}
          component={Paper}
        >
          <Box display={"flex"}>
            <Typography>{props.description}</Typography>
          </Box>
          <Box display={"flex"} gap={1} flexWrap={"wrap"}>
            <Typography>Donors:</Typography>
            {props.donors.map((donor) => (
              <Chip label={donor} size="small" color="success" />
            ))}
          </Box>

          <Box display={"flex"} gap={1} flexWrap={"wrap"}>
            <Typography>Recievers:</Typography>
            {props.receivers.map((reciever) => (
              <Chip label={reciever} size="small" color="error" />
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BloodGroupCard;
