import React from "react";
import "./Favorite.css";
import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useStateValue } from "../../../StateProvider";

function Favorites({ itemId, itemName }) {
  const [{ favorite }, dispatch] = useStateValue();

  const removePlanet = () => {
    dispatch({
      type: "REMOVE_FAVORITE",
      id: itemId,
    });
  };
  return (
    <div className='Favorites'>
      <List className='Favorites__list'>
        <ListItem>
          <ListItemText primary={itemName} secondary={itemId} />
        </ListItem>
        <Button>
          <ClearIcon onClick={removePlanet} />
        </Button>
      </List>
    </div>
  );
}

export default Favorites;
