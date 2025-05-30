import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';  // <-- Import useNavigate
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();  // <-- Hook to navigate programmatically

  // Function to handle card click and navigate to path
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className='Main' style={{ backgroundColor: '#f4f4f9' }}>
      <Grid container spacing={4} sx={{ padding: 2, marginTop: 10 }}>

        <Grid item>
          <Card sx={{ maxWidth: 300 }} className='card'>
            <CardActionArea onClick={() => handleCardClick('/study')}>
              <CardMedia
                component="img"
                height="250px"
                image="https://images.unsplash.com/photo-1721046013656-0a0980264689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlJTIwZm9yJTIwc3R1ZHl8ZW58MHx8MHx8fDA%3D"
                alt="study"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Study
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Hey, welcome! Let’s start studying and aim for great marks in your exams!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 300 }} className='card'>
            <CardActionArea onClick={() => handleCardClick('/finance')}>
              <CardMedia
                component="img"
                height="250px"
                image="https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="finance"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Finance
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Everything will be okay if you're financially independent — it gives you freedom and peace of mind.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 300 }} className='card'>
            <CardActionArea onClick={() => handleCardClick('/health')}>
              <CardMedia
                component="img"
                height="250px"
                image="https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="health"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Health
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Hey buddy, most legends say that if you're physically fit, you'll also perform better mentally.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 300 }} className='card'>
            <CardActionArea onClick={() => handleCardClick('/co-curricular')}>
              <CardMedia
                component="img"
                height="250px"
                image="https://mentoriablog.azurewebsites.net/wp-content/uploads/2022/08/f3-1.jpg"
                alt="co-curricular"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Co-curricular
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Now everything is looking good — let’s make sure your other skills are sharp too!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 300 }} className='card'>
            <CardActionArea onClick={() => handleCardClick('/todo')}>
              <CardMedia
                component="img"
                height="250px"
                image="https://images.unsplash.com/photo-1598791318878-10e76d178023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9kbyUyMGxpc3R8ZW58MHx8MHx8fDA%3D"
                alt="todo"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  To-do list
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Stay focused. One task at a time, one step closer to your goals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}
