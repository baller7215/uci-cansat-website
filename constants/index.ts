// navigation and routing

export const navLinks = [
    {
        label: "About",
        route: "/about",
    //   icon: "/assets/icons/image.svg",
    },
    {
        label: 'Team',
        route: '/team',
    },
    {
        label: "Projects",
        route: "/projects",
    //   icon: "/assets/icons/stars.svg",
    },
    {
        label: "Sponsors",
        route: "/sponsors",
    //   icon: "/assets/icons/scan.svg",
    },
    {
        label: "Updates",
        route: "/updates",
    //   icon: "/assets/icons/filter.svg",
    },
    {
        label: "Contact",
        route: "/contact",
    //   icon: "/assets/icons/camera.svg",
    },

];
  
export const aboutLinks = [
    {
        label: "About Us",
        route: "/about",
        //   icon: "/assets/icons/logo.png",
    },
    
];

export const teamLinks = [
    {
        label: "The Team",
        route: "/team",
    },
    {
        label: "2024 - 2025",
        route: "/team/2024-2025",
        image: '',
    },
    {
        label: "2023 - 2024",
        route: "/team/2023-2024",
        image: '/assets/images/team/2023-2024/team.png',
    },
    {
        label: "2022 - 2023",
        route: "/team/2022-2023",
        image: '',
    },
    {
        label: "2021 - 2022",
        route: "/team/2021-2022",
        image: '',
    },
    {
        label: "2020 - 2021",
        route: "/team/2020-2021",
        image: '',
    },
    {
        label: "2019 - 2020",
        route: "/team/2019-2020",
        image: '',
    },
    {
        label: "2018 - 2019",
        route: "/team/2018-2019",
        image: '',
    },
    {
        label: "2017 - 2018",
        route: "/team/2017-2018",
        image: '',
    },
]
  
export const projectsLinks = [
    {
        label: "Projects",
        route: "/projects/",
    },
    {
        label: "2024 - 2025",
        route: "/projects/2024-2025",
        image: '',
    },
    {
        label: "2023 - 2024",
        route: "/projects/2023-2024",
        image: '/assets/images/team/2023-2024/team.png',
    },
    {
        label: "2022 - 2023",
        route: "/projects/2022-2023",
        image: '',
    },
    {
        label: "2021 - 2022",
        route: "/projects/2021-2022",
        image: '',
    },
    {
        label: "2020 - 2021",
        route: "/projects/2020-2021",
        image: '',
    },
    // add more if needed
];

export const sponsorsLinks = [
    {
        label: 'Why Sponsor Us',
        route: '/sponsors/why-sponsor-us',
    },
    {
        label: 'Sponsorship Tiers',
        route: '/sponsors/sponsorship-tiers',
    },
];

export const updateLinks = [
    {
        label: 'Featured News',
        route: '/updates/featured-news',
    },
    {
        label: 'News Archive',
        route: '/updates/news-archive',
    }
];

export const contactLinks = [
    {
        label: 'Contact Us',
        route: '/contact/',
    },
    {
        label: 'Join Us',
        route: '/join/',
    }
]



// socials
export const socials = [
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/company/uci-cansat/',
        icon: '/assets/icons/linkedin.svg'
    },
    {
        label: 'Instagram',
        link: 'https://www.instagram.com/cansatuci/',
        icon: '/assets/icons/instagram.svg'
    }
]



// about us
export const subteams = [
    {
        id: 1,
        title: 'Mechanical',
        content: "The mechanical challenges faced by the UCI CanSat team involve ensuring the satellite's structural integrity, optimizing its weight, and developing deployable systems that can withstand the launch's harsh conditions. Furthermore, considerations like thermal management and aerodynamic stability are also pivotal. Through these challenges, students get a firsthand experience of mechanical design, prototyping, and testing."
    },
    {
        id: 2,
        title: 'Electrical',
        content: "Electrical components form the nervous system of the satellite. The UCl CanSat team members work on designing and implementing power systems, sensors, and communication modules. They learn the importance of energy efficiency, reliability, and redundancy. This facet of the competition gives students the experience to work on circuit design, soldering, and debugging complex electrical systems."
    },
    {
        id: 3,
        title: 'Software',
        content: "The UCl CanSat team emphasizes robust embedded systems programming for satellite autonomy. From gathering data from sensors, ensuring effective communication, to executing deployment sequences, the software aspect is integral to the satellite's success. Additionally, they develop intuitive dashboards, facilitating real-time data visualization and seamless interaction with the satellite's systems."
    },
]

