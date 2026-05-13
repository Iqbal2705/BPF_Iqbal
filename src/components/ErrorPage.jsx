import { Link } from "react-router-dom";

export default function ErrorPage({
  code = 404,
  title = "Not Found",
  description = "Halaman tidak ditemukan.",
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-[150px] font-extrabold text-hijau leading-none">
        {code}
      </h1>
      <h2 className="text-3xl font-bold text-gray-700 mt-4">{title}</h2>
      <p className="text-gray-400 mt-3 text-base max-w-md mx-auto text-center">
        {description}
      </p>
      <Link
        to="/"
        className="inline-block mt-8 bg-hijau text-white px-8 py-3 rounded-xl font-semibold hover:opacity-80 transition"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
}
