import { Box, CssBaseline } from "@mui/material";
import Header1 from "./component/header/Header1";
import { Header2 } from "./component/header/Header2";
import { Header3 } from "./component/header/Header3";
import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./component/hero/Hero";
import IconsSection from "./component/hero/IconsSection";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";
import SctollToTop from "./component/scroll/SctollToTop";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />
          <Box
            // @ts-ignore
            sx={{ bgcolor: theme.palette.bg.main }}
          >
            <Hero />
            <IconsSection />
            <Main />
          </Box>
          <Footer />
          <SctollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>

      
    </>
  );
}

export default App;