export const competitionHistory = [
    {
        placing: '4th',
        year: '2023 - 2024'
    },
    {
        placing: '14th',
        year: '2022 - 2023'
    },
    {
        placing: '29th',
        year: '2021 - 2022'
    },
    {
        placing: '7th',
        year: '2020 - 2021'
    },
    {
        placing: '23rd',
        year: '2019 - 2020'
    },
    {
        placing: '45th',
        year: '2018 - 2019'
    }
]

export const competitionTimeline = [
    { 
        date: "OCT. 20", 
        title: "PLANNING", 
        description: "Trade studies, design drafts, year schedule"
    },
    { 
        date: "AUG. 29", 
        title: "PROTOTYPE", 
        description: "Manufacture first prototype, personal tests" 
    },
    { 
        date: "FEB. 02", 
        title: "PDR", 
        description: "Preliminary Design Review"
    },
    { 
        date: "APR. 05", 
        title: "CDR", 
        description: "Critical Design Review"
    },
    { 
        date: "MAY. 24", 
        title: "TEST", 
        description: "Competition Environmental Tests"
    },
    { 
        date: "JUN. 15", 
        title: "LAUNCH", 
        description: "Launch Day"
     },
  ];



// our team

// management
export const management = [
    {
        name: 'Professor Rangel',
        role: 'Primary Faculty Advisor',
        profileImg: '',
    },
    {
        name: 'Professor Hassaan',
        role: 'Faculty Co-Advisor',
        profileImg: '',
    },
    {
        name: 'Kaylee Kim',
        role: 'Team Lead',
        profileImg: '',
    },
    {
        name: 'Khushu Gupta',
        role: 'Electrical and Controls Team Lead',
        profileImg: '',
    },
    {
        name: 'Sarah',
        role: 'Mechanical Lead',
        profileImg: '',
    },
]

// replace apostraphe with &apos;
// template
// {
//     name: '',
//     role: '',
//     profileImg: '',
//     github: '',
//     linkedin: '',
//     major: '',
//     gradYear: '',
//     description: ''
// },

