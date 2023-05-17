import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { foxService } from "../../services/foxService";
import { ipService } from "../../services/ipService";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
export default function IpAdres() {
  const [imageUrl, setImageUrl] = useState("");
  const [ipAddres, setipAddres] = useState("");
  const [firsIpAdrdress, setfirsIpAdrdress] = useState("");
  const [lastIPAddress, setlastIPAddress] = useState("");
  const [inBetweenIPAddresses, setinBetweenIPAddresses] = useState([]);

  const handleFetchImage = async () => {
    const image = await foxService.getFoxImage();
    setImageUrl(image);
  };

  const handleIpAdress = async () => {
    const { firstIPAddress, lastIPAddress, inBetweenIPAddresses } =
      await ipService.getgenerateIPAddresses(ipAddres);
    setfirsIpAdrdress(firstIPAddress);
    setlastIPAddress(lastIPAddress);
    setinBetweenIPAddresses(inBetweenIPAddresses);
  };
  const handleInputChange = (e) => {
    setipAddres(e.target.value);
  };
  useEffect(() => {
    handleFetchImage();
  }, []);
  return (
    <Box display="flex" justifyContent={"center"} alignItems={"center"} p={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={2}
        flexDirection="column"
      >
        <Card>
          <CardContent
            display="flex"
            justifyContent="center"
            width="100%"
            sx={{ height: 345, weight: 345 }}
          >
            <TextField
              mt={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              label="Ip Adress"
              onChange={handleInputChange}
            />
            <Typography variant="body2" component="div">
              First Ip Adress = {firsIpAdrdress}
            </Typography>
            <Typography variant="body2" component="div">
              Last Ip Adress = {lastIPAddress}
            </Typography>
            <Typography variant="body2" component="div">
              In Between Ip Adress ={" "}
              {inBetweenIPAddresses.length > 0 &&
                inBetweenIPAddresses.map((item, index) => (
                  <h3>
                    <li key={index}>{item}</li>
                  </h3>
                ))}
            </Typography>
          </CardContent>
          <CardActions>
            <Box mt={2} display="flex" justifyContent="center" width="100%">
              <Button
                onClick={handleIpAdress}
                color="success"
                variant="contained"
                size="small"
              >
                Find
              </Button>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
