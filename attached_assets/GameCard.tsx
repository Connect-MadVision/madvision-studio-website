import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiGoogleplay } from "react-icons/si";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  playStoreLink?: string;
  comingSoon?: boolean;
}

export function GameCard({ title, description, image, playStoreLink, comingSoon }: GameCardProps) {
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