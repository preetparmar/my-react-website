// Importing Images
import neuImage from "../images/education/neu.png";
import puImage from "../images/education/pu.jpg";

const EducationData = [
  {
    name: "Northeastern University",
    image: neuImage,
    location: "Boston, USA",
    title: "Masters of Science",
    course: "Engineering Management",
    timeFrame: "(2015 - 2017)",
    introText:
      "I opted to do a master's in Engineering Management and picked up courses related to Data because I wanted to broaden my skillset in management alongside technical knowledge related to data. Here are some of the courses which I took:",
    details: [
      "Data Warehouse and Business Intelligence",
      "Business Analysis and Information Engineering",
      "Database Designing and Development",
      "Machine Learning",
      "Probability and Statistics",
      "Operational Research",
      "Economic Decision Making",
      "Project Management",
    ],
    // width: "no",
    width: "",
  },

  {
    name: "Pune University",
    image: puImage,
    location: "Nashik, India",
    title: "Bachelors in Engineering",
    course: "Electronics Engineering",
    timeFrame: "(2008 - 2012)",
    introText:
      "Coming out of secondary education, I was very much interested in technology and all the various tech products. That's why I decided to pursue my further studies in the field of Electronics. I also gained knowledge in advanced mathematics and some coding subjects. Here are some of the courses which I took:",
    details: [
      "Engineering Mathematics",
      "Data Structures",
      "Computer Network and Security",
      "Data Communications",
      "Solid States Devices and Circuits",
      "Digital Logic Design",
      "Electromagnetics",
      "VLSI Design",
      "Artificial Intelligence",
    ],
    width: "no",
  },
];

export default EducationData;
