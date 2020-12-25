import React from "react";
import "./Planet.css";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useStateValue } from "../../../StateProvider";

function Planet({ id, name }) {
  const [favorite, dispatch] = useStateValue();
  const addingFavorite = () => {
    dispatch({
      type: "ADDING_FAVORITE",
      item: {
        id: id,
        name: name,
      },
    });
  };
  return (
    <div className='single-list'>
      <List className='list'>
        <ListItem>
          <ListItemText primary={name} secondary={id} />
        </ListItem>
        <Button>
          <FavoriteBorderIcon
            onClick={addingFavorite}
            className='planet__list__icons'
          ></FavoriteBorderIcon>
        </Button>
      </List>
    </div>
  );
}

export default Planet;
