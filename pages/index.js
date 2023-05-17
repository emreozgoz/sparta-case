import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "../scenes/global/topbar";
import TopComponent from "../scenes/global/topComponent";
import DataTable from "../scenes/global/tableComponent";
export default function Home() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <TopComponent />
            <DataTable />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
