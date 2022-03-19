import React, { createContext, useCallback, useMemo } from 'react';

import { Paper, CssBaseline, IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from '@mui/icons-material/Clear';

import ListTitle from './ListTitle';
import { MakeDroppable } from '../../hocs/MakeDroppable';
import AddNewTaskOrList from '../../AddNewTaskOrList';

const useStyle = makeStyles((theme) => ({
  root: {
    width:"300px",
    backgroundColor:"#EBECF0",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  }, 
  tasksContainer: {
    marginTop: theme.spacing(3)
  },
  titleAndDelete: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

export const ListContext = createContext(); 

const List = ({ 
  index,
  value: listValues, 
  onChange, 
  onDelete,
  children, 
  style : userStyles = {},
}) => {
  const classes = useStyle()
  const { id, title, tasks } = listValues; 

  const changeTitleHandler = useCallback((newTitle) => {
    onChange(newTitle, id)
  }, [listValues.id])

  const deleteListHandler = () => {
    onDelete(listValues, 'list')
  }
  
  const memoizedState = useMemo(() => ({
    id,
    title,
    tasks,
    index,
    onDelete, 
    changeTitleHandler
  }), [id, title, tasks, index, onDelete, changeTitleHandler])

  return (
    <ListContext.Provider value={memoizedState}>
      <Paper className={classes.root} style={userStyles}>
        <CssBaseline />
        <div className={classes.titleAndDelete}>
          <ListTitle value={memoizedState.title} onChange={changeTitleHandler} />
          <IconButton onClick={deleteListHandler}>
            <ClearIcon />
          </IconButton>
        </div>
          <MakeDroppable id={`${memoizedState.id}_`} className={classes.tasksContainer}>
              {children}
          </MakeDroppable>
          <AddNewTaskOrList listId={id} type='task'/>
      </Paper>
    </ListContext.Provider>
  );
};

export default List;
