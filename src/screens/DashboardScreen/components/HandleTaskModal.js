import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const HandleTaskModal = ({ mode, isOpen, setIsOpen }) => {
  const title = mode === 'ADD'
    ? '新增任務'
    : '編輯任務';

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField autoFocus label="Title" placeholder="Title" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsOpen(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={() => setIsOpen(false)} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

HandleTaskModal.propTypes = {
  mode: PropTypes.string,
};

HandleTaskModal.defaultProps = {
  mode: 'ADD', //enums: ['ADD', 'UPDATE']
};

export default HandleTaskModal;
