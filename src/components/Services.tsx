'use client';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { Skills } from './Skills';

interface Service {
  name: string;
  description: string;
  link: string;
}
const services: Service[] = [
  {
    name: 'UI/UX Design',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nemo consequuntur nostrum iste officia, doloribus doloremque quia est repudiandae amet.',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nemo consequuntur nostrum iste officia, doloribus doloremque quia est repudiandae amet.',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nemo consequuntur nostrum iste officia, doloribus doloremque quia est repudiandae amet.',
    link: 'Learn more',
  },
  {
    name: 'Product Branding',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente nemo consequuntur nostrum iste officia, doloribus doloremque quia est repudiandae amet.',
    link: 'Learn more',
  },
];
type Props = {};

const Services = (props: Props) => {
  return (
    <section id='services' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-20'>
          {/* Text and Image */}
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='mb-12 flex-1 rounded-full  bg-contain bg-no-repeat mix-blend-lighten lg:mb-0 lg:bg-services lg:bg-bottom'
          >
            <h2 className='h2 mb-6 text-accent'>What I do.</h2>
            <h3 className='h3 mb-16 max-w-[455px]'>
              I&apos;m a Front-end Developer with over 2 years of experience
              international market
            </h3>
            <button className='btn btn-sm'>
              <a
                href='https://github.com/alysongadelha?tab=repositories'
                target='_blank'
              >
                See my work
              </a>
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn({ direction: 'left', delay: 0.5 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            {/* <div>
              {services.map(({ name, description, link }: Service, index) => (
                <div
                  className='mb-[38px] flex h-[146px] border-b border-white/20'
                  key={index}
                >
                  <div className='max-w-[476px]'>
                    <h4 className='mb-6 font-primary text-[20px] font-semibold tracking-wide'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight'>
                      {description}
                    </p>
                  </div>
                  <div className='flex flex-1 flex-col items-end'>
                    <a
                      href='#'
                      className='btn mb-[42px] flex h-9 w-9 items-center justify-center'
                    >
                      <BsArrowUpRight />
                    </a>
                    <a href='#' className='text-gradient text-sm'>
                      {link}
                    </a>
                  </div>
                </div>
              ))}
            </div> */}
            <Skills />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
