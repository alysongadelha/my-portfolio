'use client';
import Avatar from '@public/images/avatar.png';
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FadeInProps, fadeIn } from '@/utils/variants';
import Image from 'next/image';

type Props = {};

const Banner = (props: Props) => {
  const fadeInProps: FadeInProps = {
    direction: 'up',
    delay: 0.3,
  };

  return (
    <section
      id='home'
      className='flex min-h-[85vh] items-center lg:min-h-[78hv]'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn(fadeInProps)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-2 text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              ALYSON <span>MARQUES</span>
            </motion.h1>
            <motion.div
              variants={fadeIn(fadeInProps)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[60px]'
            >
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation
                sequence={['Developer', 2000, 'Gamer', 2000, 'Father', 2000]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
                className='text-accent'
              />
            </motion.div>
            <motion.p
              variants={fadeIn({ direction: 'up', delay: 0.5 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mz-w-lg mx-auto mb-8 lg:mx-0'
            >
              Building the future one line of code at a time.
            </motion.p>
            <motion.div
              variants={fadeIn({ direction: 'up', delay: 0.6 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a
                href='https://github.com/alysongadelha?tab=repositories'
                target='_blank'
                className='text-gradient btn-link'
              >
                My Portfolio
              </a>
            </motion.div>
            {/* Socials */}
            <motion.div
              variants={fadeIn({ direction: 'up', delay: 0.7 })}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mx-auto flex max-w-max gap-x-6 text-[20px] lg:mx-0'
            >
              <a
                href='https://www.youtube.com/channel/UCEydTg0ZI-ByCfAhko30XVw'
                target='_blank'
              >
                <FaYoutube />
              </a>
              <a href='https://github.com/alysongadelha' target='_blank'>
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/alyson-gadelha-337743a2/'
                target='_blank'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://www.instagram.com/alysonmarques/'
                target='_blank'
              >
                <FaInstagram />
              </a>
              <a
                href='https://www.facebook.com/alyson.marques.54'
                target='_blank'
              >
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn({ direction: 'down', delay: 0.5 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden max-w-[320px] flex-1 justify-center mix-blend-lighten lg:flex lg:max-w-[482px]'
          >
            <Image
              src={Avatar}
              alt='A picture of Alyson Marques'
              height={516}
              className='rounded-full'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
