import "./publicProjects.css";
import Menu from "../../menu/Menu";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Paper, styled, Typography} from "@mui/material";
import {project} from "../../types/project";
export default publicProjects;

const testArr: project[] = [
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s"
    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s"
    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s"
    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s"
    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s"
    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s"
    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
    },
    {
        title: "test",
        description: "test",
        image: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
    },
    {
        title: "test2",
        description: "test2",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ1VuKA1bfF-J9EICmf9n4YvfTkXkhQb4Zln2kVXHZnw&s"
    },
    {
        title: "test3",
        description: "test3",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
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
                  {Array.from(testArr).map((_, index) => (
                      <Grid xs={2} sm={4} md={4} key={index}>
                          <Item className="card">
                              <Card sx={{ maxWidth: 345 }} onClick={() => cardClicked('https://github.com')}>
                                  <CardActionArea>
                                      <CardMedia
                                          component="img"
                                          height="140"
                                          image="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg"
                                          alt="green iguana"
                                      />
                                      <CardContent>
                                          <Typography gutterBottom variant="h5" component="div">
                                              Lizard
                                          </Typography>
                                          <Typography variant="body2" color="text.secondary">
                                              Lizards are a widespread group of squamate reptiles, with over 6,000
                                              species, ranging across all continents except Antarctica
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
