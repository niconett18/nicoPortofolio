import sumopowerImg from '../assets/web/sumopower.png';
import cloudreamImg from '../assets/web/cloudream.png';
import foreImg from '../assets/web/fore.png';
import g2mchurchImg from '../assets/web/g2mchurch.png';
import todolistImg from '../assets/web/todolist.png';
import izhadwikaryaImg from '../assets/web/izhadwikarya.png';
import primecapitaledgerImg from '../assets/web/primecapitaledger.png';
import type { StaticImageData } from 'next/image';

export type Project = {
  id: number;
  name: string;
  url: string;
  desc: string;
  role: string;
  image: StaticImageData;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Prime Capital Ledger',
    url: 'https://primecapitaledger.site',
    desc: 'Financial platform delivering a sleek, trust-driven interface for capital management.',
    role: 'Web Development',
    image: primecapitaledgerImg,
    imageAlt: 'Prime Capital Ledger website screenshot'
  },
  {
    id: 2,
    name: 'sumopower.id',
    url: 'https://sumopower.id',
    desc: 'Commercial e-commerce platform architected for speed and seamless UX.',
    role: 'Web Development',
    image: sumopowerImg,
    imageAlt: 'Sumopower website screenshot'
  },
  {
    id: 3,
    name: 'cloudream.id',
    url: 'https://cloudream.id',
    desc: 'B2B digital platform offering robust enterprise cloud solutions.',
    role: 'Web Development',
    image: cloudreamImg,
    imageAlt: 'Cloudream website screenshot'
  },
  {
    id: 4,
    name: 'Fore Nico',
    url: 'https://fore-nico.vercel.app',
    desc: 'An innovative web project showcasing modern capabilities and clean architecture.',
    role: 'Web Development',
    image: foreImg,
    imageAlt: 'Fore Nico website screenshot'
  },
  {
    id: 5,
    name: 'G2M Church',
    url: 'https://g2mchurch.vercel.app',
    desc: 'Digital platform engineered for community engagement, offering a seamless user journey.',
    role: 'Web Development',
    image: g2mchurchImg,
    imageAlt: 'G2M Church website screenshot'
  },
  {
    id: 6,
    name: 'To-Do List by Nico',
    url: 'https://todolistbynico.vercel.app',
    desc: 'A high-performance productivity application emphasizing minimalist UX and solid state management.',
    role: 'Web Development',
    image: todolistImg,
    imageAlt: 'To-Do List by Nico website screenshot'
  },
  {
    id: 7,
    name: 'Idzhar Dwi Karya',
    url: 'https://idzhardwikarya.vercel.app',
    desc: 'Corporate landing interface built with precision, delivering optimal performance and aesthetics.',
    role: 'Web Development',
    image: izhadwikaryaImg,
    imageAlt: 'Idzhar Dwi Karya website screenshot'
  }
];
