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
         image="https://sdmntprwestus2.oaiusercontent.com/files/00000000-3d4c-61f8-b5f8-b58eff2edfd5/raw?se=2025-04-29T15%3A36%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=b29d3115-b5aa-5a94-812b-9b93b49ed1d0&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-29T03%3A10%3A57Z&ske=2025-04-30T03%3A10%3A57Z&sks=b&skv=2024-08-04&sig=/ltNrQwFfJ6w9qm29QLKfpdAVXm3PmQmvnEMgGiBCx4%3D"
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
         image="https://sdmntprwestus2.oaiusercontent.com/files/00000000-06e8-61f8-9330-103e41fe9237/raw?se=2025-04-29T15%3A36%3A40Z&sp=r&sv=2024-08-04&sr=b&scid=7d7c1883-86a3-5ef9-bec5-339f57d4aa8f&skoid=b53ae837-f585-4db7-b46f-2d0322fce5a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-29T03%3A09%3A27Z&ske=2025-04-30T03%3A09%3A27Z&sks=b&skv=2024-08-04&sig=yoUId9M0Q5WSewDWRQu4juYgIHJumgRBdJs1fcTJ2as%3D"
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