'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import Img1 from '@public/images/portfolio-drlysn1.png';
import Img2 from '@public/images/portfolio-drlysn2.png';
import Img3 from '@public/images/portfolio-drlysn3.png';
import Image from 'next/image';

type Props = {};

const Work = (props: Props) => {
  return (
    <section id='work' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-x-10 lg:flex-row'>
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.2 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='mb-10 flex flex-1 flex-col gap-y-12 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='mb-16 max-w-sm'>
                Here you can see examples of projects built with quite a
                professionalism and with the latest technologies.
              </p>
              <button className='btn btn-sm'>
                <a
                  href='https://github.com/alysongadelha?tab=repositories'
                  target='_blank'
                >
                  View all projects
                </a>
              </button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden rounded-xl border-2 border-white/50'>
              {/* Overlay */}
              <div className='absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <Image
                className='transition-all duration-500 group-hover:scale-125'
                src={Img1}
                alt=''
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24'>
                <span className='text-gradient'>NextJs</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14'>
                <span className='text-3xl text-white'>
                  Photography Portfolio
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: 'left', delay: 0.2 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden rounded-xl border-2 border-white/50'>
              {/* Overlay */}
              <div className='absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <Image
                className='transition-all duration-500 group-hover:scale-125'
                src={Img2}
                alt=''
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24'>
                <span className='text-gradient'>
                  NextJS/Fastify/ReactNative
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14'>
                <span className='text-3xl text-white'>Spacetime</span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden rounded-xl border-2 border-white/50'>
              {/* Overlay */}
              <div className='absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70'></div>
              {/* img */}
              <Image
                className='transition-all duration-500 group-hover:scale-125'
                src={Img3}
                height={319}
                alt=''
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 z-50 transition-all duration-500 group-hover:bottom-24'>
                <span className='text-gradient'>React</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-14'>
                <span className='text-3xl text-white'>Dogs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
