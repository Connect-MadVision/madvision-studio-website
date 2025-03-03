import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 to-[#00FF00]/20 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2070&q=80"
              alt="About Madvision Studio"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">About Madvision Studio</h2>
            <p className="text-white/80 mb-6">
              Founded by passionate gamers, Madvision Studio is dedicated to creating immersive and exciting gaming experiences for both mobile and PC platforms. Our team combines creativity with technical expertise to deliver games that push the boundaries of entertainment across multiple platforms.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#00FF00] text-4xl font-bold mb-2">5+</h3>
                <p className="text-white/60">Years Experience</p>
              </div>
              <div>
                <h3 className="text-[#00FF00] text-4xl font-bold mb-2">1M+</h3>
                <p className="text-white/60">Downloads</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}