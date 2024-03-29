import HeroAbout from '@components/containers/Hero/hero-about';
import { motion } from 'framer-motion';
// import Image from 'next/image';

// const MotionImg = motion(Image); // don't use that
const Hero: React.FC = () => (
  <section id="hero" className="container rounded-md px-4 flex items-center lg:flex-row flex-col lg:py-20 py-16">
    <motion.img
      src="/avatar.png"
      alt="Profile photo"
      width={125}
      height={125}
      className="mx-5 cursor-pointer shadow-lg rounded-full"
      whileHover={{ translateY: '-10px' }}
    />
    <HeroAbout />
  </section>
);

export default Hero;
