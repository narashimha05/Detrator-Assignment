import { Button, Typography } from "@mui/material"
import {Box} from "@mui/material"
import Images from "./Images"
function Heading() {
  return (<>
  <Box sx={{backgroundColor: "#F5F5F5", paddingBottom: "50px"}}>
    <Box sx={{paddingTop: {xs: "50px", sm: "70px"}}}>
    <Typography variant="h1" align="center" sx={{fontWeight: '700', fontSize: {xs:'24px',sm:'36px',md:'64px',lg:'72px'}}}>Discover the beauty</Typography>
    <Typography variant="h1" align="center" sx={{paddingTop: "2px" , fontWeight: '700', fontSize: {xs:'24px',sm:'36px',md:'64px',lg:'72px'}}}>around the world</Typography>
    <Box sx={{marginX: {xs: "20px", sm: "50px"}}}>
      <Typography variant="h1" align="center" sx={{marginTop: "22px", textAlign: 'center', color: "#7C7C7C", fontSize: {xs:'12px',sm:'24px'}}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley</Typography>
      </Box>
    </Box>
    <Box sx={{display: "flex", justifyContent: "center", paddingY: "50px"}}>
      <Button variant="contained" sx={{backgroundColor: "black", color: "#FFF", width: "150px", height: "50px", borderRadius: "10px", display: "block"}}>Explore</Button>
    </Box>
    <Box>
    </Box>
    </Box>
    <Images />
  
</>)
}

export default Heading