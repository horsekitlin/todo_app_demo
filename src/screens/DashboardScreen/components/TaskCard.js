import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import formatDistanceStrict from "date-fns/formatDistanceStrict";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
}));

const TaskCard = ({ className, task, handleUpdateTask, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Typography
          delete
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {task.title}
        </Typography>
        <Typography align="center" color="grey" gutterBottom variant="h5">
          {task.status === 0 ? "未完成" : "已完成"}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <AccessTimeIcon className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              Updated{" "}
              {formatDistanceStrict(Date.now(), new Date(task.createdAt), {
                addSuffix: false,
              })}
            </Typography>
          </Grid>
          <Grid className={classes.statsItem} item>
            <Button
              onClick={() =>
                handleUpdateTask({
                  taskId: task.id,
                  status: task.status === 0 ? 1 : 0,
                })
              }
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {task.status === 0? 'Complate Task' : 'Uncomplate Task'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

TaskCard.propTypes = {
  className: PropTypes.string,
  task: PropTypes.object.isRequired,
};

export default TaskCard;
