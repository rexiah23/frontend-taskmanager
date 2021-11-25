import { InputBase, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const TaskListTitle = props => {
  const [editing, setEditing] = useState(false);

  return (
  <div>
    {editing && <div><InputBase value="ToDo"/></div>}
    {!editing && <div>
      <Typography 
        onClick={() => setEditing(prev => !prev)}>
        To Do
        </Typography>
      </div>}
  </div>
  );
}

export default TaskListTitle;