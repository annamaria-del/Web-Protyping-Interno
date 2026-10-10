import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (design) => {
    const alreadyFavorite = favorites.some(
      (item) => item.id === design.id
    );

    if (alreadyFavorite) {
      setFavorites(
        favorites.filter((item) => item.id !== design.id)
      );
    } else {
      setFavorites([...favorites, design]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}