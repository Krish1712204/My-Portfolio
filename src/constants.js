// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logos

import celebalLogo from "./assets/company_logo/celebal_logo.png";

// Education Section Logo's
import sanjivaniLogo from "./assets/education_logo/scoe_logo.png";
import ssgmlogo from "./assets/education_logo/ssgm.jpeg";
import mvblogo from "./assets/education_logo/mvb.jpeg";

// Project Section Logo's
import personalPortfolioLogo from "./assets/work_logo/portfolio.png";
import razorpayCloneLogo from "./assets/work_logo/razorpay.png";
import deptsalarylogo from "./assets/work_logo/deptsalary.png";


// Certification Section Images

import cppCoursera from "./assets/certifications/cppcoursera.jpg";
import cloudcomputing from "./assets/certifications/cloudcomputing.jpg";
import iiot from "./assets/certifications/iiot.jpg";
import projectmanagement from "./assets/certifications/projectmanagement.jpg";

export const SkillsInfo = [{
        title: "Frontend",
        skills: [
            { name: "HTML", logo: htmlLogo },
            { name: "CSS", logo: cssLogo },
            { name: "JavaScript", logo: javascriptLogo },
            { name: "React JS", logo: reactjsLogo },
            { name: "Tailwind CSS", logo: tailwindcssLogo },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "MySQL", logo: mysqlLogo },
            { name: "MongoDB", logo: mongodbLogo },
            { name: "PostgreSQL", logo: postgreLogo },
        ],
    },
    {
        title: "Languages",
        skills: [
            { name: "C", logo: cLogo },
            { name: "C++", logo: cppLogo },
            { name: "Python", logo: pythonLogo },
            { name: "JavaScript", logo: javascriptLogo },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git", logo: gitLogo },
            { name: "GitHub", logo: githubLogo },
            { name: "VS Code", logo: vscodeLogo },
            { name: "Vercel", logo: vercelLogo },
            { name: "Netlify", logo: netlifyLogo },
        ],
    },
];

export const experiences = [{
    id: 0,
    img: celebalLogo,
    role: "SQL Intern",
    company: "Celebal Technologies",
    date: "June 2025 - August 2025",
    desc: "Worked on writing optimized SQL queries, managing relational databases, and creating views and stored procedures. Gained experience in ETL, data analysis, and maintaining data accuracy for reports.",
    skills: [
        "SQL",
        "MySQL",
        "Stored Procedures",
        "Views",
        "Joins",
        "Data Analysis",
        "Query Optimization",
    ],
}, ];

export const education = [{
        id: 0,
        img: sanjivaniLogo,
        school: "SANJIVANI COE, KOPARGAON",
        degree: "BTECH, CSE",
        date: "2022 - 2026",
        grade: "CGPA: 8.3",
        desc: "Currently pursuing Bachelor of Technology in Computer Science Engineering. Gaining strong foundation in programming, algorithms, and software development.",
    },
    {
        id: 1,
        img: ssgmlogo,
        school: "S.S.G.M. COLLEGE, Kopargaon",
        degree: "HIGHER SECONDARY (11th - 12th)",
        date: "2020 - 2022",
        grade: "Percentage: 68.67% (HSC)",
        desc: "Completed Higher Secondary education focusing on Science stream, preparing for engineering studies with good academic performance.",
    },
    {
        id: 2,
        img: mvblogo,
        school: "MADHYAMIK VIDYALAYA BRAHMANGAON",
        degree: "SECONDARY SCHOOL",
        date: "2019 - 2020",
        grade: "Percentage: 87.88% (SSC)",
        desc: "Completed Secondary School Certificate with strong academic results in core subjects, laying foundation for higher studies.",
    },
];

