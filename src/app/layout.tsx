import { FC, PropsWithChildren } from "react";
import "./globals.css";

import AppBar from "@/components/AppBar";
import FooterLayout from "@/components/footer";
import { Grid } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="box-layout" >
          <AppBar />
          {children}

             
          <FooterLayout />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
