import { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { StaticImageData } from 'next/image';

type Props = {
  skillValue: number;
  index: number;
  image: StaticImageData;
};

const Skill = ({ skillValue = 100, image, index }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = (delay: any) => ({
    hidden: {
      opacity: 0,
      scale: 0.2,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: +`${delay * 0.2}`,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  });

  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        variants={variants(index)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        src={image?.src}
        className='h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-28 md:w-28 xl:h-32 xl:w-32'
      />
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='absolute z-0 h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-gray-900/80 group-hover:opacity-80 md:h-28 md:w-28 xl:h-32 xl:w-32'
      >
        <div className='flex h-full items-center justify-center'>
          <p className=' text-gradient mb-2 pt-1 font-tertiary text-[40px] opacity-100'>
            {isHovered ? (
              <CountUp start={0} end={skillValue} duration={2} />
            ) : null}
            {'%'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
