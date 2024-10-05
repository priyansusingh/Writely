import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@priyansusingh/digital-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Loading state

  async function sendRequest() {
    setLoading(true); // Set loading to true when request starts
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${
          type === "signup" ? "signup" : "signin"
        }`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      console.log("error", e);
      // alert the user here that the request failed
    } finally {
      setLoading(false); // Set loading to false when request completes
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md transition-transform transform hover:scale-105">
        <div className="text-3xl font-extrabold text-center mb-4">
          {type === "signup" ? "Create an account" : "Welcome Back!"}
        </div>
        <div className="text-slate-500 text-center mb-4">
          {type === "signin" ? "Don't have an account?" : "Already have an account?"}
          <Link className="pl-2 text-indigo-600 underline" to={type === "signin" ? "/signup" : "/signin"}>
            {type === "signin" ? "Sign up" : "Sign in"}
          </Link>
        </div>
        <div>
          {type === "signup" ? (
            <LabelledInput
              label="Name"
              placeholder="John Doe"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                });
              }}
            />
          ) : null}
          <LabelledInput
            label="Email"
            placeholder="example@gmail.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="Password"
            type={"password"}
            placeholder="123456"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            onClick={sendRequest}
            type="button"
            className={`mt-8 w-full text-white ${
              loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            } focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300 relative`}
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <Loader />
                Loading...
              </span>
            ) : (
              type === "signup" ? "Sign up" : "Sign in"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Loader component
const Loader = () => {
  return (
    <div className="w-4 h-4 mr-3 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div className="mt-4">
      <label className="block mb-2 text-sm text-black font-semibold">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition duration-300 hover:border-indigo-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
