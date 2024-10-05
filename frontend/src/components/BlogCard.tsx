import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-screen max-w-screen-md cursor-pointer border border-gray-200 mb-4">
                <div className="flex items-center mb-3">
                    <Avatar name={authorName} />
                    <div className="pl-3">
                        <div className="font-semibold text-gray-800">{authorName}</div>
                        <div className="text-gray-500 text-sm">{publishedDate}</div>
                    </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{content.slice(0, 100) + "..."}</p>
                <div className="text-gray-500 text-sm">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
    );
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-gray-400 mx-2" />;
}

export function Avatar({ name, size = "small" }: { name: string; size?: "small" | "big" }) {
    return (
        <div
            className={`relative inline-flex items-center justify-center overflow-hidden bg-gradient-to-r from-teal-400 to-blue-500 border-2 border-white shadow-lg rounded-full ${size === "small" ? "w-8 h-8" : "w-12 h-12"}`}
        >
            <span
                className={`${size === "small" ? "text-sm" : "text-lg"} font-bold text-white`}
            >
                {name[0]}
            </span>
        </div>
    );
}
