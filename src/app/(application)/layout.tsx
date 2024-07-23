import { ThemeProvider } from "@mui/material";
import StoreProvider from "@/app/lib/redux/Provider";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import theme from "@/app/theme";

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
