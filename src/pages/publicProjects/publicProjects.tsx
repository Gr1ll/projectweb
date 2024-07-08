import "./publicProjects.css";
import Menu from "../../menu/Menu";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { project } from "../../types/project";
import defaultImage from "../../assets/default-image.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

function cardClicked(url: string) {
  if (url) {
    window.open(url, "_blank");
  }
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
}));

function PublicProjects() {
  const [publicProjectData, setPublicProjectData] = useState<project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "projects/")
      .then((response) => {
        setPublicProjectData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <div>
        <div className="errorNotification-container">
          <div className="errorNotification">Error loading data</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <p className="projectsTitle">Projects:</p>
        <div className="items">
          <Grid
            className="grid"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {publicProjectData.map((project, index) => (
              <Grid key={index}>
                <Item className="card">
                  <Card
                    sx={{ width: 345, height: 250 }}
                    onClick={() => cardClicked(project.url)}
                    className="card-inside"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={project.image ?? defaultImage}
                        alt="image"
                        className="cardImage"
                      />
                      <CardContent className="cardContent">
                        <Typography gutterBottom variant="h5" component="div">
                          {project.title}
                        </Typography>
                        <Typography variant="body2">
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Item>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default PublicProjects;