export const projects = [{
        id: 0,
        title: "Personal Portfolio",
        description: [
            "Built a personal portfolio website using React, Vite, and Tailwind CSS to showcase skills, projects, and achievements.",
            "Implemented interactive UI components with React for smooth user experience.",
            "Used React Router for seamless navigation and ensured mobile responsiveness with Tailwind CSS.",
        ],
        image: personalPortfolioLogo,
        tags: ["React JS", "Vite", "Tailwind CSS"],
        github: "https://github.com/Krish1712204/My_Portfolio",
        webapp: "https://krishnashelar.vercel.app/",
    },
    {
        id: 1,
        title: "Razorpay Clone",
        description: [
            "Developed a responsive Razorpay website clone using HTML and Tailwind CSS.",
            "Designed interactive pages: Home, Pricing, About, Contact.",
            "Optimized mobile-first responsive layout using Tailwind’s utility classes.",
        ],
        image: razorpayCloneLogo,
        tags: ["HTML", "Tailwind CSS"],
        github: "https://github.com/Krish1712204/Razorpay-Clone-",
        webapp: "https://razorpayclonekrishna.netlify.app/",
    },
    {
        id: 2,
        title: "Department Salary Analysis",
        description: [
            "A comprehensive data analytics project done as part of my SQL Internship at Celebal Technologies. It includes analysis of departmental average salaries using MySQL, interactive visualizations via Power BI, and a web-based dashboard built with Streamlit.",
            "•Key features:",
            "•SQL queries to extract and aggregate salary data by department",
            "•Power BI dashboard for visual insights (bar, pie, and slicers)",
            "•Streamlit web app with interactive charts, download option, and clean UI",
            "•Version controlled and published on GitHub",

        ],
        image: deptsalarylogo,
        tags: ["Streamlit", "SQL", "Python"],
        github: "https://github.com/Krish1712204/Department_Salary_Analysis_",
        webapp: "https://dept-salary-analysis-krishnashelar.streamlit.app/",
    },

];

export const certifications = [{
        id: 1,
        title: "OOP Specialization",
        image: cppCoursera,
        description: "Completed the University of London's comprehensive C++ Programming Specialization on Coursera, consisting of 6 in-depth courses including object-oriented programming, classes and data, functions, and real-world applications like building a crypto trading platform.",
        issuedBy: "Coursera",
        link: "https://drive.google.com/file/d/1yCRZaQxqGvL7e80O9fNvC4R-uI1aZXXA/view?usp=sharing",
    },
    {
        id: 2,
        title: "Cloud Computing",
        image: cloudcomputing,
        description: "Completed a full semester NPTEL course on Cloud Computing, covering cloud infrastructure, virtualization, service models (IaaS, PaaS, SaaS), and deployment models. Gained hands-on knowledge about distributed systems and cloud-based architecture.",
        issuedBy: "NPTEL (IIT Kharagpur)",
        link: "https://drive.google.com/file/d/1mrm58hCwpN15OXpebLJX7I12qQExj5gX/view?usp=sharing",
    },
    {
        id: 3,
        title: "Introduction To Industry 4.0 And Industrial Internet Of Things",
        image: iiot,
        description: "Completed an NPTEL course focused on Industry 4.0 concepts including smart manufacturing, cyber-physical systems, IoT integration, big data analytics, and the digital transformation of industrial systems.",
        issuedBy: "NPTEL (IIT Kharagpur)",
        link: "https://drive.google.com/file/d/1bU4GZ19phQFfZkvWuAMkD4eIrdHRVKlm/view?usp=sharing",
    },
    {
        id: 4,
        title: "Project Management",
        image: projectmanagement,
        description: "Completed an 8-week NPTEL course on Project Management offered by IIT Roorkee, covering essential principles of managing projects effectively. Learned key topics such as project lifecycle, planning, scheduling, risk management, resource allocation, and project closure.",
        issuedBy: "NPTEL(IIT Roorkee)",
        link: "https://drive.google.com/file/d/1MBWHBjvU73m9BoYp4y7siwEViLzfCU0Q/view?usp=sharing",
    },
];