import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

export function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
    >
      {/* Background with animated gradient */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 0, 0.15), transparent 70%)',
        }}
      />

      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-[#00FF00]/20 to-transparent"
            style={{
              top: `${i * 5}%`,
              animation: `moveLines ${3 + i % 2}s linear infinite`,
              opacity: 0.5 - (i / 40),
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-white">
                Highway
              </span>
              <span className="text-[#FF0000]"> Dash</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Race through endless highways, dodge obstacles, and collect power-ups in this 
              thrilling endless runner game.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-semibold group relative overflow-hidden"
                onClick={() => window.open("https://play.google.com/store", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <div className="flex items-center gap-2">
                  <SiGoogleplay className="w-5 h-5" />
                  <span>Download Now</span>
                </div>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Game preview */}
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.2)] border border-[#00FF00]/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=2070&q=80"
                alt="Highway Dash Gameplay"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: ['-10px', '10px', '-10px'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-[#00FF00]/20 to-[#FF0000]/20 blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}