import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea';

export default function Finance () {
    return(
        <div>
            <h1><b>Master Your Money, Build Your Freedom.</b></h1>
             <div>
                <h2><b>Part-time jobs</b></h2>
                <p>If you have a urge to grow , then you should be a shameless person for a years 
                    because everyone didn't come from a will stable family okay .So, for become a financially independent 
                    in your young age, you should have to do some work or part time jobs
                </p>
                <Grid container spacing={4} sx={{ padding: 2, marginTop: 10 }}>
 <Grid>
 <Card sx={{ maxWidth: 325 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
         height="250px"
         image="https://images.unsplash.com/photo-1721046013656-0a0980264689?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlJTIwZm9yJTIwc3R1ZHl8ZW58MHx8MHx8fDA%3D"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Delivery Jobs
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Their is lot of companies which provide the delivey and they also provide the delivery jobs for part time basis like Zomato, Swiggy and the other delivery app are offer the delivery jobs. 
          You can do this jobs for the intial earning not for the permanent .
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Grid>
 <Grid>
 <Card sx={{ maxWidth: 325 }}className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
         height="250px"
         image="https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Freelencing 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         You can also do freelencing work for earning by the , but for this you have to learn any skill to standout in the freelencing portals 
        for example like video-editing , photography , Drawing portrates e.t.c are the common skill and people pay well amount for this .....
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
 </Grid>
 <Grid>
 <Card sx={{ maxWidth: 325 }}className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
         height="250px"
         image="https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="green iguana"
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

 
 
      </Grid>
             </div>
        </div>
    )
}