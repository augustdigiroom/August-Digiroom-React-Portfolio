export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center", // ✅ center align text
        padding: "1rem 0",
      }}
    >
      <div>
        <p>© {new Date().getFullYear()} August Digiroom. All rights reserved.</p>
        <p className="mt-1">
          Built with{" "}
          <span className="text-indigo-600 font-semibold">
            React + Material UI
          </span>
        </p>
      </div>
    </footer>
  );
}
