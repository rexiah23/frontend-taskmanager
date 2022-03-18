import React from 'react';
import { IconButton, Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const useStyle = makeStyles((theme) => ({
  itemCard: {
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1),
    textAlign: 'left',
    "&:hover":{
      background:"#ddd"
    }
  },
  button: {
    textAlign: 'right',
  }
 })); 

const ItemCard = ({ value, onDelete }) => {
  const classes = useStyle(); 
  
  const deleteHandler = () => {
    onDelete(value)
  }

  return (
    <Paper className={classes.itemCard}>
      {value.content}
      <IconButton className={classes.button} onClick={deleteHandler}>
        <RemoveCircleOutlineIcon fontSize='small'/>
      </IconButton>
    </Paper>
  );

};

export default ItemCard;