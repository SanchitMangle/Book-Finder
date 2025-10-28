import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function FilterBar({ onFilter }) {
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");

    const handleApply = (e) => {
        e.preventDefault();
        onFilter({ author, year });
    };

    return (
        <form
            onSubmit={handleApply}
            className="flex items-center gap-2 bg-transparent"
        >
            <Input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="
          h-9 sm:h-10
          w-[120px] sm:w-[150px]
          rounded-lg border border-border/60
          bg-background/70
          focus-visible:ring-1 focus-visible:ring-primary/60
        "
            />
            <Input
                type="number"
                placeholder="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="
          h-9 sm:h-10
          w-[100px] sm:w-[120px]
          rounded-lg border border-border/60
          bg-background/70
          focus-visible:ring-1 focus-visible:ring-primary/60
        "
            />
            <Button
                type="submit"
                variant="secondary"
                size="sm"
                className="flex items-center gap-1 rounded-lg"
            >
                <Filter size={16} />
                <span className="hidden sm:inline">Apply</span>
            </Button>
        </form>
    );
}
