import SearchBar from "@/components/SearchBar";
import FilterBar from "@/components/FilterBar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function Header({ onSearch, onFilter }) {
    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
        >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-3 gap-4 sm:gap-6">
                <h1 className="text-2xl sm:text-xl font-bold tracking-tight text-primary flex items-center gap-2">
                    📚 Book Finder
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-muted/30 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm border border-border/60">
                    {/* ✅ Pass props to search/filter */}
                    <SearchBar onSearch={onSearch} />
                    <div className="hidden sm:block w-px h-6 bg-border/60 mx-1" />
                    <FilterBar onFilter={onFilter} />
                </div>

                <div className="flex items-center gap-3">
                    <ThemeToggle />
                </div>
            </div>
        </motion.header>
    );
}