// 2024 - 2025
export const team2024_2025 = {
    // missing sarah ho, alan duong, khushi gupta
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Primary Faculty Advisor',
            profileImg: '',
        },
        {
            name: 'Professor Hassaan',
            role: 'Faculty Co-Advisor',
            profileImg: '',
        },
    ],
    management: [
        {
            name: 'Kaylee Kim',
            role: 'Team Lead',
            profileImg: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/kayleesk/',
            major: 'Mathematics / Mechanical Engineering',
            gradYear: '2026',
            description: "Hi, I'm Kaylee! I'm serving as UCI CanSat's Team Lead this year. I was on the Controls subteam last year, eventually serving as Lead Programmer. When I'm not working on CanSat, you can find me watering my plants or climbing at the gym :)"
        }
    ],
    mechanical: [
        {
            name: 'Sarah Mo',
            role: 'Mechanical Lead',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Dayeon Yoon',
            role: 'Mechanical Engineer',
            profileImg: '',
            github: '',
            linkedin: 'http://www.linkedin.com/in/diane611',
            major: 'Aerospace Engineering',
            gradYear: '2026',
            description: "Hello! I'm Dayeon (also known as Diane), a Mechanical Subteam Engineer at UCI Cansat. My passion for aerospace engineering stems from a love of space physics theories, hands-on teamwork, and a fascination with fighter jets. Along with my passion, I would love to further leverage my engineering skills through being part of the UCI Cansat Team!"
        },
        {
            name: 'Andrei Darjuan',
            role: 'Mechanical Engineer',
            profileImg: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/andrei-darjuan-088796224/',
            major: 'Mechanical Engineering',
            gradYear: '2026',
            description: "My name is Andrei and I am a mechanical engineer for UCI CanSat. Some of my responsibilities on CanSat consist of designing and fabricating the structural components of our satellite and ensuring that it can withstand the mechanical stresses throughout the various stages of the mission. Other roles include material selection and integrating the satellite's hardware components, as well as conducting tests such as FEA and CFD to analyze and optimize the CanSat's structure and functionality."
        },
        {
            name: 'Alan Duong',
            role: 'Mechanical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },   
    ],
    electrical: [
        {
            name: 'Khushi Gupta',
            role: 'Electrical Lead',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Naethan Fajarito',
            role: 'Electrical Engineer',
            profileImg: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/naethanf2001/',
            major: 'Computer Engineering',
            gradYear: '2025',
            description: "I'm apart of the electrical team for UCI's CanSat where I focus on the PCB design and the integration of essential systems like sensors, telemetry, and the microcontroller. I'm passionate about what I do here at UCI and enjoy taking on various projects and hobbies that help me learn more and grow as an engineer!"
        },
        {
            name: 'Timothy Yee',
            role: 'Electrical Engineer',
            profileImg: '',
            github: 'https://github.com/timyee1',
            linkedin: 'http://www.linkedin.com/in/timothy-youlin-yee',
            major: 'Computer Engineering',
            gradYear: '2027',
            description: "My name is Timothy Yee, and I'm a second-year student at UC Irvine currently studying computer engineering! I'm on the electrical subteam for CanSat where I'll be helping with PCB design, power management, and sensor integration with our system."
        },
    ],
    controls: [
        {
            name: 'Brady Cason',
            role: 'Lead Software Engineer',
            profileImg: '',
            github: 'https://github.com/BradyCason',
            linkedin: 'https://www.linkedin.com/in/brady-cason/',
            major: 'Computer Science and Engineering',
            gradYear: '2027',
            description: 'My name is Brady, and I am the lead Software Engineer for the project. I am in charge of programming the Ground Station and In-Flight Software, keeping the Controls team on track to hit deadlines, and communicating progress with other sub-teams.'
        },
        {
            name: 'Zhanhao Ruan',
            role: 'Software Engineer',
            profileImg: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/zhanhao-ruan-3294582b8/',
            major: 'Computer Science',
            gradYear: '2025',
            description: 'My responsibility includes developing the ground station to communicate with the CanSat and display real-time data through Python. I am also responsible for programming the embedded systems through C and performing integration testing. '
        },
    ],
    operations: [
        {
            name: 'Satvika Bommadevara',
            role: 'Operations Lead',
            profileImg: '',
            github: '',
            linkedin: 'https://www.linkedin.com/in/satvika-bommadevara/',
            major: 'Business Information Management',
            gradYear: '2027',
            description: "I'm a second year student and I am the Operations member on the team! My role is focused on managing finances, finding and coordinating the team's sponsorships, and handling outreach with potential sponsors, companies, etc. I'm really excited to be a part of the team!"
        },  
    ],
    webDev: [
        {
            name: 'Leo Siu',
            role: 'Website Developer Lead',
            profileImg: '',
            github: 'https://github.com/baller7215',
            linkedin: 'http://www.linkedin.com/in/leonardo-siu',
            major: 'Computer Science / Informatics',
            gradYear: '2027',
            description: "Hey, my name is Leo! As the Web Developer, I lead the design, development, and maintenance of the team's website, ensuring it aligns with the team's vision and branding. Outside of CanSat, you can find me strolling around Aldridge Park or taking photos with my camera."
        }
    ]
}





// projects
// 2024 - 2025

