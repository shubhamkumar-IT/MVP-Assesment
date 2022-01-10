import img1 from "../assests/top.png";
import img2 from "../assests/balance.png";
import img3 from "../assests/employee.png";
import img4 from "../assests/maps.png";
const Details = [
  {
    Image: img1,
    tag: "Student and Staff Management",
    items: [
      "Create students, parents,admin and staff members",
      "Manage availability and slotsfor teaching and PTM",
      "Touchless Attendance,timesheets etc.",
    ],
  },
  {
    Image: img2,
    tag: "Curriculum and Assessments",
    items: [
      "Define and maintain standard and custom curriculum",
      "Assess student against defined curriculum",
      "Curriculum for academic, and extracurricular activities",
      "Standardized curriculum and assessments",
    ],
  },
  {
    Image: img3,
    tag: "Content Management",
    items: [
      "Assign content against curriculum modules / topics",
      <span style={{ color: "#26c6da" }}>
        Content sharing and copyright protection
      </span>,
      <span style={{ color: "#26c6da" }}>Pre-defined content </span>,
      <span style={{ color: "#26c6da" }}>
        Custom content specific to organizations
      </span>,
      <span style={{ color: "#26c6da" }}>Content Creation</span>,
    ],
  },
  {
    Image: img4,
    tag: "Forecasting and Benchmarking",
    items: [
      <span style={{ color: "#26c6da" }}>
        Benchmark students on academic and non academic disciplines
      </span>,
      <span style={{ color: "#26c6da" }}>
        Identify student potential and forecast
      </span>,
      <span style={{ color: "#26c6da" }}>Intelligent curriculum setting </span>,
    ],
  },
  {
    Image: img1,

    tag: "Parental Engagement",
    items: [
      "Student progress updates",
      "Standard communication channel",
      <span style={{ color: "#26c6da" }}>
        Appreciation and achievements badges
      </span>,
      <span style={{ color: "#26c6da" }}>
        Progress across multiple providers
      </span>,
    ],
  },
  {
    Image: img1,

    tag: "Online Learning enabled",
    items: [
      "Embedded videoconferencing",
      "Collaboration and communication",
      <span style={{ color: "#26c6da" }}> Session recordings </span>,
    ],
  },
  {
    Image: img1,

    tag: "Reporting and Analytics",
    items: [
      "Productivity KPIs and analytics",
      <span style={{ color: "#26c6da" }}>
        {" "}
        Advanced analytics and dashboards
      </span>,
    ],
  },
];

export default Details;
