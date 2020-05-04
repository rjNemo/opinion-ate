import React, {useState} from 'react';
import {connect} from 'react-redux';
import {TextField, Button, makeStyles} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {createRestaurant} from '../store/restaurants/actions';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: '1rem',
  },
  button: {
    margin: '1rem 0',
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
    <form className={classes.form} onSubmit={handleSubmit}>
      {serverError && (
        <Alert severity="error">
          The restaurant could not be saved. Please try again.
        </Alert>
      )}
      {validationError && <Alert severity="error">Name is required</Alert>}
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
        className={classes.button}
        data-testid="new-restaurant-submit-button"
      >
        Add
      </Button>
    </form>
  );
};

const selectProps = null;
const selectDispatch = {createRestaurant};

export default connect(selectProps, selectDispatch)(NewRestaurantForm);
