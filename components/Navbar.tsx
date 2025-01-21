'use client';
import { Box, Typography, TextField, useMediaQuery, Theme} from "@mui/material"
import { SearchOutlined } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import Avatar from "@mui/material/Avatar"
import React from 'react';


const Navbar = () => {
    const isMdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', paddingX: {xs: "10px", sm: "50px"}, backgroundColor: "#F5F5F5" }}>
            <Box><Typography fontSize={24}>Detrator</Typography></Box>
            {isMdUp && (
                <Box>
                    <TextField sx={{ width: '300px', border: "0.5px solid",borderRadius: '5px' }}
                    variant="outlined" size="small" slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchOutlined />
                                </InputAdornment>
                            ),

                        }
                    }} />
                </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="image-avatar"></Avatar>
                <Typography sx={{ paddingLeft: '20px' }} fontSize={20}>John</Typography>
            </Box>
        </Box>
    )
}

export default Navbar;