import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Gamepad2, Palette, Rocket } from "lucide-react";

const services = [
  {
    title: "Game Development",
    description: "Creating engaging mobile games with cutting-edge technology",
    icon: Gamepad2
  },
  {
    title: "Custom Engine Development",
    description: "Building specialized game engines for unique gaming experiences",
    icon: Code2
  },
  {
    title: "Art & Design",
    description: "Crafting stunning visuals and immersive game worlds",
    icon: Palette
  },
  {
    title: "Publishing & Marketing",
    description: "Helping your game reach its target audience effectively",
    icon: Rocket
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-[#00FF00] text-lg">Comprehensive game development solutions</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-[#00FF00]/20 h-full">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-[#FF0000] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-[#00FF00]">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
