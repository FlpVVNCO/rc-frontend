import { CssBaseline, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar";
import ThemeRegistry from "../utils/ThemeRegistry";
import { AuthProvider } from "../context/AuthContext";
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

          <BookProvider>
            <AuthProvider>
              <Navbar />
              <Toolbar />
              {children}
            </AuthProvider>
          </BookProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
