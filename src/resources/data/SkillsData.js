// Importing Library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing Icons
import {
  faDatabase,
  faTools,
  faChartBar,
  faCode,
  faAd,
  faCogs,
  faLaptopCode,
  faIcons,
} from "@fortawesome/free-solid-svg-icons";

import { faPython } from "@fortawesome/free-brands-svg-icons";

// Declaring Icons
const databaseLogo = <FontAwesomeIcon icon={faDatabase} />;
const etlLogo = <FontAwesomeIcon icon={faTools} />;
const visualLogo = <FontAwesomeIcon icon={faChartBar} />;
const languageLogo = <FontAwesomeIcon icon={faCode} />;
const marketingLogo = <FontAwesomeIcon icon={faAd} />;
const generalLogo = <FontAwesomeIcon icon={faCogs} />;
const webDevelopementLogo = <FontAwesomeIcon icon={faLaptopCode} />;
const pythonLogo = <FontAwesomeIcon icon={faPython} />;
const mediaLogo = <FontAwesomeIcon icon={faIcons} />;

// Declaring Data

const SkillsData = [
  // Databases
  {
    title: "Databases",
    logo: databaseLogo,
    details: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "AWS",
      "Salesforce",
      "Toad Data Modeler",
    ],
  },

  //   ETL Tools
  {
    title: "ETL Tools",
    logo: etlLogo,
    details: [
      "Alteryx",
      "SSIS",
      "Talend",
      "Power BI DataFlows",
      "Tableau Prep",
      "Python Scripts",
      "Power Pivot",
    ],
  },

  //   Visual Tools
  {
    title: "Visualization Tools",
    logo: visualLogo,
    details: [
      "Power BI",
      "Tableau",
      "Google Data Studio",
      "Power Pivot",
      "Qlik Sense",
      "Looker",
      "Knime",
    ],
  },

  //   Languages
  {
    title: "Languages",
    logo: languageLogo,
    details: ["Python", "SQL", "R", "JavaScript", "HTML", "CSS"],
  },

  //   Web Development
  {
    title: "Web Development",
    logo: webDevelopementLogo,
    details: ["React", "JavaScript", "HTML", "CSS", "SCSS", "JSX"],
  },

  //   Python Libraries
  {
    title: "Python Libraries",
    logo: pythonLogo,
    details: [
      "Scikit-Learn",
      "Pandas",
      "Numpy",
      "MatPlotLib",
      "SeaBorn",
      "Requests",
      "Tkinter",
      "Pygame",
    ],
  },

  //   Marketing
  {
    title: "Digital Marketing",
    logo: marketingLogo,
    details: [
      "Google Analytics",
      "Adobe Analytics",
      "Google Campaign Manager",
      "Facebook Ads Manager",
      "Snapchat Ads for Business",
      "LinkedIn Campaign Manager",
      "Amazon Marketing Services",
      "Walmart Advertising",
      "Sprout Social",
      "Criteo",
      "Jivox",
    ],
  },

  //   Media
  {
    title: "Multimedia",
    logo: mediaLogo,
    details: [
      "Adobe Photoshop",
      "GIMP",
      "Luminar AI",
      "iMovie",
      "Wondershare Filmora",
      "DaVinci Resolve",
      "OBS Studio",
      "Stream Labs",
      "YouTube Studio",
    ],
  },

  //   General
  {
    title: "General",
    logo: generalLogo,
    details: [
      "MS Office",
      "Mentorship",
      "Problem solving",
      "Teamwork",
      "Time management",
      "Effective communication",
      "Storytelling",
      "First Aid and CPR Certification",
    ],
  },
];

export default SkillsData;
