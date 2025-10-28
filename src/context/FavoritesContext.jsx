import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
    }, []);

    const toggleFavorite = (book) => {
        let updated;
        if (favorites.some((b) => b.key === book.key)) {
            updated = favorites.filter((b) => b.key !== book.key);
            toast.error("Removed from favorites", { description: book.title });
        } else {
            updated = [...favorites, book];
            toast.success("Added to favorites ❤️", { description: book.title });
        }
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    const clearFavorites = () => {
        setFavorites([]);
        localStorage.removeItem("favorites");
        toast.info("All favorites cleared");
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, toggleFavorite, clearFavorites }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => useContext(FavoritesContext);
