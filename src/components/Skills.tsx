import { StaticImageData } from 'next/image';
import Skill from './Skill';
import reactImage from '@public/images/skills/react.png';
import reactNativeImage from '@public/images/skills/reactNative.png';
import nextjsImage from '@public/images/skills/nextjs.png';
import nodejsImage from '@public/images/skills/nodejs.jpeg';
import javascriptImage from '@public/images/skills/javascript.png';
import htmlImage from '@public/images/skills/html.png';
import cssImage from '@public/images/skills/css.png';
import awsImage from '@public/images/skills/aws.png';
import gitImage from '@public/images/skills/git.png';
import typescriptImage from '@public/images/skills/typescript.png';
import tailwindImage from '@public/images/skills/tailwind.png';
import mongoImage from '@public/images/skills/mongo.png';

type Props = {};

type SkillType = {
  name: string;
  percentage: number;
  image: StaticImageData;
};

export const Skills = (props: Props) => {
  const skills: SkillType[] = [
    {
      name: 'Typescript',
      percentage: 98,
      image: typescriptImage,
    },
    {
      name: 'Html',
      percentage: 100,
      image: htmlImage,
    },

    {
      name: 'React',
      percentage: 95,
      image: reactImage,
    },
    {
      name: 'NextJS',
      percentage: 87,
      image: nextjsImage,
    },
    {
      name: 'Css',
      percentage: 92,
      image: cssImage,
    },
    {
      name: 'NodeJS',
      percentage: 55,
      image: nodejsImage,
    },
    {
      name: 'React Native',
      percentage: 25,
      image: reactNativeImage,
    },
    {
      name: 'AWS',
      percentage: 86,
      image: awsImage,
    },

    {
      name: 'Javascript',
      percentage: 97,
      image: javascriptImage,
    },
    {
      name: 'Git',
      percentage: 94,
      image: gitImage,
    },
    {
      name: 'Tailwind',
      percentage: 88,
      image: tailwindImage,
    },
    {
      name: 'MongoDB',
      percentage: 70,
      image: mongoImage,
    },
  ];

  return (
    <div className='mx-auto  flex min-h-[679px] flex-col'>
      <h2 className='h2 text-accent'>Skills.</h2>
      <p className='mb-6'>Hover over a skill for current proficiency</p>
      <div className='grid grid-cols-3 justify-between gap-5'>
        {skills.map((sk, index) => (
          <Skill
            key={sk.name}
            image={sk.image}
            skillValue={sk.percentage}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
