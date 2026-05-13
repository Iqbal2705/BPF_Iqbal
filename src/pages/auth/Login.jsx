import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      });

      // kalau sukses langsung redirect
      navigate("/");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login gagal");
      } else {
        setError("Server tidak merespon");
      }
    } finally {
      setLoading(false);
    }
  };

  const errorInfo = error ? (
    <div className="bg-red-200 mb-5 p-5 text-sm font-light text-gray-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
      <ImSpinner2 className="me-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {error && (
        <div className="bg-red-200 mb-5 p-5 text-sm text-gray-700 rounded flex items-center">
          <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
          {error}
        </div>
      )}

      {loading && (
        <div className="bg-gray-200 mb-5 p-5 text-sm rounded flex items-center">
          <ImSpinner2 className="me-2 animate-spin" />
          Mohon Tunggu...
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
