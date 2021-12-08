import React, { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Page from "components/Page";
import Toolbar from "./components/Toolbar";
import TaskCard from "./components/TaskCard";

const DEFAULT_TASK = { title: "" };

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  TaskCard: {
    height: "100%",
  },
}));

const filterTask = (searchText, taskList) => {
  if (isEmpty(searchText)) return taskList;
  const reg = new RegExp(searchText);
  return taskList.filter(task => reg.test(task.title));
}

const DashboardScreen = (props) => {
  const classes = useStyles();
  const [modalOptions, setModalOptions] = useState({
    isOpen: false,
    task: { ...DEFAULT_TASK },
  });
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    props.handleGetTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayTasks = filterTask(searchText, props.taskList);
  return (
    <Page className={classes.root} title="Products">
      <Container maxWidth={false}>
        <Toolbar
          isOpen={modalOptions.isOpen}
          searchText={searchText}
          setSearchText={setSearchText}
          openModal={() => setModalOptions({ ...modalOptions, isOpen: true })}
          closeModal={() =>
            setModalOptions({ task: { ...DEFAULT_TASK }, isOpen: false })
          }
          handleAddTask={props.handleAddTask}
        />
        <Box mt={3}>
          <Grid container spacing={3}>
            {displayTasks.map((task) => (
              <Grid item key={task.id} lg={3} md={3} xs={6}>
                <TaskCard
                  task={task}
                  className={classes.TaskCard}
                  handleUpdateTask={props.handleUpdateTask}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};

export default DashboardScreen;
