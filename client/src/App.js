import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  //the returned dispatch function identity is stable and won't change 
  //on re-renders (unless you change the store being passed to the Provider, 
  //which would be extremely unusual

  return (
    <Container maxWidth="lg">
      <AppBar sx={{borderRadius: 15,
                  margin: '30px 0',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center'}} position="static" color="inherit">
        <Typography sx={{color: '#188ca1'}} variant="h3" align="center">SnapGram </Typography>
        <CameraOutlinedIcon sx={{color: '#188ca1',fontSize:'260%'}}/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={1}>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;