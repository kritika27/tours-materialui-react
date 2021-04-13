import React from "react";
import Tour from "./Tour";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

export default function Tours({ tours, handleDelete }) {
  return (
    <Container >
    <Grid container spacing={3} 
  align="center"
>
      {tours.map((item) => (
          
            <Grid key={item.id} xs={12} md={6} lg={4}  >
            <Tour  {...item} handleDelete={handleDelete} />
            </Grid>
          
        )
      )}
    </Grid>
    </Container>
  );
}


