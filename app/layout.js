import { CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import ThemeRegistry from "../utils/ThemeRegistry";
import { AuthProvider } from "../context/AuthContext";
import { BookProvider } from "../context/BookContext";
import Providers from "./Providers";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ReadConnect</title>
      </head>

      <body>
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <CssBaseline />
          <BookProvider>
            <AuthProvider>
              <Providers>
                <Navbar />
                <Toolbar />
                {children}
                <Footer />
              </Providers>
            </AuthProvider>
          </BookProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
