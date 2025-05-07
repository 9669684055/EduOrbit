import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

export default function Login () {
    return <div className="Login">
    <Card sx={{ maxWidth: 400 , maxHeight: 400 , padding: 4, margin: 'auto', mt: 8 }}>
        
 <h1><i>Hey Buddy Enter your details.</i></h1>
 <br></br><br></br>
 <label htmlFor="Username">Username:</label>
 <input id="Username" name="Username" placeholder="Enter the username" type="Text"></input>
 <br></br><br></br>
 <label htmlFor="password">Password:</label>
 <input id="password" name="password" placeholder="Enter your password" type="password"></input>
 <br></br><br></br>
 <Button variant="contained">Login</Button>
        <br></br><br></br>
        </Card>
    </div>
}