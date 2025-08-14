export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-6">404</h1>
      <p className="text-neutral-600 dark:text-neutral-300 mb-8">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="px-6 py-3 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-500">Go Home</a>
    </main>
  );
}
