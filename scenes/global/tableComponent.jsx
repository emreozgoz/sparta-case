import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { usomService } from "../../services/usomService";
import { Box, Button } from "@mui/material";
import BarChartNoPadding from "../global/domainGroupChart";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import IpAdres from "./ipAdres";
import DescGroupChart from "../global/descGroupChart";
import WhoIsDomain from "./whoisDomain";
const DataTable = () => {
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [groupedDomain, setGroupedDomain] = useState([]);
  const [allData, setAllData] = useState([]);
  const [groupedDesc, setGroupedDesc] = useState([]);
  const [checked, setChecked] = useState(false);

  const fetchZararliAdresler = async () => {
    const [test, test2, test3] = await usomService.getUsomUrlHundred();
    setGroupedDomain(test);
    setGroupedDesc(test2);
    setAllData(test3);
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "url", headerName: "URL", width: 150 },
    { field: "desc", headerName: "Description", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
  ];
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          checked={checked}
          onChange={handleCheckboxChange}
          label="Usom Zararli Adresler ve Dağılımlarını Görmek İçin Tıklayınız"
        />
      </Box>
      {checked && (
        <>
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <Button
              onClick={fetchZararliAdresler}
              color="success"
              variant="contained"
              size="small"
            >
              Get Table Data
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            p={2}
          >
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              p={2}
            >
              <div style={{ height: 400, width: "center" }}>
                <DataGrid
                  columns={columns}
                  rows={allData}
                  pageSize={rowsPerPage}
                  pageSizeOptions={[20]}
                  rowCount={100}
                  initialState={{
                    pagination: {
                      paginationModel: { pageSize: 20 },
                    },
                  }}
                />
              </div>
            </Box>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              p={2}
            >
              <BarChartNoPadding data={groupedDomain} />
            </Box>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              p={2}
            >
              <DescGroupChart data={groupedDesc} />
            </Box>
            <Box
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              p={2}
            >
              <IpAdres />
            </Box>
          </Box>
          <Box>
            <WhoIsDomain />
          </Box>
        </>
      )}
    </>
  );
};

export default DataTable;
