import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea';
import './Study.css';

export default function Study () {

    return (
    <div className="StudyPage">
        <div className='content'>
        <h1>Hey buddy start study</h1>
        <Grid container spacing={4} sx={{ padding: 2, marginTop: 10 }}>
 <Grid>
 <Card sx={{ maxWidth: 500 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          className='card-Image'
         height="300px"
         image="https://t3.ftcdn.net/jpg/03/74/84/90/360_F_374849081_sou5wJtrl5bcYbmo5YMS10bWPcYc5Kln.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          School
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
  Gear up for success! Time to ace your school/college studies. 📚
</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Grid>
 <Grid>
 <Card sx={{ maxWidth: 500 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
           className='card-Image'
         height="300px"
         image="https://www.cmrit.ac.in/wp-content/uploads/2022/07/how-to-get-into-a-good-engineering-college-in-india.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          College
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Hey, welcome! Let’s start studying and aim for great marks in your College exams!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Grid>
 </Grid>
        </div>
    </div>
)  
}