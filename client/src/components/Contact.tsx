import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaTwitter, FaLinkedin, FaDiscord, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const contactInfo = [
  {
    title: "Get in Touch",
    email: "hello.madvision@gmail.com",
    description: "For all inquiries, support, and business opportunities"
  }
];

const socialLinks = [
  {
    name: "X (Twitter)",
    icon: FaTwitter,
    url: "https://twitter.com",
    color: "hover:text-blue-400"
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
    color: "hover:text-pink-500"
  },
  {
    name: "Meta",
    icon: FaFacebook,
    url: "https://facebook.com",
    color: "hover:text-blue-600"
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://whatsapp.com",
    color: "hover:text-green-500"
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-500"
  },
  {
    name: "Discord",
    icon: FaDiscord,
    url: "https://discord.gg",
    color: "hover:text-indigo-500"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-[#00FF00] text-lg">Join the Madvision Studio community</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={info.title} className="bg-black/40 border-[#00FF00]/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#00FF00] mb-2">{info.title}</h3>
                  <p className="text-white/80 mb-4">{info.description}</p>
                  <a 
                    href={`mailto:${info.email}`}
                    className="text-white/60 hover:text-[#00FF00] transition-colors duration-200"
                  >
                    {info.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border-[#00FF00]/20 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
                <div className="grid grid-cols-3 gap-6">
                  {socialLinks.map((social) => (
                    <HoverCard key={social.name}>
                      <HoverCardTrigger>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center gap-2 text-white/80 hover:text-[#00FF00] transition-all duration-300 group ${social.color}`}
                        >
                          <social.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-sm font-medium">{social.name}</span>
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="bg-black/95 border-[#00FF00]/20">
                        <p className="text-sm text-white/80">Follow us on {social.name}</p>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}