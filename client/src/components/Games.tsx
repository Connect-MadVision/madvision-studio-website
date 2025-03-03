import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";
import HighwayDashIcon from "../../../attached_assets/HIGHWAY DASH Icon.png";

const games = [
  {
    title: "Highway Dash",
    description: "Race through endless highways in this adrenaline-pumping endless runner.",
    image: HighwayDashIcon,
    playStoreLink: "https://play.google.com/store"
  },
  {
    title: "Zombie Shooter Survival",
    description: "Fight for survival in a post-apocalyptic world overrun by the undead. Strategic shooting meets survival horror.",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=2070&q=80",
    comingSoon: true
  },
  {
    title: "Jungle Run 3D",
    description: "Navigate through treacherous temples and ancient ruins in this thrilling endless runner.",
    image: "https://images.unsplash.com/photo-1538485399081-7c8ed0346d9d?auto=format&fit=crop&w=2070&q=80",
    comingSoon: true
  }
];

export function Games() {
  return (
    <section id="games" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Games</h2>
          <p className="text-[#00FF00] text-lg">Experience our latest creations</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-[#00FF00]/20 overflow-hidden hover:border-[#00FF00]/40 transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  />
                  {game.comingSoon && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold text-xl">Coming Soon</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#00FF00]">{game.title}</h3>
                  <p className="text-white/80 mb-4">{game.description}</p>
                  {game.playStoreLink && (
                    <Button
                      className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-semibold"
                      onClick={() => window.open(game.playStoreLink, "_blank")}
                    >
                      <SiGoogleplay className="mr-2 h-5 w-5" />
                      Get it on Play Store
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GameCard({ title, description, image, playStoreLink, comingSoon }: {
  title: string;
  description: string;
  image: string | any;
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