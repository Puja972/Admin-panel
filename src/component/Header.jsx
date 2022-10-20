import React,{useState} from 'react';
import { AppBar,Tab,Tabs,Toolbar,TextField,Typography,Box,Button,Dialog,useMediaQuery,useTheme } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DrawerComp from './DrawerComp';


const PAGES = ["Admin","Trainer","DashBoard"];
const Header = () => {
  const [value,setvalue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const[inputs,setInputs]=useState({
    name:"",
    email:"",
    password:"",
  });
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  const[open,setOpen]=useState(false);

  return (
    <React.Fragment>
        <AppBar sx={{background:"#068695"}}>
            <Toolbar>
            <AdminPanelSettingsIcon />&nbsp;
            
            {
              isMatch?(
                <>
                <Typography>About us</Typography>
                <DrawerComp />
                </>
              ):(

                <>
                <Typography sx={{fontSize:'1.5rem',paddingLeft:'2%'}}>
                Admin Panel
            </Typography>
                <Tabs sx={{marginLeft:'auto'}} textColor='white' value={value} onChange={(e,value)=>{setvalue(value)}} indicatorColor="secondary">
                  {
                    PAGES.map((page,index)=>(
                      <Tab key={index} label={page}></Tab>
                    ))
                  }
            </Tabs>
            <Button onClick={()=>setOpen(true)} sx={{marginLeft:'auto'}} variant='contained'>Login{""}</Button>
            <div>
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <form >
            <Box display="flex" 
            flexDirection={"column"} 
            maxWidth={400} 
            alignItems="center"
            justifyContent={'center'} 
            margin="auto"
            marginTop={2} 
            padding={5} 
            borderRadius={5} 
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
              ":hover":{
                boxShadow:'10px 10px 20px #ccc',
              },
            }}
            >
              <Typography variant='h2' padding={3} textAlign="center">Login</Typography>
              <TextField onChange={handleChange} name="name"value={inputs.name} margin="normal" type={'text'} varient='outlined' placeholder='Name'/>
              <TextField onChange={handleChange} name="email" value={inputs.email} margin="normal" type={'email'} varient='outlined' placeholder='Email'/>
              <TextField onChange={handleChange} name="password" value={inputs.password}margin="normal" type={'password'} varient='outlined' placeholder='Password'/>
              <Button sx={{marginTop:3,borderRadius:3}} varient='contained'color='warning'>Login</Button>
            </Box>
        </form>
        </Dialog>
    </div>
                </>
              )
            }
            </Toolbar>
        </AppBar>
    
    </React.Fragment>
  )
}

export default Header
