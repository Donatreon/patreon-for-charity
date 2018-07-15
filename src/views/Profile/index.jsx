import React from "react";
import data from "../../fake-data.json";
// import Header from "../../components/Header/Header";
// import Card from "../../components/Card/Card";
// import  from "../../components/Card/CardHeader";
// import CardBody from "../../components/Card/CardBody";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const org = data.orgs[0];

const styles = {
  card: {
    maxWidth: "80%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

const Profile = props => {
  const { classes } = props;
  return (
    <div className="container">
      <Card className={classes.card}>
        <CardContent>
          <Typography paragraph>
            <CardMedia className={classes.media} image={org.logo_url} />
          </Typography>
          <Typography gutterBottom variant="headline" component="h2">
            {org.name}
          </Typography>
          <Typography variant="subheading" color="textSecondary">
            Category: {org.category}
          </Typography>
          <Typography variant="subheading" color="secondary" gutterBottom>
            Rating: {org.rating}
          </Typography>
          <Typography paragraph variant="body1">
            {org.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            <a href={org.url}>Website</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(Profile);
