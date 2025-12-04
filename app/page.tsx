"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroIllustration from "../public/hero-illustration.svg";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/get-started");
  };

  const handleLearnMore = () => {
    router.push("/learn-more");
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center text-center bg-gray-100 px-6">

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-6"
        style={{ color: "#7B2CBF", fontFamily: "Science Gothic, sans-serif" }}
      >
        HireSenseAI
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed"
      >
        AI-powered interviewing assistant that helps companies hire faster, smarter, 
        and more fairly — with real-time evaluation, insights, and automation.
      </motion.p>

      {/* HERO IMAGE (CENTERED) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex justify-center mb-10"
      >
        <Image
          src={HeroIllustration}
          alt="Hero Illustration"
          width={350}
          height={350}
        />
      </motion.div>

      {/* BUTTONS CENTERED */}
      <div className="flex gap-6">
        <motion.button
          onClick={handleGetStarted}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="px-8 py-3 bg-purple-600 text-white text-lg rounded-xl hover:bg-purple-700 transition shadow-md"
        >
          Get Started
        </motion.button>

        <motion.button
          onClick={handleLearnMore}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="px-8 py-3 border border-purple-600 text-purple-600 text-lg rounded-xl hover:bg-purple-50 transition shadow-md"
        >
          Learn More
        </motion.button>
      </div>

    </main>
  );
}
