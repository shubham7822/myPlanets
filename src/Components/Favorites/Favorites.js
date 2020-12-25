import React from "react";
import "./Favorites.css";
import { useStateValue } from "../../StateProvider";
import Favorite from "./Favroite/Favorite";
import uuid from "react-uuid";
function Favorites() {
  const [{ favorite }] = useStateValue();

  return (
    <div className='favorite'>
      {favorite?.length === 0 ? (
        <h3 className='favorite__heading'>
          add your unique favorite planet in the list
        </h3>
      ) : (
        <div>
          <h3 className='favorite__heading'>your favorite planets are here</h3>
          <div className='favorite__single__planet'>
            {favorite.map((item) => {
              return (
                <Favorite key={uuid()} itemId={item.id} itemName={item.name} />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
