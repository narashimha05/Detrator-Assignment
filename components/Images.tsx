import { Box, useMediaQuery, useTheme } from "@mui/material"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function Images() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const cols = xs ? 1 : sm ? 2 : 4;

  return (
    <Box sx={{paddingBottom: '50px'}}>
        <ImageList sx={{ width: 'full', height: 'full', marginX: {xs: '50px', sm: '40px'}}} cols={cols}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
            <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{borderRadius: '10px'}}
            />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>
  )
}

export default Images

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    }
  ];