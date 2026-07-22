import {
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
} from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "Higher Secondary (12th)",
    institute: "K.M. Agrawal College",
   
    duration: "2018 - 2020",
    result: "58.40%",
    icon: FaGraduationCap,
    position: "top",
    color: "cyan",
    description:
      "Completed Higher Secondary education with a strong foundation in science and mathematics.",
  },

  {
    id: 2,
    title: "Bachelor's Degree",
    institute: "Mumbai University ",
    duration: "2020",
    result: "8.2 CGPA",
    pointer: "8.2",
    icon: FaUniversity,
    position: "bottom",
    color: "purple",
    description:
      "Completed Bachelor's degree and developed analytical and problem-solving skills.",
  },

  {
    id: 3,
    title: "Full Stack Java Development",
    institute: "Java Full Stack Course",
    duration: "2026 (Pursuing)",
    result: "Certification",
    icon: FaCertificate,
    position: "top",
    color: "pink",
    description:
      "Learning Java, Spring Boot, React, MySQL, REST APIs, Git, and full-stack application development.",
  },
];

export default educationData;