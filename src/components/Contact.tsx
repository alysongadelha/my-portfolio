'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { useState } from 'react';
import { type } from 'os';

type Props = {};

type FormProps = {
  name: string;
  email: string;
  message: string;
};
const Contact = (props: Props) => {
  const [loading, setLoading] = useState<any>(false);
  const [form, setForm] = useState<FormProps>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: any) => {
    const value = event.target.value;
    setForm({
      ...form,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event?.preventDefault();

    setLoading(true);

    const response = await fetch('/api/form-submit', {
      body: JSON.stringify(form),
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    const content = await response.json();

    if (content.status === 200) {
      alert('Envio realizado com sucesso');
    }
    setLoading(false);
  };

  return (
    <section id='contact' className='lg:section py-16'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 items-center justify-start'
          >
            <div>
              <h4 className='mb-2 text-xl font-medium uppercase tracking-wide text-accent'>
                Get in touch
              </h4>
              <h2 className='mb-12 text-[45px] leading-none lg:text-[90px] '>
                Let&apos;s work <br /> together
              </h2>
            </div>
          </motion.div>
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn({ direction: 'left', delay: 0.3 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 flex-col items-start gap-y-6 rounded-2xl border p-6 pb-24'
          >
            <input
              className='w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent'
              type='text'
              name='name'
              placeholder='Your name'
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              className='w-full border-b bg-transparent py-3 outline-none transition-all placeholder:text-white focus:border-accent'
              type='email'
              name='email'
              placeholder='Your email'
              required
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              className='w-full resize-none border-b bg-transparent py-12 outline-none transition-all placeholder:text-white focus:border-accent'
              name='message'
              placeholder='Your message'
              required
              value={form.message}
              onChange={handleChange}
            />
            <button
              type='submit'
              disabled={loading}
              className={`btn btn-lg ${
                loading ? 'cursor-wait' : 'cursor-pointer'
              }`}
            >
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
