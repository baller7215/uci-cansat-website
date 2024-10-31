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
    // {
    //     label: "2022 - 2023",
    //     route: "/team/2022-2023",
    //     image: '',
    // },
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
        label: "Our Projects",
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
    // {
    //     label: "2022 - 2023",
    //     route: "/projects/2022-2023",
    //     image: '',
    // },
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
        label: 'See Our Sponsors',
        route: '/sponsors#overview',
    },
    {
        label: 'Why Sponsor Us',
        route: '/sponsors#whySponsorUs',
    },
    {
        label: 'Sponsorship Tiers',
        route: '/sponsors#sponsorshipTiers',
    },
];

export const updateLinks = [
    {
        label: 'Featured News',
        route: '/updates#overview',
    },
    {
        label: 'News Archive',
        route: '/updates#archive',
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
        profileImg: '/assets/images/management/rangel.jpeg',
    },
    {
        name: 'Professor Hassaan',
        role: 'Faculty Co-Advisor',
        profileImg: '/assets/images/management/hassaan.jpeg',
    },
    {
        name: 'Kaylee Kim',
        role: 'Team Lead',
        profileImg: '/assets/images/management/kaylee.png',
    },
    {
        name: 'Khushi Gupta',
        role: 'Electrical Lead',
        profileImg: '/assets/images/management/khushi.JPG',
    },
    {
        name: 'Sarah Ho',
        role: 'Mechanical Lead',
        profileImg: '/assets/images/management/sarah.JPG',
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
            profileImg: '/assets/images/team/2024-2025/rangel.jpeg',
        },
        {
            name: 'Professor Hassaan',
            role: 'Faculty Co-Advisor',
            profileImg: '/assets/images/team/2024-2025/hassaan.jpeg',
        },
    ],
    management: [
        {
            name: 'Kaylee Kim',
            role: 'Team Lead',
            profileImg: '/assets/images/team/2024-2025/kaylee.png',
            github: '',
            linkedin: 'https://www.linkedin.com/in/kayleesk/',
            major: 'Mathematics / Mechanical Engineering',
            gradYear: '2026',
            description: "Hi, I'm Kaylee! I'm serving as UCI CanSat's Team Lead this year. I was on the Controls subteam last year, eventually serving as Lead Programmer. When I'm not working on CanSat, you can find me watering my plants or climbing at the gym :)"
        }
    ],
    executives: [],
    mechanical: [
        {
            name: 'Sarah Ho',
            role: 'Mechanical Lead',
            profileImg: '/assets/images/team/2024-2025/sarah.JPG',
            github: '',
            linkedin: '',
            major: 'Mechanical Engineering',
            gradYear: '2026',
            description: 'Hi, My name is Sarah! I am a fourth year Mechanical Engineering student and the Mechanical Lead for the 2024-2025 year. I will be overseeing the progress of the mechanical team as well as designing and fabricating the physical structure of the CanSat. '
        },
        {
            name: 'Dayeon Yoon',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2024-2025/diane.JPG',
            github: '',
            linkedin: 'http://www.linkedin.com/in/diane611',
            major: 'Aerospace Engineering',
            gradYear: '2026',
            description: "Hello! I'm Dayeon (also known as Diane), a Mechanical Subteam Engineer at UCI Cansat. My passion for aerospace engineering stems from a love of space physics theories, hands-on teamwork, and a fascination with fighter jets. Along with my passion, I would love to further leverage my engineering skills through being part of the UCI Cansat Team!"
        },
        {
            name: 'Andrei Darjuan',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2024-2025/andrei.jpeg',
            github: '',
            linkedin: 'https://www.linkedin.com/in/andrei-darjuan-088796224/',
            major: 'Mechanical Engineering',
            gradYear: '2026',
            description: "My name is Andrei and I am a mechanical engineer for UCI CanSat. Some of my responsibilities on CanSat consist of designing and fabricating the structural components of our satellite and ensuring that it can withstand the mechanical stresses throughout the various stages of the mission. Other roles include material selection and integrating the satellite's hardware components, as well as conducting tests such as FEA and CFD to analyze and optimize the CanSat's structure and functionality."
        },
        {
            name: 'Felix Jing',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2024-2025/felix.jpg',
            github: '',
            linkedin: 'http://linkedin.com/in/felixjing',
            major: 'Mechanical Engineering',
            gradYear: '2028',
            description: 'With 9 years of robotics experience and over 40 unique robots built, I have led my Beckman High School VEX Robotics team to win three California State Championships. I also compete in BattleBots, a 250lb combat robotics competition, where my team ranked among the world’s top 8 teams in both 2021 and 2022. Currently, I am engineering the nosecone release mechanisms, landing gear, and flywheel to maintain CanSat rotational stability. '
        },   
    ],
    electrical: [
        {
            name: 'Khushi Gupta',
            role: 'Electrical Lead',
            profileImg: '/assets/images/team/2024-2025/khushi.JPG',
            github: '',
            linkedin: 'https://www.linkedin.com/in/khushi-gupta-45a9871a4/',
            major: 'Electrical Engineering',
            gradYear: '2025',
            description: 'Hello! My name is Khushi and I am a senior at UCI studying Electrical Engineering with a specialization in Circuit Design. I am currently serving as the Electrical Lead for the 2024-2025 year and will be working on designing the PCB that will the utilized for the competition!'
        },
        {
            name: 'Naethan Fajarito',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2024-2025/naethan.jpg',
            github: '',
            linkedin: 'https://www.linkedin.com/in/naethanf2001/',
            major: 'Computer Engineering',
            gradYear: '2025',
            description: "I'm a Computer Engineering major with a strong passion for hands-on projects. As part of the CanSat electrical team, I'm responsible for designing and implementing PCBs to support our embedded systems."
        },
        {
            name: 'Timothy Yee',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2024-2025/timothy.jpg',
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
            profileImg: '/assets/images/team/2024-2025/brady.JPG',
            github: 'https://github.com/BradyCason',
            linkedin: 'https://www.linkedin.com/in/brady-cason/',
            major: 'Computer Science and Engineering',
            gradYear: '2027',
            description: 'My name is Brady, and I am the lead Software Engineer for the project. I am in charge of programming the Ground Station and In-Flight Software, keeping the Controls team on track to hit deadlines, and communicating progress with other sub-teams.'
        },
        {
            name: 'Zhanhao Ruan',
            role: 'Software Engineer',
            profileImg: '/assets/images/team/2024-2025/zhanhao.jpg',
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
            profileImg: '/assets/images/team/2024-2025/satvika.jpg',
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
            profileImg: '/assets/images/team/2024-2025/leo.jpg',
            github: 'https://github.com/baller7215',
            linkedin: 'http://www.linkedin.com/in/leonardo-siu',
            major: 'Computer Science / Informatics',
            gradYear: '2027',
            description: "Hey, my name is Leo! As the Web Developer, I lead the design, development, and maintenance of the team's website, ensuring it aligns with the team's vision and branding. Outside of CanSat, you can find me strolling around Aldridge Park or taking photos with my camera."
        }
    ]
}

