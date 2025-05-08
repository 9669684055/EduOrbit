import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea';
import './Dashboard.css';

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
         image="https://sdmntprwestus.oaiusercontent.com/files/00000000-7bec-6230-839d-9edb81d49fb6/raw?se=2025-05-07T08%3A06%3A02Z&sp=r&sv=2024-08-04&sr=b&scid=4765c3ef-cc01-5c2f-b3cd-719af1871796&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-07T02%3A17%3A21Z&ske=2025-05-08T02%3A17%3A21Z&sks=b&skv=2024-08-04&sig=hyMIZub3EpPi7Z42s5ViECE8FaOvRTkAUB%2BZU1n/LOo%3D"
          alt="Delivery jobs"
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
         image="data:image/jpeg;base64,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"
          alt="earn from freelence"
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
         image="https://sdmntprwestus.oaiusercontent.com/files/00000000-40d8-6230-92ca-0a0b820dffa7/raw?se=2025-05-07T08%3A19%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=537215d0-c41a-593e-a867-b4c53554b912&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-07T02%3A15%3A02Z&ske=2025-05-08T02%3A15%3A02Z&sks=b&skv=2024-08-04&sig=5svKui0pKBGOxahROJ3NS7hjPCGamkeY9CPzgtAIpmk%3D"
          alt="other eraning source "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Health
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This page is for students and young creators who want to earn while they learn.From vlogging to part-time jobs and creative side hustles, it highlights how anyone can start small and build income streams alongside their studies. If you're passionate and consistent, financial freedom isn't far
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