import React from 'react';
import {TextField, Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: '1rem',
  },
  button: {
    margin: '1rem 0',
  },
}));

export const NewRestaurantForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.form}>
      <TextField
        placeholder="Add Restaurant"
        fullWidth
        variant="outlined"
        label="Add Restaurant"
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Add
      </Button>
    </form>
  );
};

export default NewRestaurantForm;
