import { useState, useEffect } from "react";
import { fetchBooks } from "../lib/api";
import BookCard from "./BookCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function BookList({ query, filters }) {
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [numFound, setNumFound] = useState(0);

    const booksPerPage = 20;
    const totalPages = Math.ceil(numFound / booksPerPage);

    useEffect(() => {
        if (!query) return;
        setLoading(true);

        fetchBooks(query, page, filters.author, filters.year).then((data) => {
            setBooks(data.docs);
            setNumFound(data.numFound || 0);
            setLoading(false);
        });
    }, [query, page, filters]);

    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // For displaying 5 pages around the current one
    const renderPageNumbers = () => {
        const pages = [];
        const start = Math.max(1, page - 2);
        const end = Math.min(totalPages, page + 2);

        for (let i = start; i <= end; i++) {
            pages.push(
                <Button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    variant={i === page ? "default" : "outline"}
                    className={`px-3 sm:px-4 text-sm ${i === page ? "bg-primary text-primary-foreground" : ""}`}
                >
                    {i}
                </Button>
            );
        }

        return pages;
    };

    return (
        <div className="p-6">
            {books.length === 0 && !loading ? (
                <p className="text-center text-muted-foreground mt-10">No books found.</p>
            ) : (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        <AnimatePresence>
                            {books.map((book) => (
                                <motion.div
                                    key={book.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <BookCard book={book} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Google-style Pagination */}
                    <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
                        <Button
                            variant="outline"
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                        >
                            ◀ Prev
                        </Button>

                        {renderPageNumbers()}

                        <Button
                            variant="outline"
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page === totalPages}
                        >
                            Next ▶
                        </Button>
                    </div>

                    {/* Loading Skeleton */}
                    {loading && (
                        <div className="flex justify-center mt-6">
                            <Skeleton className="h-6 w-6 rounded-full bg-muted animate-pulse" />
                        </div>
                    )}

                    {/* Total results */}
                    {!loading && (
                        <p className="text-center text-xs text-muted-foreground mt-4">
                            Showing {books.length} of {numFound.toLocaleString()} results
                        </p>
                    )}
                </>
            )}
        </div>
    );
}
