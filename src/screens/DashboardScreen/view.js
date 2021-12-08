import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'components/Page';
import Toolbar from './components/Toolbar';
import TaskCard from './components/TaskCard';
import data from './components/data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  TaskCard: {
    height: '100%'
  }
}));

const DashboardScreen = (props) => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Page
      className={classes.root}
      title='Products'
    >
      <Container maxWidth={false}>
        <Toolbar handleAddTask={props.handleAddTask} />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <TaskCard
                  className={classes.TaskCard}
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display='flex'
          justifyContent='center'
        >
          <Pagination
            color='primary'
            count={3}
            size='small'
          />
        </Box>
      </Container>
    </Page>
  );
};

export default DashboardScreen;