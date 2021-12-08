import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const HandleTaskModal = ({ mode, isOpen, setIsOpen, handleAddTask }) => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const title = mode === "ADD" ? "新增任務" : "編輯任務";

  const closeModal = () => {
    setFormData({ title: ""});
    setIsOpen(false);
  };

  const handleSubmit = () => {
    handleAddTask({
      ...formData,
      onSuccess: closeModal,
    });
  };

  return (
    <Dialog open={isOpen} onClose={closeModal}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Title"
          placeholder="Title"
          fullWidth
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
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
  mode: "ADD", //enums: ['ADD', 'UPDATE']
};

export default HandleTaskModal;
