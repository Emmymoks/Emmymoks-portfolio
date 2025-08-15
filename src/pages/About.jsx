import ParallaxSection from "../components/ParallaxSection.jsx";
import { Radial } from "../components/Skills.jsx";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
      
      {/* About Section */}
      <ParallaxSection>
        <div className="grid gap-10 items-start lg:grid-cols-3">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/hero-art.svg"
              alt="Emmanuel Mokwunye"
              className="w-full max-w-xs max-h-[300px] object-contain rounded-2xl border border-white/20 shadow-lg"
            />
          </div>

          {/* About Text */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="font-display text-4xl mb-4">About Emmanuel</h1>
            <p className="text-neutral-300 leading-relaxed">
              I'm a front-end developer and graphic designer focused on
              accessible, performant, and elegant interfaces. I love pairing
              solid engineering with crisp visual systems.
            </p>

            {/* Skills Summary */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 p-4 text-center sm:text-left">
                <h3 className="font-semibold mb-2">Technical Stack</h3>
                <p className="text-sm text-neutral-300">
                  HTML, CSS, JavaScript, React, Vite, TailwindCSS, GSAP.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4 text-center sm:text-left">
                <h3 className="font-semibold mb-2">Design Tools</h3>
                <p className="text-sm text-neutral-300">
                  Figma, Adobe Suite, Canva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Skills Section */}
      <ParallaxSection>
        <div>
          <h2 className="font-display text-2xl mb-6 text-center lg:text-left">
            Skills
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Radial label="React" value={90} />
            <Radial label="Tailwind" value={92} />
            <Radial label="GSAP / Motion" value={88} />
            <Radial label="UI/UX" value={90} />
            <Radial label="Brand Design" value={85} />
            <Radial label="Prototyping" value={86} />
          </div>
        </div>
      </ParallaxSection>

      {/* What I Do Section */}
      <ParallaxSection>
        <div>
          <h2 className="font-display text-2xl mb-6 text-center lg:text-left">
            What I Do
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-neutral-300">
            <div className="rounded-2xl border border-white/10 p-4 text-center sm:text-left">
              ☕ Sketch UI ideas and review tickets.
            </div>
            <div className="rounded-2xl border border-white/10 p-4 text-center sm:text-left">
              💻 Build components and craft micro-interactions.
            </div>
            <div className="rounded-2xl border border-white/10 p-4 text-center sm:text-left">
              🎨 Polish visuals, ship, iterate.
            </div>
          </div>
        </div>
      </ParallaxSection>
      
    </div>
  );
}
