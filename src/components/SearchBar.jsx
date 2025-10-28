import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        console.log("🔍 Searching for:", query);
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-transparent">
            <Input
                type="text"
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-9 sm:h-10 w-[160px] sm:w-[220px] rounded-lg border border-border/60 bg-background/70 focus-visible:ring-1 focus-visible:ring-primary/60"
            />
            <Button type="submit" size="sm" className="flex items-center gap-1 rounded-lg">
                <Search size={16} />
                <span className="hidden sm:inline">Search</span>
            </Button>
        </form>
    );
}
