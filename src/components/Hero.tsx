import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  experience: number;
}

export const Hero = ({ name, title, tagline, experience }: HeroProps) => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Animated Background Elements - Smoother and more integrated */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-livekit-blue/15 blur-[140px] rounded-full mix-blend-screen"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
          className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-livekit-cyan/10 blur-[120px] rounded-full mix-blend-screen"
        />
      </div>

      {/* LiveKit-style full hero animated background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(0, 208, 255, 0.22) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-livekit-dark/30 via-transparent to-livekit-dark/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,208,255,0.12),transparent_60%)]" />

        <motion.div
          animate={{
            left: ["8%", "75%", "42%", "12%", "8%"],
            top: ["12%", "30%", "65%", "45%", "12%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-3 w-3 rounded-full bg-livekit-cyan shadow-[0_0_20px_5px_rgba(0,208,255,0.8)]"
        />

        <motion.div
          animate={{
            left: ["78%", "24%", "62%", "82%", "78%"],
            top: ["20%", "52%", "78%", "28%", "20%"],
          }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-2.5 w-2.5 rounded-full bg-livekit-blue shadow-[0_0_16px_4px_rgba(0,165,255,0.75)]"
        />

      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="outline" className="px-4 py-1.5 border-livekit-blue/30 bg-livekit-blue/5 text-livekit-blue text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-livekit-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-livekit-cyan"></span>
            </span>
            Available for new projects
          </Badge>
        </motion.div>

        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]"
          >
            <span className="text-livekit-cyan block mb-2">{name}</span>
            <span className="text-foreground inline-block">{title}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            {tagline}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Button size="lg" className="bg-livekit-blue hover:bg-livekit-blue/90 text-white px-8 h-14 rounded-full text-lg group" asChild>
            <a href="https://www.linkedin.com/in/lenin-agc" target="_blank">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <div className="flex items-center gap-2 px-2">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-livekit-blue/10 hover:text-livekit-blue transition-colors" asChild>
              <a href="https://github.com/IGUNUBLUE" target="_blank" title="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-livekit-blue/10 hover:text-livekit-blue transition-colors" asChild>
              <a href="https://www.linkedin.com/in/lenin-agc" target="_blank" title="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full hover:bg-livekit-blue/10 hover:text-livekit-blue transition-colors" asChild>
              <a href="mailto:lenin.agc@gmail.com" title="Email">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
