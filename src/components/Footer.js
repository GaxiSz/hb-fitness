import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="5px" pt="5px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="5px" mt="5px">
          Made By GS
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
