import React, { useState, useContext } from 'react';
import { Collapse, Paper, Typography } from '@material-ui/core';
import { makeStyles, alpha } from "@material-ui/core/styles";
import ItemContentInput from './ui/Input/ItemContentInput';
import { AllDataContext } from '../providers/AllDataContext';
import AddNewItemButton from './ui/Buttons/AddItemButton';

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
        content_ = {content, type:'task', listIdParsed: listId};
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
        <ItemContentInput value={type} onChange={submitNewTaskOrListHandler} />
      </Collapse>
      <Collapse in={!showInput}>
        <AddNewItemButton label={`Add a ${type}`} onClick={() => setShowInput(true)}/>
      </Collapse>
    </div>
  )
}
export default AddNewTaskOrList;