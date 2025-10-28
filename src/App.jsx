import { useState } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import FavoritesDrawer from "./components/FavoritesDrawer";
import { ScrollToTop } from "./components/ScrollToTop";
import { FavoritesProvider } from "./context/FavoritesContext";
import { Toaster } from "sonner";

export default function App() {
  const [query, setQuery] = useState("harry potter");
  const [filters, setFilters] = useState({ author: "", year: "" });

  const handleSearch = (term) => {
    setQuery(term);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <FavoritesProvider>
      {/* ✅ Pass down handlers */}
      <Header onSearch={handleSearch} onFilter={handleFilter} />

      {/* ✅ Book list will react to query + filters */}
      <BookList query={query} filters={filters} />

      <FavoritesDrawer />
      <ScrollToTop />
      <Toaster position="top-right" richColors closeButton />
    </FavoritesProvider>
  );
}
