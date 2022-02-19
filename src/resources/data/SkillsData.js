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
      "Power Pivot",
      "Tableau Prep",
      "Power BI DataFlows",
      "Python Scripts",
    ],
  },

  //   Visual Tools
  {
    title: "Visual Tools",
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
    details: ["Python", "R", "SQL", "HTML", "CSS", "JavaScript"],
  },

  //   Web Development
  {
    title: "Web Development",
    logo: webDevelopementLogo,
    details: ["HTML", "CSS", "JavaScript", "SCSS", "React", "JSX"],
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
      "TensorFlow",
    ],
  },

  //   Marketing
  {
    title: "Marketing",
    logo: marketingLogo,
    details: [
      "Google Analytics",
      "Adobe Analytics",
      "Google Campaign Manager",
      "Facebook Ads Manager",
      "Snapchat Ads for Business",
      "Criteo",
      "Walmart Advertising",
      "Amazon Marketing Services",
      "Jivox",
    ],
  },

  //   Media
  {
    title: "Multimedia",
    logo: mediaLogo,
    details: [
      "Adobe Photoshop",
      "Luminar AI",
      "Adobe Premiere",
      "Wondershare Filmora",
      "DaVinci Resolve",
      "OBS Studio",
      "Stream Labs",
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
