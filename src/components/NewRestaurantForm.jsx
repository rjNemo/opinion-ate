import React, {useState} from 'react';
import {connect} from 'react-redux';
import {TextField, Button, makeStyles} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import {createRestaurant} from '../store/restaurants/actions';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const NewRestaurantForm = ({createRestaurant}) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [serverError, setServerError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (name) {
      setValidationError(false);
      setServerError(false);
      createRestaurant(name)
        .then(() => setName(''))
        .catch(() => {
          setServerError(true);
        });
    } else {
      setValidationError(true);
    }
  };

  const handleChange = e => setName(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      {serverError && (
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      )}
      {validationError && <Alert severity="error">Name is required</Alert>}
      <Box display="flex" className={classes.root}>
        <TextField
          placeholder="Add Restaurant"
          value={name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          // label="Add Restaurant"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          data-testid="new-restaurant-submit-button"
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

const selectProps = null;
const selectDispatch = {createRestaurant};

export default connect(selectProps, selectDispatch)(NewRestaurantForm);
