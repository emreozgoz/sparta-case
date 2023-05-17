import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { foxService } from "../../services/foxService";
import { ipService } from "../../services/ipService";
import QuotaComponent from "./quotaComponent";
import WeatherComponent from "./weatherComponent";

export default function TopComponent() {
  const [imageUrl, setImageUrl] = useState("");
  const [ipAddres, setipAddres] = useState("");

  const handleFetchImage = async () => {
    const image = await foxService.getFoxImage();
    setImageUrl(image);
  };

  const handleIpAdress = async () => {
    const image = await ipService.getgenerateIPAddresses(ipAddres);
    setipAddres(image);
  };
  const handleInputChange = (e) => {
    setipAddres(e.target.value);
  };
  useEffect(() => {
    handleFetchImage();
  }, []);
  return (
    <>
      <Box display="flex" justifyContent={"center"} alignItems={"center"} p={2}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
          flexDirection="column"
        >
          <Card sx={{ maxWidth: 414, minWidth: 414 }}>
            <CardMedia
              component="img"
              sx={{ height: 414, weight: 519, margin: "auto" }}
              src={imageUrl}
              title="fox"
            />
            <CardActions>
              <Box mt={2} display="flex" justifyContent="center" width="100%">
                <Button
                  onClick={handleFetchImage}
                  color="success"
                  variant="contained"
                  size="small"
                >
                  Change Fox Image
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
          flexDirection="column"
        >
          <QuotaComponent />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={2}
          flexDirection="column"
        >
          <WeatherComponent />
        </Box>
      </Box>
    </>
  );
}
