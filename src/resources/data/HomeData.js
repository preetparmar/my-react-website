// Importing Images
import educationImage from "../images/banners/education.jpg";
import skillsImage from "../images/banners/skills.jpg";
import experienceImage from "../images/banners/experience.jpg";
import projectsImage from "../images/banners/projects.jpg";
import aboutImage from "../images/banners/about.jpg";
import blogImage from "../images/banners/blog.jpg";
import resumeImage from "../images/banners/resume.jpg";

// Import Data
import resume from "../resume.pdf";

const HomeData = {
  thought:
    "The mind that opens to a new idea never returns to its original size",
  details: [
    "My expertise lies in Data Analytics/Data tools: mining, cleaning, transformation, and visualizations.",
    "I love simplifying and perfecting things which translates into my way of working.",
    "Before this, I completed my M.S. degree in Engineering Management from Northeastern University, Boston where I gained experience in both Management as well as Data Analytics concepts.",
    "I have built multiple data processes to collect, organize, transform and visualize the data.",
    "I have also been responsible to lead a team and mentor them in various emerging data tools and designing a roadmap for learning",
    "I love solving complex problems and finding the optimal solution for them, mainly because it provides me with an opportunity to widen my skill set and learn something new.",
    "The thing which keeps me going is my hunger to learn new things. This has led me to work on various projects outside my skill set, one prime example is this website.",
    "I love anything tech-related, any new piece of technology, software, game, or a new language to learn, just sign me up for it.",
  ],
};

const HomeCards = [
  {
    title: "Education",
    image: educationImage,
    link: "/education",
  },
  {
    title: "Skills",
    image: skillsImage,
    link: "/skills",
  },
  {
    title: "Experience",
    image: experienceImage,
    link: "/experience",
  },
  {
    title: "Projects",
    image: projectsImage,
    link: "/projects",
  },
  {
    title: "About Me",
    image: aboutImage,
    link: "/about",
  },
  {
    title: "Blog",
    image: blogImage,
    link: { pathname: "https://blog.preetparmar.com" },
    target: "_blank",
  },
  {
    title: "Resume",
    image: resumeImage,
    link: resume,
    target: "_blank",
  },
];
export { HomeData, HomeCards };
