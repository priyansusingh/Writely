import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { useState } from "react";

const ITEMS_PER_PAGE = 5; // Adjust this number as needed

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    const [currentPage, setCurrentPage] = useState(1);

    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center">
                    <div>
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    // Calculate total pages
    const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

    // Get current blogs for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    {currentBlogs.map((blog) => (
                        <BlogCard
                            key={blog.id} // Added a key for each BlogCard
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2nd Feb 2024"}
                        />
                    ))}
                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300"
                        >
                            Previous
                        </button>
                        <span className="self-center">{`Page ${currentPage} of ${totalPages}`}</span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
