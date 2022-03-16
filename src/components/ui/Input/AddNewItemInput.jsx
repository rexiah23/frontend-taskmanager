import React, { useState, useContext } from 'react';
import { Collapse, Paper, Typography } from '@material-ui/core';
import { makeStyles, alpha } from "@material-ui/core/styles";
import InputCard from './InputCard';
import { AllDataContext } from '../../../providers/AllDataContext';

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
  const { newAddHandler } = useContext(AllDataContext) 
  const classes = useStyle(); 

  const onAddNewItem = (newItemContent) => {
    if (newItemContent) {
      newAddHandler(newItemContent)
    }
    setShowInput(false)
  }

  console.log('showInput', showInput)
  return (
    <div className={classes.root}>
      <Collapse in={showInput}>
        <InputCard value={listId} onChange={onAddNewItem} type={type}/>
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