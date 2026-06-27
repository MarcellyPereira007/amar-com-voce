import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "./components/Loading";
import Hero from "./components/Hero";
import SectionMedos from "./components/SectionMedos";
import SectionRedoma from "./components/SectionRedoma";
import SplashCursor from "./components/SplashCursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="w-full overflow-hidden relative cursor-default">

      {/*O animate presence permite que os componentes que são filhos façam uma animação de saía antes de sairem da tela*/}
      <AnimatePresence>
        {isLoading && (
          <Loading onComplete={() =>
          setIsLoading(false)}/>
          )}
      </AnimatePresence>

      <div className="fixed inset-0 z-5 pointer-events-none">
        <SplashCursor
          DENSITY_DISSIPATION={6}
          VELOCITY_DISSIPATION={1.5}
          PRESSURE={0.05}
          CURL={6}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={3000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#C4866F"
        />
      </div>

      <Hero />

      <SectionMedos />

      <SectionRedoma />
      

    </main>
  )
}

export default App
