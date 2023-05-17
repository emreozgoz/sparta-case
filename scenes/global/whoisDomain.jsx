import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { whoIsDomainService } from "../../services/whoIsDomain";

export default function WhoIsDomain() {
  const [url, setUrl] = useState("");
  const [checked, setChecked] = useState(false);

  const [domainData, setDomainData] = useState({
    registrarName: "",
    registrant: {
      country: "",
      organization: "",
      state: "",
      country: "",
    },
    createdDate: "",
    expiresDate: "",
  });
  const [control, setControl] = useState(false);
  const handleDomainData = async () => {
    try {
      const data = await whoIsDomainService.getDomainData(url);
      setDomainData(data);
      setControl(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

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
            sx={{ height: 345, weight: 600 }}
          >
            <TextField
              mt={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              label="DomainName"
              onChange={handleInputChange}
            />
            <Typography variant="body2" component="div">
              <>
                {domainData != undefined && (
                  <>
                    <h1 style={{ fontFamily: "sans-serif" }}>
                      Registrar Name:
                    </h1>
                    <h4 style={{ fontFamily: "sans-serif" }}>
                      {" "}
                      {domainData.registrarName}
                    </h4>
                    <h1 style={{ fontFamily: "sans-serif" }}>Contact Email:</h1>
                    <h4 style={{ fontFamily: "sans-serif" }}>
                      {" "}
                      {domainData.contactEmail}
                    </h4>
                    <h1 style={{ fontFamily: "sans-serif" }}>Domain Ext:</h1>
                    <h4 style={{ fontFamily: "sans-serif" }}>
                      {" "}
                      {domainData.domainNameExt}
                    </h4>
                  </>
                )}
              </>
            </Typography>
          </CardContent>
          <CardActions>
            <Box mt={2} display="flex" justifyContent="center" width="100%">
              <Button
                onClick={handleDomainData}
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
