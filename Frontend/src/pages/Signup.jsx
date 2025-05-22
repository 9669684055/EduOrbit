import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import './SignUp.css'
import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';


export default function Signup () {
    let [signup , setSignup] = useState("");
    return (<div  className='SignUpForm'>
    <Card sx={{ maxWidth: 400 , maxHeight: 400 , padding: 4, margin: 'auto', mt: 8 }}>
        <h2>Let's take control of your day !</h2>
        <CardMedia 
        className="cardImage"
          component="img"
          image="https://sdmntprwestus.oaiusercontent.com/files/00000000-5df4-6230-886a-c607988ef20f/raw?se=2025-04-22T12%3A46%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=c86deb91-671d-56b7-80a2-2cda358ab070&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-22T11%3A39%3A26Z&ske=2025-04-23T11%3A39%3A26Z&sks=b&skv=2024-08-04&sig=Tnpar5CeyFvsF6plFu1lF0j69XoKA7M56j0tNIL065Y%3D"
          alt="green iguana"
        />
     <form>
        <label htmlFor="Username">Username :</label>
        <input id="username" name="username" placeholder='Create a unique Username' type='text'></input>
        <br></br>  <br></br> 

        <label htmlFor="email">Email :</label>
        <input placeholder='Enter your email ' type="Email" id="Email" name="Email"></input>
        <br></br>   <br></br>
        <label htmlFor="password">Password :</label>
        <input id="password" name="password" placeholder='Create password' type="password" ></input>
        <br></br>  <br></br>
        <label htmlFor="password"> Re-password :</label>
        <input  id="re-password" name="re-password" placeholder='Create password' type="re-password"></input>
        <br></br>  <br></br>
        <Button variant="contained">Sign Up</Button>
        <br></br><br></br>
        
     </form>
        </Card>
    </div>);


}