import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
               <Appbar />
                       <div className="flex justify-center w-full pt-8">
                      <div className="max-w-screen-lg w-full p-6 bg-white rounded-lg shadow-lg">
                      <input
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        type="text"
                        className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 mb-4"
                        placeholder="Title"
                    />

                    <TextEditor
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    />
                    <button
               onClick={async () => {
                 const response = await axios.post(
              `${BACKEND_URL}/api/v1/blog`,
               {
                title,
                 content,
              },
              {
                headers: {
                       Authorization: localStorage.getItem("token"),
                   },
               }
             );
            navigate(`/blog/${response.data.id}`);
             }}
                type="submit"
                className="mt-4 inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 shadow-md transform hover:scale-105"
           >
    Publish Post
           </button>

                </div>
            </div>
        </div>
    );
};

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div className="mt-4">
            <div className="w-full mb-4">
                <div className="flex items-center justify-between border">
                    <div className="my-2 bg-white rounded-lg w-full">
                        <label className="sr-only ">Publish post</label>
                        <textarea
                            onChange={onChange}
                            id="editor"
                            rows={8}
                            className="focus:outline-none block w-full px-3 py-2 text-sm text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Write an article..."
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
