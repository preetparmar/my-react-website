// Importing Images
import dancerImage from "../images/about/dance.jpg";
import gamerImage from "../images/about/gamer.jpg";
import funkoPopImage from "../images/about/funkopop.jpg";
import animeImage from "../images/about/anime.png";
import tvImage from "../images/about/tv-shows.jpg";
import moreImage from "../images/about/more-about-me.jpg";

import dance01 from "../images/about/dance/cover.jpg";
import dance02 from "../images/about/dance/pose.jpg";
import dance03 from "../images/about/dance/dance-step.jpg";
import dance04 from "../images/about/dance/jumping.jpg";
import dance05 from "../images/about/dance/low.jpg";
import dance06 from "../images/about/dance/group-dance.jpg";
import dance07 from "../images/about/dance/flash-mob.jpg";

import game01 from "../images/about/gamer/valorant.jpg";
import game02 from "../images/about/gamer/batman.jpg";
import game03 from "../images/about/gamer/cyberpunk.jpg";
import game04 from "../images/about/gamer/overcooked.jpg";
import game05 from "../images/about/gamer/apexlegends.jpg";
import game06 from "../images/about/gamer/tombraider.jpg";
import game07 from "../images/about/gamer/csgo.jpg";
import game08 from "../images/about/gamer/dyinglight.jpg";
import game09 from "../images/about/gamer/godofwar.jpg";
import game10 from "../images/about/gamer/watchdogs.jpg";

import funko01 from "../images/about/funko/pop-1.jpg";
import funko02 from "../images/about/funko/pop-2.jpg";
import funko03 from "../images/about/funko/pop-3.jpg";
import funko04 from "../images/about/funko/pop-4.jpg";
import funko05 from "../images/about/funko/pop-5.jpg";
import funko06 from "../images/about/funko/pop-6.jpg";
import funko07 from "../images/about/funko/pop-7.jpg";
import funko08 from "../images/about/funko/pop-8.jpg";
import funko09 from "../images/about/funko/pop-9.jpg";
import funko10 from "../images/about/funko/pop-10.jpg";

import anime01 from "../images/about/anime/dragon-ball.jpg";
import anime02 from "../images/about/anime/naruto.jpg";
import anime03 from "../images/about/anime/death-note.jpg";
import anime04 from "../images/about/anime/demon-slayer.jpg";
import anime05 from "../images/about/anime/aot.jpg";
import anime06 from "../images/about/anime/jujutsu-kaisen.jpg";

import tv01 from "../images/about/tv/bbg.jpg";
import tv02 from "../images/about/tv/supernatural.jpg";
import tv03 from "../images/about/tv/batman.jpg";
import tv04 from "../images/about/tv/flash.jpg";
import tv05 from "../images/about/tv/lie-to-me.jpg";
import tv06 from "../images/about/tv/nancy-drew.jpg";

import more01 from "../images/about/more/hey.jpg";
import more02 from "../images/about/more/birthday.jpg";
import more03 from "../images/about/more/rann.jpg";
import more04 from "../images/about/more/new-york.jpg";
import more05 from "../images/about/more/boston-street.jpg";
import more06 from "../images/about/more/kayak.jpg";
import more07 from "../images/about/more/beach.jpg";

// AboutCards
const AboutCardsData = [
  {
    key: "dancer",
    title: "Dancer",
    image: dancerImage,
  },
  {
    key: "gamer",
    title: "Gamer",
    image: gamerImage,
  },
  {
    key: "funko",
    title: "Funko Pop Collector",
    image: funkoPopImage,
  },
  {
    key: "anime",
    title: "Anime Fan",
    image: animeImage,
  },
  {
    key: "tv",
    title: "TV Shows",
    image: tvImage,
  },
  {
    key: "more",
    title: "More about me",
    image: moreImage,
  },
];

const ModalData = {
  dancer: {
    title: "Dancer",
    thought: "Dance is dreaming with your feet",
    detail:
      "I am proud to say that I owned my own Dance: Anybody Can Dance Academy where I taught more than 200 students and choreographed multiple events. I also lead a team of dancers in one of the regional movie. During my undergradutaion, I worked as a dance instructor for 3 years and did more than 50 live shows. During my gradutation, I started my own dance group called Patakhas and choregrophed various dances. The dance forms I love are Hip-Hop, Salsa, Bollywood, Break Dance and Garba.",
    images: [dance01, dance02, dance03, dance04, dance05, dance06, dance07],
  },

  gamer: {
    title: "Gamer",
    thought: "What doesn't kill me, gives me EXP",
    detail:
      "Oh I love gaming... I am a proud owner of a Gaming PC where I spend majority of my time. If I am not gaming on it then I am learning new stuff on it. For some reason, I could never enjoy playing on a console, keyboard and mouse just speaks to me differently than a controller. I do have a YouTube gaming channel where I try to upload videos, if I get the time to edit the videos. I would prefer spending that time enjoying the game or learning something new. Here are some of the titles I love.",
    images: [
      game01,
      game02,
      game03,
      game04,
      game05,
      game06,
      game07,
      game08,
      game09,
      game10,
    ],
  },

  funko: {
    title: "Funko Pop Collector",
    thought: "I'm not obsessed, I'm a collector",
    detail:
      "The fact that there are pop figures for everything is so fascinating and exciting. How can you not buy these things. Here's a little peak in my ever growing collection...",
    images: [
      funko01,
      funko02,
      funko03,
      funko04,
      funko05,
      funko06,
      funko07,
      funko08,
      funko09,
      funko10,
    ],
  },

  anime: {
    title: "Anime Fan",
    thought: "",
    detail:
      "No it's not just a cartoon, it's a well thought story that forces you to adopt to new perspective. Anime shows have a plot, a theme which is outside of the usual norm of western media. Some anime really makes you think about the human condition. The character development is on a different scale when compared to other media, and the SOUNDTRACK... the intensity, the drama, the horror it just amplifies the moment.",
    images: [anime01, anime02, anime03, anime04, anime05, anime06],
  },

  tv: {
    title: "TV Shows",
    thought: "",
    detail:
      "I am a fan of murder mysteries, supernatual stuff, nerd comedy, animated series, super hero stuff, you get the point... Aside my love for Anime, there are some TV shows which I love and would watch them agian any given time.",
    images: [tv01, tv02, tv03, tv04, tv05, tv06],
  },

  more: {
    title: "More about me",
    thought:
      "Everything is an experience. You learn somethign different from everything you do",
    detail: "Some random things about me:",
    list: [
      "I have played Handball at a national level.",
      "I currently have 5 tattoos, definitely getting more.",
      "I play more than 8 sports.",
      "Dogs rule.",
      "In a fight between DC and Marvel, DC wins hands down.",
      "Goku can beat Superman.",
      "I love any tech related product.",
    ],
    images: [more01, more02, more03, more04, more05, more06, more07],
  },
};

export { AboutCardsData, ModalData };
