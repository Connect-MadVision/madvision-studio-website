import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

export function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
    >
      {/* Background with animated gradient and gaming image */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
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
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-[#00FF00] mb-2">Welcome to</h2>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-white">
                  Madvision
                </span>
                <span className="text-[#FF0000]"> Studio</span>
              </h1>
            </motion.div>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Experience our latest release: Highway Dash. Run through endless highways, dodge obstacles, 
              and collect power-ups in this thrilling endless runner game.
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
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2070&q=80"
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