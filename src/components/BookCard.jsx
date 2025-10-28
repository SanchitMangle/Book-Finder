import { Button } from "@/components/ui/button";
import { Heart, ExternalLink } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function BookCard({ book }) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFav = favorites.some((b) => b.key === book.key);
    const openLibraryUrl = `https://openlibrary.org${book.key}`;

    return (
        <div className="border rounded-xl p-4 bg-card flex flex-col shadow-sm hover:shadow-md transition">
            <img
                src={
                    book.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                        : "https://via.placeholder.com/150x220?text=No+Cover"
                }
                alt={book.title}
                className="w-full h-48 object-cover rounded-md mb-3"
            />

            <h3 className="font-medium text-sm mb-1 line-clamp-2">{book.title}</h3>
            <p className="text-xs text-muted-foreground mb-3">
                {book.author_name?.[0] || "Unknown"} • {book.first_publish_year || ""}
            </p>

            <div className="mt-auto flex justify-between items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(openLibraryUrl, "_blank")}
                    className="flex items-center gap-1"
                >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Open</span>
                </Button>

                <Button
                    size="sm"
                    variant={isFav ? "destructive" : "outline"}
                    onClick={() => toggleFavorite(book)}
                    className="flex items-center gap-1"
                >
                    <Heart className="h-4 w-4" fill={isFav ? "currentColor" : "none"} />
                    {isFav ? "Remove" : "Fav"}
                </Button>

                {book.id_goodreads || book.id_amazon ? (
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() =>
                            window.open(
                                `https://openlibrary.org${book.key}/preview`,
                                "_blank"
                            )
                        }
                    >
                        👀 Preview
                    </Button>
                ) : null}

            </div>
        </div>
    );
}
