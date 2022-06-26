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
  //   Visual Tools
  {
    title: "Visualization Tools",
    logo: visualLogo,
    details: [
      "Power BI",
      "Tableau",
      "Google Data Studio",
      "Qlik Sense",
      "Power Pivot",
      "Excel",
      "Knime",
    ],
  },

  // Databases
  {
    title: "Databases",
    logo: databaseLogo,
    details: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Toad Data Modeler",
      "Salesforce",
      "AWS",
      "Oracle",
    ],
  },

  //   ETL Tools
  {
    title: "ETL Tools",
    logo: etlLogo,
    details: [
      "SSIS",
      "Power BI DataFlows",
      "Talend",
      "Tableau Prep",
      "Power Pivot",
      "Python Scripts",
      "Alteryx",
    ],
  },

  //   Languages
  {
    title: "Languages",
    logo: languageLogo,
    details: ["SQL", "Python", "R", "JavaScript", "HTML", "CSS"],
  },

  //   Python Libraries
  {
    title: "Python Libraries",
    logo: pythonLogo,
    details: [
      "PySpark",
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
      "Google Campaign Manager",
      "Facebook Ads Manager",
      "Snapchat Ads for Business",
      "LinkedIn Campaign Manager",
      "Amazon Marketing Services",
      "Walmart Advertising",
      "Sprout Social",
      "Adobe Analytics",
      "Criteo",
      "Jivox",
    ],
  },

  //   Web Development
  {
    title: "Web Development",
    logo: webDevelopementLogo,
    details: ["React", "JavaScript", "HTML", "CSS", "SCSS", "JSX"],
  },

  //   Media
  {
    title: "Multimedia",
    logo: mediaLogo,
    details: [
      "Adobe Photoshop",
      "GIMP",
      "OBS Studio",
      "Stream Labs",
      "YouTube Studio",
      "Luminar AI",
      "iMovie",
      "Wondershare Filmora",
      "DaVinci Resolve",
    ],
  },

  //   General
  {
    title: "General",
    logo: generalLogo,
    details: [
      "MS Office",
      "Storytelling",
      "Problem-solving",
      "Teamwork",
      "Time management",
      "Effective communication",
      "Mentorship",
      "First Aid and CPR Certification",
    ],
  },
];

export default SkillsData;
