import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import HighwayDashIcon from "../../../attached_assets/HIGHWAY DASH Icon.png";

const games = [
  {
    title: "Highway Dash",
    description: "Race through endless highways in this adrenaline-pumping endless runner.",
    image: HighwayDashIcon,
    playStoreLink: "https://play.google.com/store/apps/details?id=com.nexgenstudios.highwaydash&pcampaignid=web_share",
    appStoreLink: "https://apps.apple.com/us/app/highway-dash/id123456789" // Replace with actual App Store link
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
    image: "https://images.unsplash.com/photo-1592155931584-901ac15763e3?auto=format&fit=crop&w=2070&q=80",
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
              <Card className="bg-black border-[#00FF00]/20 overflow-hidden hover:border-[#00FF00]/40 transition-all duration-300 h-full">
                <div className="relative pt-[100%] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {game.comingSoon && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-[#00FF00] font-bold text-xl">Coming Soon</span>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#00FF00]">{game.title}</h3>
                  <p className="text-white/80 mb-4">{game.description}</p>
                  {!game.comingSoon && (
                    <div className="space-y-2">
                      {game.playStoreLink && (
                        <Button
                          className="w-full bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-semibold group relative overflow-hidden"
                          onClick={() => window.open(game.playStoreLink, "_blank")}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                          <div className="flex items-center justify-center gap-2">
                            <SiGoogleplay className="h-5 w-5" />
                            <span>Get it on Play Store</span>
                          </div>
                        </Button>
                      )}
                      {game.appStoreLink && (
                        <Button
                          className="w-full bg-[#007AFF] hover:bg-[#007AFF]/90 text-white font-semibold group relative overflow-hidden"
                          onClick={() => window.open(game.appStoreLink, "_blank")}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                          <div className="flex items-center justify-center gap-2">
                            <SiAppstore className="h-5 w-5" />
                            <span>Download on App Store</span>
                          </div>
                        </Button>
                      )}
                    </div>
                  )}
                  {game.comingSoon && (
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
          ))}
        </div>
      </div>
    </section>
  );
}