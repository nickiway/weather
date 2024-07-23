import { ThemeProvider } from "@mui/material";
import StoreProvider from "@/lib/redux/Provider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import theme from "@/theme";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default Layout;
