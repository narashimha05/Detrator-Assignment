"use client";
import "@fontsource/poppins";
import { Box} from "@mui/material"
import Hero from "@/components/Hero";
import { ThemeProvider, createTheme } from "@mui/material"
import Navbar from "@/components/Navbar";

export default function Home() {
   const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
    }
   });
  return (<>
        <ThemeProvider theme={theme}>
            <Navbar />
    <Box sx={{ height: '100vh' }}>
        <Hero />
    </Box>
        </ThemeProvider>
  </>);
}