export const team2023_2024 = {
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Primary Faculty Advisor',
            profileImg: '/assets/images/team/2023-2024/rangel.jpeg',
        },
        {
            name: 'Professor Hassaan',
            role: 'Faculty Co-Advisor',
            profileImg: '/assets/images/team/2023-2024/hassaan.jpeg',
        },
    ],
    management: [
        {
            name: 'Ryan Liu',
            role: 'Team Lead',
            profileImg: '/assets/images/team/2023-2024/ryan.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        }
    ],
    executives: [],
    mechanical: [
        {
            name: 'Jeremy Rose',
            role: 'Mechanical Lead',
            profileImg: '/assets/images/team/2023-2024/jeremy.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Sunny Lin',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2023-2024/sunny.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Jerome Masicat',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2023-2024/jerome.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Sarah Ho',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2023-2024/sarah.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
    ],
    electrical: [
        {
            name: 'Jackie Lai',
            role: 'Electrical Lead',
            profileImg: '/assets/images/team/2023-2024/jackie.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'AJ Smyth',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2023-2024/aj.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Khushi Gupta',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2023-2024/khushi.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    controls: [
        {
            name: 'Husain Wafaie',
            role: 'Software Lead',
            profileImg: '/assets/images/team/2023-2024/husain.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Kaylee Kim',
            role: 'Software Engineer',
            profileImg: '/assets/images/team/2023-2024/kaylee.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
    ],
    operations: [
        {
            name: 'Laila Wafaie',
            role: 'Operations Lead',
            profileImg: '/assets/images/team/2023-2024/laila.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Allison Serrano',
            role: 'Operations Member',
            profileImg: '/assets/images/team/2023-2024/allison.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        }
    ],
    webDev: [
        {
            name: 'Clara Chen',
            role: 'Website Developer Lead',
            profileImg: '/assets/images/team/2023-2024/clara.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Lana Ramadan',
            role: 'Website Developer',
            profileImg: '/assets/images/team/2023-2024/lana.jpeg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        }
    ]
}

export const team2022_2023 = {
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Advisor',
            profileImg: '/assets/images/team/2022-2023/rangel.jpg',
        }
    ],
    management: [],
    executives: [],
    mechanical: [
        {
            name: 'Jolie White',
            role: 'Mechanical Lead',
            profileImg: '/assets/images/team/2022-2023/jolie.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Audrey Ashenfelder',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2022-2023/audrey.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Jenna Dehn',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2022-2023/jenna.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Zhihao Liu',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2022-2023/zhihao.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
    ],
    electrical: [
        {
            name: 'Donovan Trujillo',
            role: 'Electrical Lead',
            profileImg: '/assets/images/team/2022-2023/donovan.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'AJ Smyth',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2022-2023/ryan.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Jacqueline Lai',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2022-2023/jacqueline.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    controls: [
        {
            name: 'Sanghyun Byun',
            role: 'Software Lead',
            profileImg: '/assets/images/team/2022-2023/sanghyun.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        }
    ],
    operations: [
        {
            name: 'Camila Fernandez',
            role: 'Project Manager',
            profileImg: '/assets/images/team/2022-2023/camila.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    webDev: []
}

export const team2021_2022 = {
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Advisor',
            profileImg: '/assets/images/team/2021-2022/rangel.jpg',
        }
    ],
    management: [],
    executives: [],
    mechanical: [
        {
            name: 'Camila Fernandez',
            role: 'Mechanical Lead',
            profileImg: '/assets/images/team/2021-2022/camila.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Andy Roja',
            role: 'Mechanical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Matthew Ives',
            role: 'Mechanical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Shixi Jin',
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
            name: 'Oscar Castro',
            role: 'Electrical Lead',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Ryan Chum',
            role: 'Electrical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Tsion Desta',
            role: 'Electrical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    controls: [
        {
            name: 'Ian Cumming',
            role: 'Controls Lead',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Ryan Chum',
            role: 'Software Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Tsion Desta',
            role: 'Software Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    operations: [
        {
            name: 'Dustin Klein Ngo',
            role: 'Project Manager',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    webDev: []
}

export const team2020_2021 = {
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Advisor',
            profileImg: '/assets/images/team/2020-2021/rangel.jpg',
        }
    ],
    management: [],
    executives: [],
    mechanical: [
        {
            name: 'Andrew Zhao',
            role: 'Mechanical Lead',
            profileImg: '/assets/images/team/2020-2021/andrew.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Joshua Brusa',
            role: 'Mechanical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Thomas Slagle',
            role: 'Mechanical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Tyler Wong',
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
            name: 'Alan Wong',
            role: 'Electrical Lead',
            profileImg: '/assets/images/team/2020-2021/alan.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Briggs Judd',
            role: 'Electrical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Ian Cumming',
            role: 'Electrical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Oscar Castro',
            role: 'Electrical Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    controls: [
        {
            name: 'Alan Wong',
            role: 'Software Lead',
            profileImg: '/assets/images/team/2020-2021/alan.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Briggs Judd',
            role: 'Software Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Ian Cumming',
            role: 'Software Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Oscar Castro',
            role: 'Software Engineer',
            profileImg: '',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    operations: [
        {
            name: 'Brandon Wong',
            role: 'Project Manager',
            profileImg: '/assets/images/team/2020-2021/brandon.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    webDev: []
}

export const team2019_2020 = {
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Advisor',
            profileImg: '/assets/images/team/2019-2020/rangel.jpg',
        }
    ],
    management: [],
    executives: [
        {
            name: 'Jonathan Cheng',
            role: 'Project Manager',
            profileImg: '/assets/images/team/2019-2020/jonathan.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Joseph Hylak',
            role: 'Chief Engineer',
            profileImg: '/assets/images/team/2019-2020/joseph.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Edwin Madrigal',
            role: 'Hardware Lead',
            profileImg: '/assets/images/team/2019-2020/edwin.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
    ],
    mechanical: [
        {
            name: 'Andrew Zhao',
            role: 'Mechanical Lead',
            profileImg: '/assets/images/team/2019-2020/andrew.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Brandon Wong',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2019-2020/brandon.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'C.J. Sloan',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2019-2020/cj.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    electrical: [
        {
            name: 'Jack Wilson',
            role: 'Electrical Lead',
            profileImg: '/assets/images/team/2019-2020/jack.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Alan Wong',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2019-2020/alan.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Jonathan Low',
            role: 'Electrical Engineer',
            profileImg: '/assets/images/team/2019-2020/jonathan-low.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    controls: [
        {
            name: 'Jack Wilson',
            role: 'Software Lead',
            profileImg: '/assets/images/team/2019-2020/jack.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Alan Wong',
            role: 'Software Engineer',
            profileImg: '/assets/images/team/2019-2020/alan.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Jonathan Low',
            role: 'Software Engineer',
            profileImg: '/assets/images/team/2019-2020/jonathan-low.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    operations: [],
    webDev: []
}

export const team2018_2019 = {
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Advisor',
            profileImg: '/assets/images/team/2018-2019/rangel.jpg',
        }
    ],
    management: [],
    executives: [
        {
            name: 'Alex Movsesyan',
            role: 'Software Lead',
            profileImg: '/assets/images/team/2018-2019/alex.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Amy Huynh',
            role: 'Operations Lead',
            profileImg: '/assets/images/team/2018-2019/amy.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Emiko Soroka',
            role: 'Hardware Lead',
            profileImg: '/assets/images/team/2018-2019/emiko.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
    ],
    mechanical: [
        {
            name: 'Andrew Zhao',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2018-2019/andrew.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Edwin Madrigal',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2018-2019/edwin.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Jonathan Cheng',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2018-2019/jonathan.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Joseph Hylak',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2018-2019/joseph.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Owen Browne',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2018-2019/owen.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Partha Shah',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2018-2019/partha.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    electrical: [],
    controls: [
        {
            name: 'Partha Shah',
            role: 'Software Engineer',
            profileImg: '/assets/images/team/2018-2019/partha.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Ryan Parel',
            role: 'Software Engineer',
            profileImg: '/assets/images/team/2018-2019/ryan.jpg',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    operations: [],
    webDev: []
}

export const team2017_2018 = {
    advisors: [
        {
            name: 'Professor Rangel',
            role: 'Advisor',
            profileImg: '/assets/images/team/2017-2018/rangel.jpg',
        }
    ],
    management: [],
    executives: [
        {
            name: 'Emiko Soroka',
            role: 'Mechanical Lead',
            profileImg: '/assets/images/team/2017-2018/emiko.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Allan Shtof',
            role: 'Controls Lead',
            profileImg: '/assets/images/team/2017-2018/allan.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'An Bao Nguyen',
            role: 'Telemetry Lead',
            profileImg: '/assets/images/team/2017-2018/an.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
    ],
    mechanical: [
        {
            name: 'Amy Huynh',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2017-2018/amy.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ''
        },
        {
            name: 'Bryan Nguyen',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2017-2018/bryan.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Jose Loli',
            role: 'Mechanical Engineer',
            profileImg: '/assets/images/team/2017-2018/jose.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    electrical: [],
    controls: [
        {
            name: 'Khoi Trinh',
            role: 'Controls Engineer',
            profileImg: '/assets/images/team/2017-2018/khoi.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
        {
            name: 'Sevag Shirinian',
            role: 'Controls Engineer',
            profileImg: '/assets/images/team/2017-2018/sevag.png',
            github: '',
            linkedin: '',
            major: '',
            gradYear: '',
            description: ""
        },
    ],
    operations: [],
    webDev: []
}



// projects
// 2024 - 2025

// 2023 - 2024
export const project2023_2024 = {
    overview: {
        // public/assets/images/competiton-photos/verticalLaunch.jpg
        team: "/assets/images/competiton-photos/verticalLaunch.jpg", //team photo
        description: "Fall Quarter: Focused on research, design work, and developing the Preliminary Design Report (PDR). Software development concentrated on creating a ground station capable of receiving and displaying telemetry data from the CanSat’s sensors, while the hardware team worked on electrical and mechanical prototype designs.\nWinter Quarter: Dedicated to preparing and practicing for the Preliminary Design Review (PDR) presentation, with all subteams refining their work to meet competition standards. \nSpring Quarter: Implemented the designs into physical solutions, including ordering electrical components, assembling container segments, and testing the system’s performance to ensure compliance with competition requirements"
    },
    projectDefinition: {
        planning: "Telemetry, an automated communication process for remotely measuring and monitoring data, has evolved significantly since its inception in aerospace during the 1930s. The CanSat competition, sponsored by the American Astronautical Society (AAS), offers students the opportunity to engage in the complete lifecycle of a telemetry payload system. The competition challenges university teams to design, build, and deploy a space-related system according to specific guidelines, culminating in a competitive launch at the end of the academic year.",
        problemStatement: "The mission requires designing a container deployable from a rocket, with controlled descent rates using parachutes. The container must descend at 15m/s above 400m and at 5m/s below 400m. At 300m, a payload attached by a 10-meter tether must deploy, descending at 0.5m/s, while maintaining a specific camera orientation. Throughout the descent, the container should report telemetry data."
    },
    design: {
        majorComponents: {
            description: "The overall design consists of three key components in order for the CanSat to function effectively. They are separated into the three parts that make up the CanSat.",
            bulletPoints: [
                {
                    id: 1,
                    text: "The first part of the CanSat is the top cap. The purpose of the top cap is to stow both the first and second parachutes for deployment at their specific altitudes in order to slow down the descent rate of the CanSat. The key component in the top cap is the secondary parachute deployment mechanism."
                },
                {
                    id: 2,
                    text: "The second part is the body. Is it the middle cylinder that connects both the top cap and the payload (third component). It is the largest part which is used to house the pulley system, the key component of the body, which is used to deploy the payload via 10 meter long tether(s)."
                },
                {
                    id: 3,
                    text: "The third part is its own key component: the payload. The payload is the “cargo” of the CanSat which sits at the bottom of the CanSat. It houses a camera that requires a very specific orientation (cardinal direction and angle) along with its necessary electronics."
                }
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
        ourWorks: {
            mechanical: {
                name: "Mechanical",
                description: "The mechanical team was responsible for designing all structural components of the CanSat, which can be described by seven different subsystems. These include: Nose Cone (also functions as the heat shield), Landing Gear, Electronics Compartment, Egg Protection, Grid Fins, Streamer Release, and Parachute Release. During the competition, each of these subsystems serve a specific function in order to comply with a certain requirement, which gives us points towards our final ranking. Our job this year was to design, fabricate, test, (and redesign) each of these subsystems until they functioned reliably and robustly, and then integrate them into a full structure.",
                image: "/assets/images/projects/2023-2024/mechanical.png"
            },
            electrical: {
                name: "Electrical",
                description: "The electrical team was responsible for developing the avionics printed circuit board (PCB). This PCB connects various sensors and actuators, GPS, and radio to the main microcontroller (an STM32F1). After outlining requirements, conducting trade studies, and selecting components, we began designing the PCB in Altium Designer. We went through three iterations in total, reducing weight, improving RF performance, and making small mechanical improvements along the way. We hand soldered all PCBs to reduce the cost of the iterative process we followed. As part of this process, we focused on first developing a minimum viable product (achieved in revision two) so that we would be able to launch should any following revisions fail. Thankfully, all of the improvements we implemented in revision three were executed successfully, and we plan to launch with this version.",
                image: "/assets/images/projects/2023-2024/electrical.png"
            },
            controls: {
                name: "Controls",
                description: "The controls subteam focused on designing and implementing the ground station program using PyQt5, adhering to the CanSat competition mission guide. The ground station interface, which includes commands like “Activate Heatshield” and “Activate Parachute,” communicates with the CanSat, displays received data, and controls operations. A “Simulation Mode” was also developed to test functionalities by mimicking flight data. Real-time data graphs on the ground station were designed and implemented using PyQtGraphs. Another main controls task is developing embedded systems for the CanSat payload using the electrical schematics provided by the electrical subteam. The embedded software, written in C, will run on the STM32 microcontroller.",
                image: "/assets/images/projects/2023-2024/controls.png"
            }
        }
    },
    posters: {
        fall: "",
        winter: ""
    }
}

export const project2021_2022 = {
    overview: {
        team: "/assets/images/competiton-photos/verticalLaunch.jpg", //team photo
        description: "Fall Quarter: consisted mostly of researching and design work, where we worked to complete the design for prototyping the preliminary design report which is additional documentation that the team needs to complete for the competition. Software development focused on creating a ground station capable of receiving and displaying telemetry data from the CanSat’s sensors, while hardware focused on having electrical and mechanical prototype designs for the following quarter to test.\n\nWinter quarter was dedicated to practicing our presentation for the Competitions Preliminary Design Review (PDR). All subteams worked focused on their forces to complete the presentation and practice presentation times.\n\nThis Spring quarter involved us finally taking all our research and designing over the past year and implementing them into a physical solution. Electrical components were ordered, container segments were printed and assembled, and the various performances of our design were tested to verify requirements compliance."
    },
    projectDefinition: {
        planning: "Telemetry, an automated communication process for remotely measuring and monitoring data, has evolved significantly since its inception in aerospace during the 1930s. The CanSat competition, sponsored by the American Astronautical Society (AAS), offers students the opportunity to engage in the complete lifecycle of a telemetry payload system. The competition challenges university teams to design, build, and deploy a space-related system according to specific guidelines, culminating in a competitive launch at the end of the academic year.",
        problemStatement: "Design a container that will be stored in and deployed from a rocket. The container should have predetermined descent rates based on altitude, controlled by a total of 2 parachutes: at above 400m, the container should descend at 15m/s, at below 400m, the container should descend at 5m/s. At 300m, the container should deploy a payload, attached to the container by a tether and consisting of a camera, at a decent rate of 0.5m/s, until the payload is 10m away from the container. The camera from the payload should face South and 45 degrees below the horizon at all times. The container should report telemetry while descending."
    },
    design: {
        majorComponents: {
            description: "The overall design consists of three key components in order for the CanSat to function effectively. They are separated into the three parts that make up the CanSat.",
            bulletPoints: [
                {
                    id: 1,
                    text: "The first part of the CanSat is the top cap. The purpose of the top cap is to stow both the first and second parachutes for deployment at their specific altitudes in order to slow down the descent rate of the CanSat. The key component in the top cap is the secondary parachute deployment mechanism."
                },
                {
                    id: 2,
                    text: "The second part is the body. Is it the middle cylinder that connects both the top cap and the payload (third component). It is the largest part which is used to house the pulley system, the key component of the body, which is used to deploy the payload via 10 meter long tether(s)."
                },
                {
                    id: 3,
                    text: "The third part is its own key component: the payload. The payload is the “cargo” of the CanSat which sits at the bottom of the CanSat. It houses a camera that requires a very specific orientation (cardinal direction and angle) along with its necessary electronics."
                }
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
        ourWorks: {
            mechanical: {
                name: "",
                description: "",
                image: "",
                // name: "Mechanical",
                // description: "The mechanical team was responsible for designing all structural components of the CanSat, which can be described by seven different subsystems. These include: Nose Cone (also functions as the heat shield), Landing Gear, Electronics Compartment, Egg Protection, Grid Fins, Streamer Release, and Parachute Release. During the competition, each of these subsystems serve a specific function in order to comply with a certain requirement, which gives us points towards our final ranking. Our job this year was to design, fabricate, test, (and redesign) each of these subsystems until they functioned reliably and robustly, and then integrate them into a full structure.",
                // image: "/assets/images/projects/2023-2024/mechanical.png"
            },
            electrical: {
                name: "",
                description: "",
                image: "",
                // name: "Electrical",
                // description: "The electrical team was responsible for developing the avionics printed circuit board (PCB). This PCB connects various sensors and actuators, GPS, and radio to the main microcontroller (an STM32F1). After outlining requirements, conducting trade studies, and selecting components, we began designing the PCB in Altium Designer. We went through three iterations in total, reducing weight, improving RF performance, and making small mechanical improvements along the way. We hand soldered all PCBs to reduce the cost of the iterative process we followed. As part of this process, we focused on first developing a minimum viable product (achieved in revision two) so that we would be able to launch should any following revisions fail. Thankfully, all of the improvements we implemented in revision three were executed successfully, and we plan to launch with this version.",
                // image: "/assets/images/projects/2023-2024/electrical.png"
            },
            controls: {
                name: "",
                description: "",
                image: "",
                // name: "Controls",
                // description: "The controls subteam focused on designing and implementing the ground station program using PyQt5, adhering to the CanSat competition mission guide. The ground station interface, which includes commands like “Activate Heatshield” and “Activate Parachute,” communicates with the CanSat, displays received data, and controls operations. A “Simulation Mode” was also developed to test functionalities by mimicking flight data. Real-time data graphs on the ground station were designed and implemented using PyQtGraphs. Another main controls task is developing embedded systems for the CanSat payload using the electrical schematics provided by the electrical subteam. The embedded software, written in C, will run on the STM32 microcontroller.",
                // image: "/assets/images/projects/2023-2024/controls.png"
            }
        }
    },
    posters: {
        fall: "/assets/images/projects/2021-2022/AntSat Fall Design Review 2021.pptx.png",
        winter: "/assets/images/projects/2021-2022/AntSat Winter Design Review 2022.pptx.png"
    }
}



// sponsors
export const sponsors = [
    {
        label: "Blue Origin",
        route: "https://www.blueorigin.com/",
        image: "/assets/images/sponsors/blueOrigin.png",
    },
    {
        label: "Nxbeam",
        route: "https://www.nxbeam.com/",
        image: "/assets/images/sponsors/nxbeam.png",
    },
    {
        label: "",
        route: "",
        image: ""
    },
    {
        label: "",
        route: "",
        image: ""
    }
]

export const whySponsorUs = {
    description: "By becoming a sponsor, you will be contributing to the next generation of engineers by granting them the opportunity to attain valuable, hands-on experience and expand their critical thinking skills. As a sponsor, you will connect with the motivated and talented students on our team and increase your company’s visibility at UC Irvine.",
    reasons: [
        {
            title: "be part of an emerging story",
            description: "UCI CanSat is a young and vibrant team. As an emerging group in the CanSat competition landscape, your sponsorship provides a unique opportunity to be part of an inspiring underdog story.",
        },
        {
            title: "local and educational impact",
            description: "While we may not have a broad global reach, our impact is deeply felt within the UCI community and its surrounding areas. Your sponsorship not only elevates our project but also contributes to local educational enrichment and workforce development.",
        },
        {
            title: "invest in future innovators",
            description: "Our small team size ensures that every member is highly engaged and plays a critical role in the project. By sponsoring us, you're investing in dedicated individuals who are the future of aerospace engineering and related fields.",
        },
        {
            title: "exclusive sponsor benefits",
            description: "We provide other unique perks, such as placing your company's logo on our CanSat and including your branding in any publications or presentations.",
        }
    ]
}

export const sponsorshipTiers = [
    {
        title: "Bronze",
        amount: "$200 - $500",
        benefits: [
            { text: "Shoutout on Social Media", checked: true },
            { text: "Logo on Website", checked: true },
            { text: "Logo on University / Competition Presentation Materials", checked: true },
            { text: "Logo on UCI CanSat Uniform", checked: false },
            { text: "Resume List", checked: false },
            { text: "Speaker Event / Lab Visit", checked: false }
        ],
    },
    {
        title: "Silver",
        amount: "$500 - $1000",
        benefits: [
            { text: "Shoutout on Social Media", checked: true },
            { text: "Logo on Website", checked: true },
            { text: "Logo on University / Competition Presentation Materials", checked: true },
            { text: "Logo on UCI CanSat Uniform", checked: true },
            { text: "Resume List", checked: true },
            { text: "Speaker Event / Lab Visit", checked: false }
        ],
    },
    {
        title: "Gold",
        amount: "$1000+",
        benefits: [
            { text: "Shoutout on Social Media", checked: true },
            { text: "Logo on Website", checked: true },
            { text: "Logo on University / Competition Presentation Materials", checked: true },
            { text: "Logo on UCI CanSat Uniform", checked: true },
            { text: "Resume List", checked: true },
            { text: "Speaker Event / Lab Visit", checked: true }
        ],
    }
]




// updates / news
export const featuredNews = [
    {
        title: "UCI Samueli School of Engineering",
        subtitle: "Anteater CanSat Team Takes Second Place in U.S., Fourth Worldwide",
        date: "July 11, 2024",
        image: "/assets/images/news/anteater-cansat-team.jpeg",
        route: "https://engineering.uci.edu/news/2024/7/anteater-cansat-team-takes-second-place-us-fourth-worldwide"
    },
    {
        title: "UCI Giving Day 2024",
        subtitle: "CanSat Student Group",
        date: "",
        image: "/assets/images/news/giving-day-2024.jpeg",
        route: "https://givingday.uci.edu/giving-day/80306/department/89677"
    }
]

export const updates = [
    {
        title: "UCI Samueli School of Engineering",
        subtitle: "Anteater CanSat Team Takes Second Place in U.S., Fourth Worldwide",
        date: "July 11, 2024",
        image: "/assets/images/news/anteater-cansat-team.jpeg",
        route: "https://engineering.uci.edu/news/2024/7/anteater-cansat-team-takes-second-place-us-fourth-worldwide"
    },
    {
        title: "UCI Giving Day 2024",
        subtitle: "CanSat Student Group",
        date: "",
        image: "/assets/images/news/giving-day-2024.jpeg",
        route: "https://givingday.uci.edu/giving-day/80306/department/89677"
    },
    {
        title: "",
        subtitle: "",
        date: "",
        image: "",
        route: "",
    },
    {
        title: "",
        subtitle: "",
        date: "",
        image: "",
        route: "",
    }
]



// join us with team / subteam information
export const internshipInfo = {
    responsibilities: [
        {
            title: "Learn how to operate a 3D printer/soldering iron",
            // description: "UCI CanSat is a young and vibrant team. As an emerging group in the CanSat competition landscape, your sponsorship provides a unique opportunity to be part of an inspiring underdog story.",
        },
        {
            title: "Observe the progress and engineering design of their associated subteam",
            // description: "While we may not have a broad global reach, our impact is deeply felt within the UCI community and its surrounding areas. Your sponsorship not only elevates our project but also contributes to local educational enrichment and workforce development.",
        },
        {
            title: "Keep the lab space clean and organized; learn about lab safety",
            // description: "Our small team size ensures that every member is highly engaged and plays a critical role in the project. By sponsoring us, you're investing in dedicated individuals who are the future of aerospace engineering and related fields.",
        },
        {
            title: "Occasionally present progress at general meetings",
            // description: "We provide other unique perks, such as placing your company's logo on our CanSat and including your branding in any publications or presentations.",
        },
        {
            title: "ask questions"
        }
    ]
}

export const generalPathway = {
    info: [
        {
            title: "Team Environment",
            description: "Work in a close-knit team of around 10 Engineering members and approximately 5 Operations/Web Development members. Collaborate to achieve team goals and deliverables."
        },
        {
            title: "Meeting Schedule",
            description: "Attend weekly general meetings and subteam-specific meetings.",
        },
        {
            title: "Presentation Preparation",
            description: "Engineering members are expected to present at the Preliminary Design Review (PDR) and Critical Design Review (CDR)."
        },
        {
            title: "Competition Attendance",
            description: "Attend the final competition in Virginia, if possible."
        },
    ],
    requirements: [
        {
            title: "Minimum GPA",
            description: "3.3 (exceptions may be made for highly skilled candidates)",
        },
        {
            title: "Commitment",
            description: "Three-Quarter commitment (2024 Fall, 2025 Winter, 2025 Spring)",
        },
        {
            title: "Course Enrollmentt",
            description: "Must enroll in 2-4 units of MAE 93 for school credit"
        },
        {
            title: "Personal Attributes",
            description: "Personal Attributes: Strong work ethic, commitment to team goals, willingness to learn, strong writing, and communication skills."
        }
    ]
}

export const mechanicalPathway = {
    responsibilities: {
        description: "Design, fabricate, assemble, and test the mechanical structure, mechanisms, and descent control devices of the CanSat.",
        bullets: [
            {
                title: "Fall Quarter",
                description: "Focus on creating the mechanical design using Solidworks, primarily working individually with weekly team meetings.",
            },
            {
                title: "Winter Quarter",
                description: "Focus on 3D printing, manufacturing, and testing mechanisms. Attend lab sessions to manage prints, test, and assemble prototypes."
            },
            {
                title: "Spring Quarter",
                description: "Dedicate time to design iteration, testing, and finalizing the CanSat. Perform environmental tests including vacuum, thermal, vibration, and drop tests."
            }
        ]
    },
    requirements: [
        {
            title: "Recommended Majors",
            description: "Mechanical Engineering, Aerospace Engineering",
        },
        {
            title: "Recommended Courses",
            description: "ENGR 7A/B, MAE 106, MAE 52, MAE 189, MAE 195, MAE 30, MAE 80, MAE 130A/130B",
        },
        {
            title: "Skills",
            description: "Proficiency in Solidworks (required), experience with 3D printing and manufacturing, knowledge of basic aerodynamics, leadership, and time management skills."
        }
    ],
    testimonial: {
        name: "Name",
        year: "Year",
        role: "role",
        quote: "quote",
        // image: "",
    }
}

export const electricalPathway = {
    responsibilities: {
        description: "Develop the CanSat’s Electrical subsystem through Printed Circuit Board (PCB) development.",
        bullets: [
            {
                title: "",
                description: "Select appropriate power components to support all sensors and mechanical hardware.",
            },
            {
                title: "",
                description: "Design and develop custom PCBs, focusing on efficient layout, component selection, and power management."
            },
            {
                title: "",
                description: "Manage PCB manufacturing, assembly, and testing."
            },
            {
                title: "",
                description: "Test wireless data transmission and antenna performance.",
            },
            {
                title: "",
                description: "Coordinate with other teams to integrate electrical systems with mechanical and software components."
            }
        ]
    },
    requirements: [
        {
            title: "Recommended Majors",
            description: "Electrical Engineering, Computer Engineering, Computer Science and Engineering",
        },
        {
            title: "Recommended Courses",
            description: "EECS 70A",
        },
        {
            title: "Useful Courses",
            description: "EECS 70B, EECS 50 or 150, EECS 10",
        },
        {
            title: "Skills",
            description: "Experience with PCB/electrical design programs, soldering, electrical troubleshooting, lab equipment usage (e.g., oscilloscopes), preferred previous electrical design, and manufacturing experience."
        }
    ],
    testimonial: {
        name: "Name",
        year: "Year",
        role: "role",
        quote: "quote",
        image: "",
    }
}

export const softwarePathway = {
    responsibilities: {
        description: "Develop software systems for CanSat, including Ground Station, Flight Software, and Test Benches.",
        bullets: [
            {
                title: "",
                description: "Design and implement a Ground Station to communicate with CanSat.",
            },
            {
                title: "",
                description: "Collaborate with mechanical and electrical teams to test components using Arduino."
            },
            {
                title: "",
                description: "Develop embedded systems for the Payload using microcontrollers like STM32 or ESP32."
            },
            {
                title: "",
                description: "Perform integration testing to ensure functionality.",
            },
        ]
    },
    requirements: [
        {
            title: "Recommended Majors",
            description: "Computer Science, Computer Science and Engineering, Computer Engineering, Electrical Engineering",
        },
        {
            title: "Recommended Courses",
            description: "COMPSCI 145, COMPSCI 147, EECS 20",
        },
        {
            title: "Skills",
            description: "Proficiency in C/C++ Embedded Programming (required), familiarity with Git, experience with communication protocols (e.g., I2C), preferred radio communication experience."
        }
    ],
    testimonial: {
        name: "Name",
        year: "Year",
        role: "role",
        quote: "quote",
        image: "",
    }
}

export const operationsPathway = {
    responsibilities: {
        description: "Support the UCI CanSat team through outreach, event management, and operations.",
        bullets: [
            {
                title: "",
                description: "Coordinate outreach programs to promote the team’s mission.",
            },
            {
                title: "",
                description: "Organize events, workshops, and presentations for the UCI community and sponsors."
            },
            {
                title: "",
                description: "Assist in documentation, reporting, and communication tasks."
            },
            {
                title: "",
                description: "Represent the team at university events and competitions.",
            },
        ]
    },
    requirements: [
        {
            title: "Recommended Majors",
            description: "Business Administration, Business Information Management; Engineering/ICS majors with enthusiasm for tech are welcome.",
        },
        {
            title: "Skills",
            description: "Organizational and communication skills, ability to create promotional materials, collaborative mindset, finance management skills, preferred experience in outreach, event management, or operations."
        }
    ],
    testimonial: {
        name: "Name",
        year: "Year",
        role: "role",
        quote: "quote",
        image: "",
    }
}

export const webDevPathway = {
    responsibilities: {
        description: "Design, develop, and maintain the UCI CanSat team website.",
        bullets: [
            {
                title: "",
                description: "Ensure the website is mobile-responsive and optimized for various browsers.",
            },
            {
                title: "",
                description: "Collaborate with team members to gather content and align with the team’s brand."
            },
            {
                title: "",
                description: "Implement security measures to protect the website."
            },
            {
                title: "",
                description: "Regularly update the website with news, events, and team achievements.",
            },
        ]
    },
    requirements: [
        {
            title: "Recommended Majors",
            description: "Computer Science, Software Engineering",
        },
        {
            title: "Skills",
            description: "Experience with web design frameworks (e.g., React), strong visual design skills, problem-solving abilities, familiarity with web standards and accessibility best practices, preferred experience in UI/UX design and web design for teams or organizations."
        }
    ],
    testimonial: {
        name: "Name",
        year: "Year",
        role: "role",
        quote: "quote",
        image: "",
    }
}


// frequently asked questions
export const faq = [
    {
        id: 1,
        title: 'How can I apply?',
        content: "Unfortunately applications for the 2024 - 2025 year are now closed."
    },
    {
        id: 2,
        title: "Are there any requirements to joining?",
        content: "Requirements vary based on the subsystem. For more details, read the requirements of each pathway above.",
    },
    {
        id: 3,
        title: "What is the time commitment",
        content: "CanSat holds a weekly team meeting. This will be scheduled so everyone can attend without missing class. We also schedule engineering work time in 2 or 3-hour increments. These will be separated by subsystem (Mechanical, Electrical, Embdedded Systems). Expect to attend at least 1 session per week to work on hardware or software. You’re also encouraged to work independently when no sessions are scheduled. In general, please estimate 4 hours per week, per MAE 189 unit (most students take 2 units, or put in the equivalent hours)."
    },
    {
        id: 4,
        title: "When / Where is the competition?",
        content: "Each year, the competition is held in Virginia."
    },
    {
        id: 5,
        title: "What will I be doing each week?",
        content: "Different pathways work on different parts of the CanSat. For more details, read the description of each pathway."
    }
]


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
        team: team2023_2024,
        project: project2023_2024,
    },
    id2022_2023: {
        id: '2022-2023',
        label: '2022 - 2023',
        team: team2022_2023,
        project: project2023_2024,
    },
    id2021_2022: {
        id: '2021-2022',
        label: '2021 - 2022',
        team: team2021_2022,
        project: project2021_2022,
    },
    id2020_2021: {
        id: '2020-2021',
        label: '2020 - 2021',
        team: team2020_2021,
        project: project2023_2024,
    },
    id2019_2020: {
        id: '2019-2020',
        label: '2019 - 2020',
        team: team2019_2020,
        project: project2023_2024,
    },
    id2018_2019: {
        id: '2018-2019',
        label: '2018 - 2019',
        team: team2018_2019,
        project: project2023_2024,
    },
    id2017_2018: {
        id: '2017-2018',
        label: '2017 - 2018',
        team: team2017_2018,
        project: project2023_2024,
    },
}
