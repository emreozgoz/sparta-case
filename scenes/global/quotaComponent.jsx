import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { quotaService } from "../../services/quotaService";
import moment from "moment";
export default function BasicCard() {
  const [quota, setQuota] = useState("");
  const [time, setTime] = useState("");

  const getMoment = async () => {
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");
    setTime(time);
  };
  const handleQuota = async () => {
    const quota = await quotaService.getQuota();
    setQuota(quota);
  };
  useEffect(() => {
    handleQuota();
  }, []);
  useEffect(() => {
    getMoment();
  }, [time]);
  return (
    <>
      <h1>{time}</h1>
      <Card sx={{ minWidth: 345, maxWidth: 345 }}>
        <CardContent sx={{ height: 100, weight: 345 }}>
          <Typography variant="body2" component="div">
            {quota}
          </Typography>
        </CardContent>
        <CardActions>
          <Box mt={2} display="flex" justifyContent="center" width="100%">
            <Button
              onClick={handleQuota}
              color="success"
              variant="contained"
              size="small"
            >
              Change Quota
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
