import * as React from 'react';
import { useEffect , useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageCard from './ImageCard';

export default function BasicGrid() {
  const [imageBucket, setImageBucket] = useState([]);
  const imageBase = "https://test.create.diagnal.com/images/";

  useEffect(() => {
    getImages();

  },[])

  async function getImages(){
    const url = "https://test.create.diagnal.com/data/page1.json";
    const response = await fetch(url);
    const images = await response.json();
  
    setImageBucket(images["page"]["content-items"]["content"]);
  
  }

  console.log(imageBucket);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          imageBucket.map((val,inx) => {
            return(
              <Grid item xs={4} key={inx}>
                <img alt={"poster"} src = {imageBase + val["poster-image"]} ></img>
                <p>{val.name}</p>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  );
}