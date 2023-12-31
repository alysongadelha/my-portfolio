import Logo from '@public/images/drlysn-logo-slim.png';
import Image from 'next/image';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <a href='#' className='just-shadow rounded-md p-1'>
            <Image
              src={Logo}
              alt='image-logo'
              className='just-shadow rounded-md'
            />
          </a>
          <button className='btn btn-sm'>
            <a href='https://my-blog-topaz-seven.vercel.app/' target='_blank'>
              Come visit my blog
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
