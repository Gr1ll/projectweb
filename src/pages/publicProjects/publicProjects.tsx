import "./publicProjects.css";
import Menu from "../../menu/Menu";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Paper, styled, Typography} from "@mui/material";
import {project} from "../../types/project";
import defaultImage from "../../assets/default-image.png";
import React, {useEffect, useState} from "react";
import axios from "axios";

function cardClicked(url: string){
    if(url){
        window.open(url, "_blank")
    }
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#000',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function PublicProjects() {
    const [publicProjectData, setPublicProjectData] = useState<project[]>([

    ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://api.cyrilk.dev/projects/')
            .then(response => {
                setPublicProjectData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading data</div>;
    }

  return (
      <div >
        <Menu />
          <div className="container">
              <div className="items">
                  <Grid className="grid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  {publicProjectData.map((project, index) => (
                      <Grid key={index}>
                          <Item className="card">
                              <Card sx={{ width: 345 }} onClick={() => cardClicked(project.url)}>
                                  <CardActionArea>
                                      <CardMedia
                                          component="img"
                                          height="140"
                                          image={project.image ?? defaultImage}
                                          alt="image"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                              {project.title}
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
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