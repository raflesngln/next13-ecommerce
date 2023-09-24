import { FC, PropsWithChildren } from "react";

import { Grid ,Container} from "@mui/material";

const ProdukLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
   
        <main>
          <Container maxWidth="xl" sx={{pt:12}}>
            {children}
          </Container>
        </main>
     
  );
};

export default ProdukLayout;
