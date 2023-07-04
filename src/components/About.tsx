'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
type Props = {};

const About = (props: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex h-screen flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* Image */}
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className=' hidden flex-1 overflow-hidden rounded-lg bg-contain bg-top bg-no-repeat mix-blend-lighten lg:flex lg:h-[640px] lg:bg-about'
          ></motion.div>
          {/* Text */}
          <motion.div
            variants={fadeIn({ direction: 'left', delay: 0.5 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I&apos;m a Front-end Developer with over 2 years of market
              experience international
            </h3>
            <p className='mb-6'>
              Despite of being new to the area, my experience and responsibility
              with projects gave me the necessary to go much further.
            </p>
            {/* Stats */}
            <div className='mb-12 flex gap-x-6 lg:gap-x-10'>
              <div>
                <div className='text-gradient mb-2 pt-1 font-tertiary text-[40px]'>
                  {inView ? <CountUp start={0} end={3} duration={7} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-gradient mb-2 pt-1 font-tertiary text-[40px]'>
                  {inView ? <CountUp start={0} end={107} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className='text-gradient mb-2 pt-1 font-tertiary text-[40px]'>
                  {inView ? <CountUp start={0} end={209} duration={3} /> : null}
                  {/* k+ */}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> Clients
                </div>
              </div>
            </div>
            <div className='flex items-center gap-x-8'>
              <button className='btn btn-lg'>Contact me</button>
              <a
                href='https://github.com/alysongadelha?tab=repositories'
                target='_blank'
                className='text-gradient btn-link'
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
