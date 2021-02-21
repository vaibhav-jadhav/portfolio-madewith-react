import React from "react";
import { Grid } from "@material-ui/core";
function App() {
  return (
    <>
      <Grid container 
      direction = "column"
      justify="center"
      alignItems="center"
      style={{height:"100vh"}}
      >
          <Grid item>
              <h3>I am rebuilding everything with React.....</h3>
          </Grid>
      </Grid>
    </>
  );
}

export default App;
