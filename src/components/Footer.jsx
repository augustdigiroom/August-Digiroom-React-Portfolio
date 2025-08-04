export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} August Digiroom. All rights reserved.</p>
        <p className="mt-1">
          Built with <span className="text-indigo-600 font-semibold">React + Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
