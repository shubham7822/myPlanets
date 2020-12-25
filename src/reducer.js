export const initialState = {
  favorite: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDING_FAVORITE":
      let fav = [...state.favorite, action.item];
      const output = [];
      const map = new Map();
      for (const item of fav) {
        if (!map.has(item.id)) {
          map.set(item.id);
          output.push({
            id: item.id,
            name: item.name,
          });
        }
      }

      return {
        favorite: output,
      };

    case "REMOVE_FAVORITE":
      let newfav = [...state.favorite];
      const idx = newfav.findIndex((item) => item.id === action.id);
      if (idx >= 0) {
        newfav.splice(idx, 1);
      }
      return {
        favorite: newfav,
      };
    default:
      return state;
  }
};

export default reducer;
