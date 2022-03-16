import React, { useState } from 'react';
import { Collapse, Paper, Typography } from '@material-ui/core';
import { makeStyles, alpha } from "@material-ui/core/styles";
import InputCard from './InputCard';

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px"
  }, 
  addTask: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1), 
    background:"#EBECF0",
    "&:hover": {
      backgroundColor: alpha("#000", 0.2)
    }
  }
}))


const AddNewItemInput = ({ listId, type='list' }) => {
  const [showInput, setShowInput] = useState(false);
  const classes = useStyle(); 

  return (
    <div className={classes.root}>
      <Collapse in={showInput}>
        <InputCard setShowInput={setShowInput} listId={listId} type={type}/>
      </Collapse>
      <Collapse in={!showInput}>
        <Paper 
          className={classes.addTask} 
          elevation={0}
          onClick={() => setShowInput(true)}
          >
          <Typography>
            {type === 'list' ? '+ Add a List' : '+ Add a Task'}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}
export default AddNewItemInput;