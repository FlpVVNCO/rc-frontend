import { CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import ThemeRegistry from "../utils/ThemeRegistry";
import { AuthProvider } from "../context/AuthContext";
import Providers from "./Providers";
import { BookProvider } from "../context/BookContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ReadConnect</title>
      </head>

      <body>
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <CssBaseline />
          <Providers>
            <BookProvider>
              <AuthProvider>
                <Navbar />
                <Toolbar />
                {children}
              </AuthProvider>
            </BookProvider>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
