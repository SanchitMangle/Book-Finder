import { useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FavoritesDrawer() {
    const { favorites, toggleFavorite, clearFavorites } = useFavorites();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ❤️ Floating Favorite Button */}
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.25 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <Button
                        onClick={() => setOpen(true)}
                        className="
              relative h-12 w-12 rounded-full shadow-lg border border-border/40
              bg-background/90 text-foreground
              backdrop-blur-md transition-all
              hover:bg-primary hover:text-primary-foreground hover:scale-105
            "
                        size="icon"
                    >
                        <Heart className="h-6 w-6" />
                        <AnimatePresence>
                            {favorites.length > 0 && (
                                <motion.span
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    className="
                    absolute -top-1 -right-1
                    bg-red-500 text-white
                    text-[10px] font-bold
                    h-5 w-5 rounded-full
                    flex items-center justify-center
                    shadow-md
                  "
                                >
                                    {favorites.length > 9 ? "9+" : favorites.length}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Button>
                </motion.div>
            </AnimatePresence>

            {/* 📚 Drawer */}
            <AnimatePresence>
                {open && (
                    <Drawer open={open} onOpenChange={setOpen}>
                        {/* Overlay background */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                            onClick={() => setOpen(false)}
                        />

                        {/* Drawer content */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", stiffness: 120, damping: 18 }}
                            className="
                fixed bottom-0 left-0 right-0 z-50
                bg-background border-t border-border shadow-2xl
                rounded-t-2xl max-h-[85vh] overflow-y-auto
              "
                        >
                            <DrawerHeader className="flex items-center justify-between p-4 border-b border-border">
                                <DrawerTitle className="text-lg font-bold flex items-center gap-2">
                                    ❤️ Favorite Books
                                </DrawerTitle>

                                {/* Header Actions */}
                                <div className="flex items-center gap-2">
                                    {favorites.length > 0 && (
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <Button variant="outline" size="sm">
                                                    Clear All
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className="bg-background border-border">
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Remove all favorites?</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        This will permanently clear your saved books.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction onClick={clearFavorites}>
                                                        Confirm
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    )}

                                    {/* ❌ X Icon (kept for compact mode) */}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setOpen(false)}
                                        aria-label="Close drawer"
                                        className="
                      rounded-full hover:bg-muted/70
                      text-muted-foreground hover:text-foreground
                      transition-all
                    "
                                    >
                                        <X className="h-5 w-5" />
                                    </Button>
                                </div>
                            </DrawerHeader>

                            {/* Drawer main content */}
                            <DrawerContent className="p-6">
                                {favorites.length === 0 ? (
                                    <p className="text-center text-muted-foreground py-10">
                                        No favorites yet.
                                    </p>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {favorites.map((book) => (
                                                <motion.div
                                                    key={book.key}
                                                    layout
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    className="
                            border rounded-xl p-3 bg-card
                            flex flex-col items-center shadow-sm
                            hover:shadow-md transition-all
                          "
                                                >
                                                    <img
                                                        src={
                                                            book.cover_i
                                                                ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                                                                : "https://via.placeholder.com/150x220?text=No+Cover"
                                                        }
                                                        alt={book.title}
                                                        className="w-full h-40 object-cover rounded-md mb-2"
                                                    />
                                                    <h3 className="text-sm font-semibold text-center line-clamp-2">
                                                        {book.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground mb-2">
                                                        {book.author_name?.[0] || "Unknown"}
                                                    </p>
                                                    <Button
                                                        onClick={() => toggleFavorite(book)}
                                                        variant="outline"
                                                        size="icon"
                                                        className="
                              h-7 w-7 rounded-full
                              text-destructive border-border/60
                              hover:bg-destructive hover:text-destructive-foreground
                            "
                                                    >
                                                        <Trash2 size={14} />
                                                    </Button>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* ✅ Visible Close Button at Bottom */}
                                        <div className="flex justify-center mt-8">
                                            <Button
                                                onClick={() => setOpen(false)}
                                                className="px-6 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition"
                                            >
                                                Close Drawer
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </DrawerContent>
                        </motion.div>
                    </Drawer>
                )}
            </AnimatePresence>
        </>
    );
}
