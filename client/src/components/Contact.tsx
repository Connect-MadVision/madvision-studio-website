import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaTwitter, FaLinkedin, FaDiscord, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

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
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
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
          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border-[#00FF00]/20 backdrop-blur-sm overflow-hidden relative group">
              <CardContent className="p-8">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#00FF00]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <h3 className="text-2xl font-bold text-white mb-6 relative">Get in Touch</h3>
                <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                  Have questions about our games? Want to collaborate? Or just want to say hello? 
                  We'd love to hear from you! Reach out to us anytime.
                </p>

                <Button
                  className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-semibold group relative overflow-hidden"
                  onClick={() => window.location.href = 'mailto:hello.madvision@gmail.com'}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>hello.madvision@gmail.com</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/40 border-[#00FF00]/20 backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Follow Our Journey</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                  {socialLinks.map((social) => (
                    <HoverCard key={social.name}>
                      <HoverCardTrigger>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col items-center gap-3 text-white/80 hover:text-[#00FF00] transition-all duration-300 group ${social.color}`}
                        >
                          <div className="p-4 rounded-full bg-black/50 border border-[#00FF00]/10 group-hover:border-[#00FF00]/30 transition-colors duration-300">
                            <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <span className="text-sm font-medium">{social.name}</span>
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent className="bg-black/95 border-[#00FF00]/20">
                        <p className="text-sm text-white/80">Connect with us on {social.name}</p>
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