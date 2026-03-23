/**
 * Renders a stylised browser-chrome mockup used inside featured project cards.
 * Displays a real project screenshot when an `image` prop is provided,
 * falling back to the decorative placeholder if not.
 */
export default function ProjectMockup({ title, url, image }) {
  const displayUrl = url
    ? url.replace(/^https?:\/\//, "")
    : `${title.toLowerCase().replace(/\s+/g, "")}.vercel.app`;

  return (
    <div
      className="w-full h-full rounded overflow-hidden"
      style={{ background: "#141210" }}
    >
      {/* Browser bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "#1a1814" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span
          className="flex-1 mx-3 px-3 py-1 rounded text-[11px] font-mono text-slate truncate"
          style={{ background: "#0c0b09" }}
        >
          {displayUrl}
        </span>
      </div>

      {/* Screenshot or fallback placeholder */}
      {image ? (
        <div
          className="w-full overflow-hidden"
          style={{ height: "calc(100% - 44px)" }}
        >
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>
      ) : (
        /* Decorative placeholder — remove once all images are provided */
        <div className="p-6">
          <div
            className="h-2.5 rounded-full mb-3 w-3/5"
            style={{ background: "#7a8a4e", opacity: 0.7 }}
          />
          <div
            className="h-1.5 rounded-full mb-2 w-4/5"
            style={{ background: "#2a2820" }}
          />
          <div
            className="h-1.5 rounded-full mb-2 w-3/5"
            style={{ background: "#2a2820" }}
          />
          <div
            className="h-1.5 rounded-full mb-6 w-2/3"
            style={{ background: "#2a2820" }}
          />

          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded h-14"
                style={{
                  background: "#1a1814",
                  border: "1px solid rgba(87,98,56,0.12)",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
