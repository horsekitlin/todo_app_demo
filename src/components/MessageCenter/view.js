import React from 'react';
import {withSnackbar} from 'notistack';

class MessageCenter extends React.Component {
  componentDidUpdate() {
    const {msgKey, status, text} = this.props;
    if (msgKey !== 0) {
      this.props.enqueueSnackbar(text, {
        key: msgKey,
        variant: status,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      });
    }
  }

  render() {
    return <></>;
  }
}

export default withSnackbar(MessageCenter);
