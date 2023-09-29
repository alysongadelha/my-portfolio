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
                See my works
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
            <Skills />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
