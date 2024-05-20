import "./publicProjects.css";
import Menu from "../../menu/Menu";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Paper, styled, Typography} from "@mui/material";
import {project} from "../../types/project";
import defaultImage from "../../assets/default-image.png";
export default publicProjects;

const testArr: project[] = [
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
        url: "http://github.com"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        url: "http://github.com"

    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        url: "http://github.com"
    },
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
        url: "http://github.com"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s",
        url: "http://github.com"
    },
    {
        title: "test3",
        description: "test3",
        url: "http://github.com"
    }
];

function cardClicked(url: string){
  console.log(url)
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:'#000',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function publicProjects() {
  return (
      <div >
        <Menu />
          <div className="container">
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {Array.from(testArr).map((project, index) => (
                      <Grid xs={2} sm={4} md={4} key={index}>
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
  );
}
