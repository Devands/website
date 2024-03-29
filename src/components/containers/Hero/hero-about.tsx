import author from '@config/author-meta.json';
import AboutText from '@config/about-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

const HeroAbout: React.FC = () => (
  <div className="w-full lg:pr-[300px]">
    <header className="text-blue-500 text-3xl md:text-4xl font-semibold text-center lg:text-left font-luckiest-guy">
      Web developer
    </header>
    <p className="text-md text-md text-gray-800 dark:text-blueGray-50 text-center lg:text-left">
      <AboutText />
    </p>

    <div className="flex justify-center lg:justify-start">
      {author.socials.map((social, index) => (
        <motion.a
          // whileHover={{ scale: 1.5 }}
          whileHover={{ y: '-2px' }}
          href={`/${social.icon[1]}`}
          className="mx-2 my-3"
          key={index.toString()}
          style={{ color: social.color }}
          target="_blank"
        >
          <FontAwesomeIcon icon={social.icon as IconProp} />
        </motion.a>
      ))}
    </div>
  </div>
);

export default HeroAbout;
