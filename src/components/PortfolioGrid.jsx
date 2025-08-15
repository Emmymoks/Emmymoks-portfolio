import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "./Lightbox.jsx";
import projects from "../data/projects.js";

const tabs = ["all", "web", "graphics"]; // lowercase for consistency

export default function PortfolioGrid() {
  const [tab, setTab] = useState("all");
  const [preview, setPreview] = useState(null);

  const filtered = useMemo(() => {
    if (tab === "all") return projects;
    return projects.filter((p) => p.category.toLowerCase() === tab);
  }, [tab]);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              tab === t
                ? "border-accent-500 text-accent-500 bg-accent-500/10"
                : "border-white/15 text-neutral-300 hover:text-white hover:border-accent-500"
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, index) => (
          <div
            key={`${p.slug}-${index}`}
            className="group relative border border-white/10 rounded-2xl overflow-hidden bg-neutral-900 shadow-md hover:shadow-lg transition"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-48 object-cover group-hover:scale-[1.05] transition-transform duration-300"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/50 backdrop-blur-sm flex flex-col justify-end p-4">
              <h3 className="font-semibold mb-2 text-white">{p.title}</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPreview(p)}
                  className="px-3 py-1 rounded-md border border-white/20 text-sm hover:border-accent-500 transition"
                >
                  View
                </button>
                <Link
                  to={`/project/${p.slug}`}
                  className="px-3 py-1 rounded-md border border-white/20 text-sm hover:border-accent-500 transition"
                >
                  Case Study
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Preview */}
      <Lightbox open={!!preview} onClose={() => setPreview(null)}>
        {preview && (
          <div className="space-y-4">
            <img
              src={preview.screens[0]}
              alt={preview.title}
              className="w-full rounded-lg"
            />
            <div className="text-sm text-neutral-300 space-y-1">
              <p>
                <span className="text-neutral-400">Role:</span> {preview.role}
              </p>
              <p>
                <span className="text-neutral-400">Tools:</span>{" "}
                {preview.tools.join(", ")}
              </p>
              <p className="text-neutral-400">{preview.description}</p>
            </div>
          </div>
        )}
      </Lightbox>
    </div>
  );
}
