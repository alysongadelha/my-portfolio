'use client';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquareText } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
type Props = {};

const Nav = (props: Props) => {
  return (
    <nav className='fixed bottom-2 z-50 w-full overflow-hidden lg:bottom-8'>
      <div className='container mx-auto'>
        <div className='mx-auto flex h-[96px] w-full max-w-[460px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop-blur-2xl'>
          <ScrollLink
            activeClass='active'
            smooth={true}
            spy={true}
            to='home'
            offset={-200}
            className=' flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
          >
            <BiHomeAlt />
          </ScrollLink>
          <ScrollLink
            activeClass='active'
            smooth={true}
            spy={true}
            to='about'
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
          >
            <BiUser />
          </ScrollLink>
          <ScrollLink
            activeClass='active'
            smooth={true}
            spy={true}
            to='services'
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
          >
            <BsClipboardData />
          </ScrollLink>
          <ScrollLink
            activeClass='active'
            smooth={true}
            spy={true}
            to='work'
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
          >
            <BsBriefcase />
          </ScrollLink>
          <ScrollLink
            activeClass='active'
            smooth={true}
            spy={true}
            to='contact'
            className='flex h-[60px] w-[60px] cursor-pointer items-center justify-center'
          >
            <BsChatSquareText />
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
