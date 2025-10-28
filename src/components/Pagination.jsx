import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="flex items-center justify-center gap-3 py-6">
            <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="rounded-full"
            >
                <ChevronLeft size={18} />
            </Button>

            <span className="text-sm font-medium text-muted-foreground">
                Page <span className="text-foreground">{currentPage}</span> /{" "}
                {totalPages}
            </span>

            <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="rounded-full"
            >
                <ChevronRight size={18} />
            </Button>
        </div>
    );
}
