import React, { useContext } from 'react';
import { Button, Grow } from "@material-ui/core"
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
  const classes = useStyle(); 
  const { dataChanged, submitChangesToApi } = useContext(AllDataContext);

  return (
    <div>
      {dataChanged &&  <Grow in={dataChanged}>
        <Button 
          className={classes.saveButton}
          onClick={submitChangesToApi}
          >
            Save Changes
          </Button>
        </Grow>}
    </div>
  );
}

export default SaveButton;