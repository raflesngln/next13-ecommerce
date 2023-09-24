import { FC, PropsWithChildren } from "react";

import AppBar from "@/components/AppBar";
import FooterLayout from "@/components/footer";
import { Grid ,Container} from "@mui/material";

const KategoriLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
        <main className="box-layout" >
          <Container maxWidth="xl" sx={{pt:12}}>
            {children}
          </Container>
        </main>
  );
};

export default KategoriLayout;
