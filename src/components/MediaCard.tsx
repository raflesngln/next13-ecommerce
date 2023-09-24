import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props: any) {
  return (
    <Card sx={{ width: "95%", height: props.height?props.height:350 }}>
      <CardMedia
        sx={{ height: props.imgH?props.imgH:150 ,width:props.imgW?props.imgW:200}}
        image={props.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h6">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h6" component="div">
          {"Rp 125.000"}
        </Typography>
      </CardActions>
    </Card>
  );
}