// 2023 - 2024
export const project2023_2024 = {
    overview: {
        team: '', //team photo
        description: "Fall Quarter: Focused on research, design work, and developing the Preliminary Design Report (PDR). Software development concentrated on creating a ground station capable of receiving and displaying telemetry data from the CanSat’s sensors, while the hardware team worked on electrical and mechanical prototype designs.\nWinter Quarter: Dedicated to preparing and practicing for the Preliminary Design Review (PDR) presentation, with all subteams refining their work to meet competition standards. \nSpring Quarter: Implemented the designs into physical solutions, including ordering electrical components, assembling container segments, and testing the system’s performance to ensure compliance with competition requirements."
    },
    projectDefinition: {
        planning: "Telemetry, an automated communication process for remotely measuring and monitoring data, has evolved significantly since its inception in aerospace during the 1930s. The CanSat competition, sponsored by the American Astronautical Society (AAS), offers students the opportunity to engage in the complete lifecycle of a telemetry payload system. The competition challenges university teams to design, build, and deploy a space-related system according to specific guidelines, culminating in a competitive launch at the end of the academic year.",
        problemStatement: "The mission requires designing a container deployable from a rocket, with controlled descent rates using parachutes. The container must descend at 15m/s above 400m and at 5m/s below 400m. At 300m, a payload attached by a 10-meter tether must deploy, descending at 0.5m/s, while maintaining a specific camera orientation. Throughout the descent, the container should report telemetry data."
    },
    design: {
        majorComponents: {
            description: "The overall design consists of three key components in order for the CanSat to function effectively. They are separated into the three parts that make up the CanSat.",
            bulletPoints: [
                "The first part of the CanSat is the top cap. The purpose of the top cap is to stow both the first and second parachutes for deployment at their specific altitudes in order to slow down the descent rate of the CanSat. The key component in the top cap is the secondary parachute deployment mechanism.",
                "The second part is the body. Is it the middle cylinder that connects both the top cap and the payload (third component). It is the largest part which is used to house the pulley system, the key component of the body, which is used to deploy the payload via 10 meter long tether(s).",
                "The third part is its own key component: the payload. The payload is the “cargo” of the CanSat which sits at the bottom of the CanSat. It houses a camera that requires a very specific orientation (cardinal direction and angle) along with its necessary electronics."
            ]
        },
        keyComponents: [
            {
                name: "Top Cap",
                description: "Houses and deploys the parachutes at designated altitudes, featuring a solenoid mechanism for secure deployment."
            },
            {
                name: "Body",
                description: "The largest section, containing the pulley system that deploys the payload, ensuring stability during descent with a four-tether system."
            },
            {
                name: "Payload",
                description: "The camera housing, designed for specific orientation and equipped with necessary electronics, protected to ensure survivability upon landing."
            }
        ],
        ourWorks: [
            {
                name: "Mechanical",
                description: "The mechanical team was responsible for designing all structural components of the CanSat, which can be described by seven different subsystems. These include: Nose Cone (also functions as the heat shield), Landing Gear, Electronics Compartment, Egg Protection, Grid Fins, Streamer Release, and Parachute Release. During the competition, each of these subsystems serve a specific function in order to comply with a certain requirement, which gives us points towards our final ranking. Our job this year was to design, fabricate, test, (and redesign) each of these subsystems until they functioned reliably and robustly, and then integrate them into a full structure.",
                image: "./assets/images/projects/2023-2024/mechanical.png"
            },
            {
                name: "Electrical",
                description: "The electrical team was responsible for developing the avionics printed circuit board (PCB). This PCB connects various sensors and actuators, GPS, and radio to the main microcontroller (an STM32F1). After outlining requirements, conducting trade studies, and selecting components, we began designing the PCB in Altium Designer. We went through three iterations in total, reducing weight, improving RF performance, and making small mechanical improvements along the way. We hand soldered all PCBs to reduce the cost of the iterative process we followed. As part of this process, we focused on first developing a minimum viable product (achieved in revision two) so that we would be able to launch should any following revisions fail. Thankfully, all of the improvements we implemented in revision three were executed successfully, and we plan to launch with this version.",
                image: "./assets/images/projects/2023-2024/electrical.png"
            },
            {
                name: "Controls",
                description: "The controls subteam focused on designing and implementing the ground station program using PyQt5, adhering to the CanSat competition mission guide. The ground station interface, which includes commands like “Activate Heatshield” and “Activate Parachute,” communicates with the CanSat, displays received data, and controls operations. A “Simulation Mode” was also developed to test functionalities by mimicking flight data. Real-time data graphs on the ground station were designed and implemented using PyQtGraphs. Another main controls task is developing embedded systems for the CanSat payload using the electrical schematics provided by the electrical subteam. The embedded software, written in C, will run on the STM32 microcontroller.",
                image: "./assets/images/projects/2023-2024/controls.png"
            }
        ]
    }
}




// connect year with corresponding object
export const yearTeamProject = {
    id2024_2025: {
        id: '2024-2025',
        label: '2024 - 2025',
        team: team2024_2025,
        project: project2023_2024,
    },
    id2023_2024: {
        id: '2023-2024',
        label: '2023 - 2024',
        team: team2024_2025,
        project: project2023_2024,
    },
    id2022_2023: {
        id: '2022-2023',
        label: '2022 - 2023',
        team: team2024_2025,
        project: project2023_2024,
    },
    id2021_2022: {
        id: '2021-2022',
        label: '2021 - 2022',
        team: team2024_2025,
    },
    id2020_2021: {
        id: '2020-2021',
        label: '2020 - 2021',
        team: team2024_2025,
    },
    id2019_2020: {
        id: '2019-2020',
        label: '2019 - 2020',
        team: team2024_2025,
    },
    id2018_2019: {
        id: '2018-2019',
        label: '2018 - 2019',
        team: team2024_2025,
    },
    id2017_2018: {
        id: '2017-2018',
        label: '2017 - 2018',
        team: team2024_2025,
    },
}
