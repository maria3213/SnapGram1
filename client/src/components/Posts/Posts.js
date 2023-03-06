import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts)
  return (
    !posts.length ? <Typography sx={{color: "white"}} variant="h6">No Snap...Create One!</Typography> : (
      <Grid sx={{display: 'flex',alignItems: 'center'}} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;