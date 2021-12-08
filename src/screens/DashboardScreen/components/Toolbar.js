import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { Search as SearchIcon } from 'react-feather';
import HandleTaskModal from './HandleTaskModal';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <HandleTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box
        display='flex'
        justifyContent='flex-end'
      >
        <Button
          onClick={() => setIsOpen(true)}
          color='primary'
          variant='contained'
        >
          新增任務
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SvgIcon
                        fontSize='small'
                        color='action'
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder='Search product'
                variant='outlined'
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;