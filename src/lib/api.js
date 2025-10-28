export const fetchBooks = async (query, page = 1, author = "", year = "") => {
    const limit = 20;
    const offset = (page - 1) * limit;
    const url = new URL("https://openlibrary.org/search.json");
    url.searchParams.append("q", query || "books");
    url.searchParams.append("limit", limit);
    url.searchParams.append("offset", offset);
    if (author) url.searchParams.append("author", author);
    if (year) url.searchParams.append("first_publish_year", year);

    const res = await fetch(url);
    return res.json();
};
