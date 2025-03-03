import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { GameCard } from "@/components/GameCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  SiGithub,
  SiDiscord,
  SiMeta,
  SiInstagram
} from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <Hero />

      <section id="games" className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-[#00FF00]">Our Games</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection delay={0.1}>
              <GameCard
                title="Highway Dash"
                description="Race through endless highways in this thrilling endless runner."
                image="https://images.unsplash.com/photo-1614294148960-9aa740632a87"
                playStoreLink="https://play.google.com/store"
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GameCard
                title="Cyber Assault"
                description="A futuristic combat game set in a dystopian cyberpunk world. Get ready for intense action!"
                image="https://images.unsplash.com/photo-1542751371-adc38448a05e"
                comingSoon
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <GameCard
                title="Neon Riders"
                description="Race through neon-lit streets in this high-speed arcade racing experience."
                image="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
                comingSoon
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Separator className="bg-[#00FF00]/20" />

      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-[#00FF00]">About Madvision Studio</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
                  alt="Madvision Studio Office"
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-white/80">
                  We are a passionate team of game developers dedicated to creating engaging and innovative gaming experiences for mobile and PC platforms.
                </p>
                <p className="text-lg text-white/80">
                  Founded in 2020, Madvision Studio has been pushing the boundaries of what's possible in mobile gaming, with our flagship title Highway Dash leading the way.
                </p>
                <p className="text-lg text-white/80">
                  Our mission is to deliver high-quality games that bring joy and excitement to players around the world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Separator className="bg-[#00FF00]/20" />

      <section id="services" className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-[#00FF00]">Our Services</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-lg bg-black border border-[#00FF00]/20">
                <h3 className="text-2xl font-bold mb-4 text-[#FF0000]">3D Modeling</h3>
                <p className="text-white/80 mb-4">
                  Professional 3D modeling services for games, including character design, environment assets, and props. We use industry-standard tools to create high-quality, optimized 3D models.
                </p>
                <ul className="text-[#00FF00] space-y-2">
                  <li>• Character Modeling</li>
                  <li>• Environment Design</li>
                  <li>• Props and Assets</li>
                  <li>• Texture and Materials</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-lg bg-black border border-[#00FF00]/20">
                <h3 className="text-2xl font-bold mb-4 text-[#FF0000]">Game Development</h3>
                <p className="text-white/80 mb-4">
                  Full-cycle game development services for mobile and PC platforms. From concept to launch, we handle every aspect of bringing your game idea to life.
                </p>
                <ul className="text-[#00FF00] space-y-2">
                  <li>• Mobile Game Development</li>
                  <li>• PC Game Development</li>
                  <li>• Cross-platform Solutions</li>
                  <li>• Game Testing and QA</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="p-6 rounded-lg bg-black border border-[#00FF00]/20">
                <h3 className="text-2xl font-bold mb-4 text-[#FF0000]">Asset Creation</h3>
                <p className="text-white/80 mb-4">
                  Custom asset creation services to enhance your game's visual and audio experience. We create everything from UI elements to sound effects.
                </p>
                <ul className="text-[#00FF00] space-y-2">
                  <li>• UI/UX Design</li>
                  <li>• Sound Effects</li>
                  <li>• Animations</li>
                  <li>• Visual Effects</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Separator className="bg-[#00FF00]/20" />

      <section id="contact" className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-[#00FF00]">Contact Us</h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center space-y-8">
                <h3 className="text-2xl font-bold text-white">Connect With Us</h3>
                <div className="flex space-x-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#1DA1F2] text-white"
                    onClick={() => window.open("https://github.com", "_blank")}
                  >
                    <SiGithub className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#5865F2] text-white"
                    onClick={() => window.open("https://discord.com", "_blank")}
                  >
                    <SiDiscord className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#1877F2] text-white"
                    onClick={() => window.open("https://facebook.com", "_blank")}
                  >
                    <SiMeta className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-[#E4405F] text-white"
                    onClick={() => window.open("https://instagram.com", "_blank")}
                  >
                    <SiInstagram className="h-8 w-8" />
                  </Button>
                </div>
                <p className="text-center text-white/80 mt-6">
                  Follow us on social media for the latest updates, behind-the-scenes content, and community events!
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-bold text-white text-center lg:text-left">Get in Touch</h3>
                <p className="text-white/80 mb-4">
                  Have questions or feedback? We'd love to hear from you! Reach out to us at:
                </p>
                <div className="space-y-2">
                  <p className="text-[#00FF00]">📧 Email:</p>
                  <p className="text-white/80">contact@madvisionstudio.com</p>
                  <p className="text-[#00FF00] mt-4">🏢 Business Inquiries:</p>
                  <p className="text-white/80">business@madvisionstudio.com</p>
                  <p className="text-[#00FF00] mt-4">🎮 Support:</p>
                  <p className="text-white/80">support@madvisionstudio.com</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}