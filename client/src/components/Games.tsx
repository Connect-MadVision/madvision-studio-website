import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

const games = [
  {
    title: "Highway Dash",
    description: "Race through endless highways in this adrenaline-pumping endless runner.",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?auto=format&fit=crop&w=2070&q=80",
    playStoreLink: "https://play.google.com/store"
  },
  {
    title: "Cyber Assault",
    description: "A cyberpunk FPS set in a dystopian future where you fight against corrupted AI.",
    image: "https://images.unsplash.com/photo-1551771685-c367c9127a03?auto=format&fit=crop&w=2070&q=80",
    comingSoon: true
  },
  {
    title: "Neon Riders",
    description: "Race through neon-lit streets in this futuristic racing game.",
    image: "https://images.unsplash.com/photo-1594652634010-275456c808d0?auto=format&fit=crop&w=2070&q=80",
    comingSoon: true
  }
];

function GameCard({ title, description, image, playStoreLink, comingSoon }: {
  title: string;
  description: string;
  image: string;
  playStoreLink?: string;
  comingSoon?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden bg-black border-[#00FF00]/20">
        <div className="relative aspect-video">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
          {comingSoon && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <p className="text-[#00FF00] text-xl font-bold tracking-wider">COMING SOON</p>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-[#00FF00]">{title}</h3>
          <p className="text-white/80 mb-4">{description}</p>
          {playStoreLink ? (
            <Button
              className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white border border-[#FF0000]/50 shadow-lg hover:shadow-[#FF0000]/20 hover:border-[#FF0000] transition-all duration-300 group flex items-center justify-center gap-2"
              onClick={() => window.open(playStoreLink, "_blank")}
            >
              <SiGoogleplay className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span>Download on Google Play</span>
            </Button>
          ) : comingSoon && (
            <Button
              className="w-full bg-[#00FF00]/20 text-[#00FF00] border border-[#00FF00]/50 cursor-not-allowed"
              disabled
            >
              Coming Soon
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Games() {
  return (
    <section id="games" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Games</h2>
          <p className="text-[#00FF00] text-lg">Check out our latest releases and upcoming titles</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GameCard {...game} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
