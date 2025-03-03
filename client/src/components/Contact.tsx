import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

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
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-[#00FF00] text-lg">Get in touch with our team</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black border-[#00FF00]/20">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-black/50 border-[#00FF00]/20 text-white"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-black/50 border-[#00FF00]/20 text-white"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="bg-black/50 border-[#00FF00]/20 text-white min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-white/80 mb-6">
                Have questions about our games or services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Email Us</h4>
              <div className="space-y-2 text-white/80">
                <p>General: contact@madvisionstudio.com</p>
                <p>Business: business@madvisionstudio.com</p>
                <p>Support: support@madvisionstudio.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00FF00] hover:text-[#00FF00]/80"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00FF00] hover:text-[#00FF00]/80"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00FF00] hover:text-[#00FF00]/80"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}