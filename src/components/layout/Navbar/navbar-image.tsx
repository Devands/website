import Link from 'next/link';
import { motion } from 'framer-motion';

const NavbarImage = () => (
  <div>
    <Link href="/">
      <motion.img
        className="inline-block rounded-full mx-4 cursor-pointer"
        src="/avatar.png"
        alt="healthpack's profile"
        draggable={false}
        width={30}
        height={30}
      />
    </Link>
  </div>
);
export default NavbarImage;
