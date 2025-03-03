import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center pt-16 relative"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              Highway
              <span className="text-[#FF0000]"> Dash</span>
            </h1>
            <p className="text-xl text-[#00FF00] mb-8">
              Race through endless highways, dodge obstacles, and collect power-ups in this thrilling endless runner game.
            </p>
            <Button
              size="lg"
              className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white"
              onClick={() => window.open("https://play.google.com/store", "_blank")}
            >
              Play Now
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 to-[#00FF00]/20 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=2070&q=80"
              alt="Highway Dash Gameplay"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
