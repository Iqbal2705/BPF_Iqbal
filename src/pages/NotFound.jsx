import ErrorPage from "../components/ErrorPage";

export default function NotFound() {
  return (
    <ErrorPage
      code={404}
      title="Page Not Found"
      description="Halaman yang kamu cari tidak ditemukan."
    />
  );
}
