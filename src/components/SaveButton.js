import React, { useContext } from 'react';
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import { AllDataContext } from "../providers/AllDataContext";

const useStyle = makeStyles((theme) => ({
  saveButton: {
    background: 'red',
    color: '#fff',
    margin: theme.spacing(2),
  }
}));

const SaveButton = props => {
  console.log("SAVE BUTTON RAN")
  const classes = useStyle(); 
  const { dataChanged, saveChangesToServer } = useContext(AllDataContext);

  return (
   <Button className={classes.saveButton}>Save Changes</Button>
  );
}

export default SaveButton;