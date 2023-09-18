
import ecommerce from "@/public/ecommerce.png";
import mailbox from "@/public/mailbox-client-full.png";
import mailboxMobile from "@/public/mailbox-mobile.png";
import pokedex from "@/public/pokedex-full.png";
import pokedexMobile from "@/public/pokedex-mobile.png"
import MALApp from "@/public/MAL-app.png";
import MALMobile from "@/public/MAL-mobile.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    index: 1,
    title: "Pokedex",
    description:
      "An interactive app/game to catch and learn interesting information about different pokemons.",
    tags: ["React", "Poke API", "Firebase", "Tailwind", "Context API"],
    imageUrl: pokedex,
    mobileImg: pokedexMobile,
    source_code_link: 'https://github.com/abhishek1886/pokedex',
    website_link: 'https://pokedex-abhishek1886.vercel.app/'
  },
  {
    index: 2,
    title: "MAL Playlist",
    description:
      "An App to access user's Youtube and MyAnimeList account using OAuth 2.0 authentication and create Youtube playlist of opening themes of user's watched animelist.",
    tags: ["Next.js", "OAuth 2.0", "Youtube API", "MyAnimeList API", "Tailwind"],
    imageUrl: MALApp,
    mobileImg: MALMobile,
    source_code_link: 'https://github.com/abhishek1886/MAL-App',
    website_link: 'https://www.youtube.com/playlist?list=PLcqdV5yxw0l8PzaUlSKl79jyft3OZlnoo'
  },
  {
    index: 3,
    title: "Mail Box Client",
    description:
      "An App to send and recieve mails in realtime.",
    tags: ["React", "Redux", "Redux Toolkit", "React Bootstrap", "Custom Hooks", ],
    imageUrl: mailbox,
    mobileImg: mailboxMobile,
    source_code_link: 'https://github.com/abhishek1886/mail-box-client',
    website_link: 'https://mail-box-client-six.vercel.app/'
  },
  {
    index: 4,
    title: "Ecomerce Website",
    description:
      "An ecommerce website to to sell band masic, display tours schedule and band information.",
    tags: ["React", "Redux", "Redux Toolkit", "React Bootstrap"],
    imageUrl: ecommerce,
    mobileImg: '',
    source_code_link: 'https://github.com/abhishek1886/ecommerce',
    website_link: ''
  },
{
    index: 5,
    title: "Expense Tracker",
    description:
      "a feature rich app to facilitate seamless tracking experience to users.",
    tags: ["React", "Redux", "Redux Toolkit", "React Bootstrap", "Firebase authentication"],
    imageUrl: '',
    mobileImg: '',
    source_code_link: '',
    website_link: ''
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "C++",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Bootstrap",
  "Tailwind",
  "Firebase",
  "MongoDB",
  "Redux",
  "Redux Toolkit",
  "Context API",
  "REST API",
  "OAuth 2.0, JWT",
  "Git",
  "Postman",
  "Webpack",
  "Framer Motion",
] as const;