import React, { useState, useContext } from 'react';
import { Collapse, Paper, Typography } from '@material-ui/core';
import { makeStyles, alpha } from "@material-ui/core/styles";
import NewItemContentInput from './ui/Input/NewItemContentInput';
import { AllDataContext } from '../providers/AllDataContext';

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

const AddNewTaskOrList = ({ listId, type='list' }) => {
  const [showInput, setShowInput] = useState(false);
  const { newAddHandler } = useContext(AllDataContext) 
  const classes = useStyle(); 

  const submitNewTaskOrListHandler = (content) => {
    if (content) {
      let content_ = {};
      if (type === 'task') {
        const listIdParsed = listId.slice(0, -1);
        content_ = {content, type:'task', listIdParsed};
      } else {
        content_ = {content, type:'list'};
      };
      newAddHandler(content_)
    }
    setShowInput(false)
  }

  return (
    <div className={classes.root}>
      <Collapse in={showInput}>
        <NewItemContentInput value={type} onChange={submitNewTaskOrListHandler} />
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
export default AddNewTaskOrList;