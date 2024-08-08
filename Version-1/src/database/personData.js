// Add your skills here,
// level: Beginner, Intermediate, Advanced, Expert, Master,

const personData = JSON.parse(`{
  "workExperience": [
    {
      "id": 1,
      "companyName": "MSD Animal Health",
      "position": "Logistic employee",
      "startYear": "2022",
      "endYear": "",
      "startMonth": "feb",
      "endMonth": "",
      "bulletpoints": ["Orderpicking", "Assembly", "Transport", "Loading", "Unloading"],
      "comments": "Permanent assignment, due to education to Full Stack Web Development"
    },
    {
    "id": 2,
    "companyName": "Unemployed",
    "position": "Looking for a job",
    "startYear": "2021",
    "endYear": "2022",
    "startMonth": "okt",
    "endMonth": "feb",
    "bulletpoints": ["Jobhunting"],
    "comments": ""
    },
    {
      "id": 4,
      "companyName": "Arvato Bertelsmann",
      "position": "Warehouse Supervisor Inbound & Replenishment",
      "startYear": "2020",
      "endYear": "2021",
      "startMonth": "nov",
      "endMonth": "okt",
      "bulletpoints": ["Inbound", "Replenishment", "Safety", "Planning long term", "Process optimization", "Personel Planning", "Communication", "Training", "Coaching", "KPI's", "SOP's", "5S", "Lean", "SAP", "Visio", "Sharepoint", "Stock control", "Root cause analysis", "Continuous improvement"],	
      "comments": "Contract assignment, due to chip shortage contract not extended"
    },
    {
      "id": 5,
      "companyName": "Arvato Bertelsmann",
      "position": "Warehouse Supervisor Returns",
      "startYear": "2021",
      "endYear": "2021",
      "startMonth": "jun",
      "endMonth": "sept",
      "bulletpoints": ["Returns", "Process optimization", "Personel Planning", "Training", "Coaching", "KPI's", "5S", "Lean", "SAP", "Visio", "Sharepoint", "Root cause analysis", "Continuous improvement"],
      "comments": "Project assignment, due to chip shortage contract not extended"
    },
    {
      "id": 6,
      "companyName": "Kuehne + Nagel",
      "position": "Foreman Inbound",
      "startYear": "2020",
      "endYear": "2020",
      "startMonth": "jul",
      "endMonth": "okt",
      "bulletpoints": ["Inbound", "process optimization", "personel planning", "KPI's", "Stock control", "continuous improvement", "safety"],
      "comments": "Permanent assignment"
    },
    {
      "id": 7,
      "companyName": "Kuehne + Nagel",
      "position": "Foreman Outbound",
      "startYear": "2019",
      "endYear": "2020",
      "startMonth": "okt",
      "endMonth": "jun",
      "bulletpoints": ["Outbound", "process optimization", "personel planning", "KPI's", "Stock control", "continuous improvement", "safety"],
      "comments": "Permanent assignment"
    },
    {
      "id": 8,
      "companyName": "Grand Duet BV (Alldough, Bart's Retail BV)",
      "position": "Assistant supervisor",
      "startYear": "2007",
      "endYear": "2019",
      "startMonth": "nov",
      "endMonth": "sept",
      "bulletpoints": ["Inbound", "Outbound", "Stock control", "Orderpicking", "Assembly", "WMS", "Technical support automated systems"],
      "comments": "Permanent assignment"
    },
    {
      "id": 9,
      "companyName": "Vion Food Group (Dumeco, Bovec, NCB)",
      "position": "Deputy foreman expedition",
      "startYear": "1996",
      "endYear": "2007",
      "startMonth": "feb",
      "endMonth": "nov",
      "bulletpoints": ["Secretary personel association", "Inbound", "Outbound", "Editor company news", "Orderpicking", "Deputy head Facility"],
      "comments": "Permanent assignment"
    },
    {
      "id": 10,
      "companyName": "Media Expresse",
      "position": "delivery boy",
      "startYear": "1993",
      "endYear": "1996",
      "startMonth": "jan",
      "endMonth": "dec", 
      "bulletpoints": ["delivering megazines"],
      "comments": "Student job"
    },
    {
      "id": 11,
      "companyName": "Unknow",
      "position": "delivery boy",
      "startYear": "1992",
      "endYear": "1993",
      "startMonth": "jan",
      "endMonth": "dec",
      "bulletpoints": ["delivering newspapers"],
      "comments": "Student job"
    }
  ],
  "education": [
    {
      "id": 1,
      "institution": "Winc Academy",
      "education": "Full Stack Web Development",
      "bulletpoints": ["front-end", "back-end", "databases", "React", "Node.js", "Express.js", "Prisma", "SQL", "HTML", "CSS", "SCSS", "JavaScript", "Python", "Git", "Github", "ORM"],
      "level": "HBO",
      "degree": "certificate",
      "yearOfCertificate": "2023",
      "renewal": ["indefinite"]
    },
    {
      "id": 2,
      "institution": "NHA",
      "education": "Teamleader logistics",
      "bulletpoints": ["teamleader", "logistics", "planning", "optimization", "financial", "communication","safety", "quality", "prioritizing"],
      "level": "MBO",
      "degree": "certificate",
      "yearOfCertificate": "2019",
      "renewal": ["indefinite"]
    },
    {
      "id": 3,
      "institution": "NIBHV",
      "education": "BHV",
      "bulletpoints": ["first aid", "fire safety", "communication", "evacuation", "safety"],
      "level": "",
      "degree": "certificate",
      "yearOfCertificate": "2012",
      "renewal": ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]
    },
    {
      "id": 4,
      "institution": "NTI",
      "education": "Webdesign",
      "bulletpoints": ["HTML", "CSS", "User experience", "marketing",  "CMS", "responsive design"],
      "level": "MBO",
      "degree": "certificate",
      "yearOfCertificate": "2012",
      "renewal": ["indefinite"]
    },
    {
      "id": 5,
      "institution": "Various",
      "education": "Driver certificate",
      "bulletpoints": ["Lifttruck", "Reachtruck", "Combitruck (manlift)", "EPT"],
      "level": "None",
      "degree": "certificate",
      "yearOfCertificate": "2002",
      "renewal": ["2007","2008", "2012", "2017", "2021","2022"]
    },
    {
      "id": 6,
      "institution": "Boston",
      "education": "Informatica",
      "bulletpoints": ["Word", "Excel", "Windows", "Outlook", "Internet"],
      "level": "MBO",
      "degree": "certificate",
      "yearOfCertificate": "2003",
      "renewal": ["indefinite"]
    },
    {
      "id": 7,
      "institution": "EVC",
      "education": "SVO",
      "bulletpoints": ["food safety", "production assistance"],
      "level": "MBO",
      "degree": "Diploma",
      "yearOfCertificate": "2003",
      "renewal": ["indefinite"]
    },
    {
      "id": 8,
      "institution": "Precon",
      "education": "Communication",
      "bulletpoints": [],
      "level": "MBO",
      "degree": "certificate",
      "yearOfCertificate": "2003",
      "renewal": ["indefinite"]
    },
    {
      "id": 9,
      "institution": "Helicon Nijmegen",
      "education": "Plants and Animal care",
      "bulletpoints": ["animal behavior analysis", "animal care"],
      "level": "VMBO",
      "degree": "Diploma",
      "yearOfCertificate": "1995",
      "renewal": ["indefinite"]
    },
    {
      "id": 10,
      "institution": "Helicon Cuijk",
      "education": "Live stock care",
      "bulletpoints": [],
      "level": "MAVO",
      "degree": "unfinished",
      "yearOfCertificate": "1996",
      "renewal": ["None"]
    },
    {
      "id": 11,
      "institution": "VVL Lexmond",
      "education": "Vak Vervoer en Logistiek",
      "bulletpoints": ["logistics", "transport", "special movements", "communication", "safety", "technical knowledge"],
      "level": "MBO",
      "degree": "certificate",
      "yearOfCertificate": "2002",
      "renewal": ["indefinite"]
    },
    {
      "id": 12,
      "institution": "ECOlab",
      "education": "Chemical cleaning and safety",
      "bulletpoints": [],
      "level": "MBO",
      "degree": "certificate",
      "yearOfCertificate": "2007",
      "renewal": ["indefinite"]
    }
  ],
  "skills": [
    {
      "id": 1,
      "skill": "JavaScript",
      "level": "Advanced",
      "icontype": "fa-brands",
      "iconName": "fa-js",
      "langDescription": "JavaScript is an front-end and back-end language. It is used to create interactive websites and web applications."
    },
    {
      "id": 2,
      "skill": "HTML",
      "level": "Advanced",
      "icontype": "fa-brands",
      "iconName": "fa-html5",
      "langDescription": "HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      "id": 3,
      "skill": "CSS",
      "level": "Advanced",
      "icontype": "fa-brands",
      "iconName": "fa-css3-alt",
      "langDescription": "CSS is a style sheet language used for describing the presentation of a document written in HTML."
    },
    {
      "id": 4,
      "skill": "SCSS",
      "level": "Advanced",
      "icontype": "fa-brands",
      "iconName": "fa-sass",
      "langDescription": "SCSS is a preprocessor scripting language that is interpreted or compiled into CSS."
    },
    {
      "id": 5,
      "skill": "React",
      "level": "Advanced",
      "icontype": "fa-brands",
      "iconName": "fa-react",
      "langDescription": "React is a front-end library for building user interfaces or UI components."
    },
    {
      "id": 6,
      "skill": "React.js",
      "level": "Advanced",
      "icontype": "fa-brands",
      "iconName": "fa-react",
      "langDescription": "React is a front-end library for building user interfaces or UI components."
    },
    {
      "id": 7,
      "skill": "Node.js",
      "level": "Beginner",
      "icontype": "fa-brands",
      "iconName": "fa-node-js",
      "langDescription": "Node.js is a back-end language. It is used to create server-side applications."
    },
    {
      "id": 8,
      "skill": "Express.js",
      "level": "Advanced",
      "icontype": "fa-solid",
      "iconName": "fa-code",
      "langDescription": "Express.js is a back-end framework for Node.js. It is used to create server-side applications."
    },
    {
      "id": 9,
      "skill": "Prisma",
      "level": "Beginner",
      "icontype": "fa-solid",
      "iconName": "fa-code",
      "langDescription": "Prisma is a database toolkit. It is used to create and manage databases."
    },
    {
      "id": 10,
      "skill": "SQL",
      "level": "Advanced",
      "icontype": "fa-solid",
      "iconName": "fa-database",
      "langDescription": "SQL is a standard language for storing, manipulating and retrieving data in databases."
    },
    {
      "id": 11,
      "skill": "MySQL",
      "level": "Advanced",
      "icontype": "fa-solid",
      "iconName": "fa-database",
      "langDescription": "MySQL is a relational database management system. It is used to store and manage data in databases."
    },
    {
      "id": 12,
      "skill": "Python",
      "level": "Beginner",
      "icontype": "fa-brands",
      "iconName": "fa-python",
      "langDescription": "Python is a back-end language. It is used to create server-side applications."
    },
    {
      "id": 13,
      "skill": "Git",
      "level": "Beginner",
      "icontype": "fa-solid",
      "iconName": "fa-code-branch",
      "langDescription": "Git is a distributed version control system for tracking changes in code. It supports collaboration, branch management, and efficient workflows, making it essential for software development."
    },
    {
      "id": 14,
      "skill": "Github",
      "level": "Advanced",
      "icontype": "fa-brands",
      "iconName": "fa-github",
      "langDescription": "GitHub is a web-based platform for hosting and collaborating on Git repositories. It provides tools for version control, issue tracking, and code review, enhancing project management and teamwork in software development."
    },
    {
      "id": 15,
      "skill": "Object-relational mapping (ORM)",
      "level": "Advanced",
      "icontype": "fa-solid",
      "iconName": "fa-database",
      "langDescription": "ORM (Object-Relational Mapping) is a programming technique that allows developers to interact with a database using an object-oriented paradigm. It simplifies database operations by mapping objects in code to database tables, reducing the need for complex SQL queries."
    },
    {
      "id": 16,
      "skill": "PHP",
      "level": "Beginner",
      "icontype": "fa-brands",
      "iconName": "fa-php",
      "langDescription": "PHP is a back-end language. It is used to create server-side applications."
    }
  ]
}`);

export default personData;
