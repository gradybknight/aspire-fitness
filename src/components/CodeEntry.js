import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
// import classNames from 'classnames';

const CodeEntry = props => {
  let {enteredCode, handleChange} = props;

  return (
    <TextField
          id="secret-code"
          label="Please enter the code"
          // className={classes.textField}
          value={enteredCode}
          onChange={handleChange}
          margin="normal"
        />
  )
}

CodeEntry.propTypes = {
  enteredCode:PropTypes.string.isRequired
}

export default CodeEntry
