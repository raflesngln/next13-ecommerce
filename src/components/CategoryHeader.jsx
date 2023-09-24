import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';


export default function CardKategori(){
  return(
    <>
    <TopContent/>
    </>
  )

}

  function Kategori() {
  return(
    <>
    {
      itemData.map((val,i)=>{
        return (
          <>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{mt:-5,mb:5,pl:2}}>
                    <Card sx={{width:'100%' ,background:'#3e3e3ee0',color:'white',borderRadius:'6px'}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={`${val.img}`}
                        alt={`val.label`}
                        sx={{objectFit:'fill',height: { xs: '110px',sm: '110px', md: '230px' },}}
                      />
                      <Typography variant="h4" align='center' component="div" sx={{top:'0%',textAlign:'center',position:'absolute',
                          background:'#22263cc2',padding:'1px 7px 1px 7px',fontWeight:'bold',borderRadius:'6px',width:'100%',height:'100%',zIndex:999,transition:'0.5s all',
                          '&:hover': {
                            background: '#22263c47',
                          },
                          }}>
                       
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',direction:'column'}}>
                          <Typography variant="h5" component="h6" align='center' sx={{fontWeight:'bold',fontSize:'25px',mt:{ xs: '13%', md: '26%' },color:'#dbdbdbe0',transition:'0.3s all',
                             '&:hover': {
                              fontSize: '28px',
                              color:'orange'
                            },
                            }}>
                          {`${val.title}`}
                          </Typography>
                        </Box>
                        {/* </Stack> */}
                      </Typography>
                    </CardActionArea>
                    </Card>
              </Grid>
          
          </>
          );
      })
    }
    </>
  )
}

function TopContent() {
  return(
    <>
    {
      itemData.map((val,i)=>{
        return (
          <>
              <Grid item xs={6} sm={6} md={3} lg={3} xl={3} sx={{mt:-5,mb:5,pl:2}}>
                    <Card sx={{width:'100%' ,background:'#3e3e3ee0',color:'white',borderRadius:'6px',boxShadow:'4px 6px 17px 0px #8c8e95d1',borderRadius:'8px'}}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={`${val.img}`}
                        alt={`val.label`}
                        sx={{objectFit:'fill',height: { xs: '140px',sm: '140px', md: '250px',lg: '250px' },}}
                      />
                      <Typography variant="h4" align='center' component="div" sx={{top:'0%',textAlign:'center',position:'absolute',
                          background:'linear-gradient(45deg, #0a1c24, #0a322e75,#0d2632)',padding:'1px 7px 1px 7px',fontWeight:'bold',borderRadius:'6px',width:'100%',height:'100%',zIndex:999,transition:'0.5s all',
                          '&:hover': {
                            background: '#22263c47',
                            boxShadow:'4px 6px 17px 0px #22263c'
                          },
                          }}>
                       
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',direction:'column'}}>
                          <Typography variant="h5" component="h6" align='center' sx={{fontWeight:'bold',fontSize:'25px',mt:{ xs: '13%', md: '26%' },color:'#dbdbdbe0',transition:'0.3s all',
                             '&:hover': {
                              fontSize: '28px',
                              color:'orange'
                            },
                            }}>
                          {`${val.title}`}
                          </Typography>
                        </Box>
                        {/* </Stack> */}
                      </Typography>
                    </CardActionArea>
                    </Card>
              </Grid>
          </>
          );
      })
    }
    </>
  )
}


const itemData = [
  {
    img: 'https://cf.shopee.co.id/file/66909dbaa2f3db936b70206aaa8a1cdb',
    alt: 'Dompet A',
    title: 'DOMPET',
    harga:'89.000'
  },
  {
    img: 'https://cf.shopee.co.id/file/cc1e4b943bf05a0384d0c6d3cc5f8761',
    alt: 'Dompet B',
    title: 'TAS',
    harga:'65.000'
  },
  {
    img: 'https://cf.shopee.co.id/file/1722c7263f3b75716130c954e93335dc',
    alt: 'Dompet C',
    title: 'TOPI',
    harga:'230.000'
  },
  {
    img: 'https://cf.shopee.co.id/file/4f407ef5a07bdda7fb9328cc83c8d6a0',
    alt: 'Dompet D',
    title: 'GANTUNGAN KUNCI',
    harga:'125.000'
  }
];
