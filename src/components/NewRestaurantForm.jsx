import React, {useState} from 'react';
import {TextField, Button, makeStyles} from '@material-ui/core';

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

  const handleSubmit = e => {
    e.preventDefault();
    createRestaurant(name);
  };

  const handleChange = e => setName(e.target.value);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
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

export default NewRestaurantForm;
