// navigation and routing
export const navLinks = [
    {
        label: "About",
        route: "/about",
        children: []
    //   icon: "/assets/icons/image.svg",
    },
    {
        label: 'Team',
        route: '/team',
        children: [
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
                image: '/assets/images/team/2018-2019/team.jpg',
            },
            {
                label: "2017 - 2018",
                route: "/team/2017-2018",
                image: '/assets/images/team/2017-2018/team.jpg',
            },
        ]
    },
    {
        label: "Projects",
        route: "/projects",
        children: [
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
            {
                label: "2019 - 2020",
                route: "/projects/2019-2020",
                image: '',
            },
            {
                label: "2018 - 2019",
                route: "/projects/2018-2019",
                image: '/assets/images/team/2018-2019/team.jpg',
            },
            {
                label: "2017 - 2018",
                route: "/projects/2017-2018",
                image: '/assets/images/team/2017-2018/team.jpg',
            },
        ]
    },
    {
        label: "Sponsors",
        route: "/sponsors",
        children: []
    //   icon: "/assets/icons/scan.svg",
    },
    {
        label: "Updates",
        route: "/updates",
        children: []
    //   icon: "/assets/icons/filter.svg",
    },
    {
        label: "Contact",
        route: "/contact",
        children: []
    //   icon: "/assets/icons/camera.svg",
    },

];
  
export const aboutLinks = [
    {
        label: "About Us",
        route: "/about",
        children: []
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
        image: '/assets/images/team/2018-2019/team.jpg',
    },
    {
        label: "2017 - 2018",
        route: "/team/2017-2018",
        image: '/assets/images/team/2017-2018/team.jpg',
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
    {
        label: "2019 - 2020",
        route: "/projects/2019-2020",
        image: '',
    },
    {
        label: "2018 - 2019",
        route: "/projects/2018-2019",
        image: '/assets/images/team/2018-2019/team.jpg',
    },
    {
        label: "2017 - 2018",
        route: "/projects/2017-2018",
        image: '/assets/images/team/2017-2018/team.jpg',
    },
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
        {
            name: 'Kaitlin Otsuka',
            role: 'Mechanical Engineer Intern',
            profileImg: '/assets/images/team/2024-2025/kaitlin.jpeg',
            github: '',
            linkedin: '',
            major: 'Mechanical Engineering',
            gradYear: '2028',
            description: 'Hello! My name is Kaitlin Otsuka, and I am a first-year mechanical engineering student at UC Irvine. This year I am serving as the intern for the mechanical subteam, where I will be helping the team through 3D printing, research, and presenting progress at meetings.'
        }
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
        {
            name: 'Carolynn Nguyen',
            role: 'Electrical Engineer Intern',
            profileImg: '/assets/images/team/2024-2025/carolynn.JPG',
            github: '',
            linkedin: 'https://www.linkedin.com/in/carolynn-nguyen-b47941287',
            major: 'Electrical Engineering',
            gradYear: '2028',
            description: 'Hello, my name is Carolynn Nguyen. I am a first-year electrical engineering student and this year’s Cansat electrical intern! I will be helping out the electrical subteam with various activities such as research, soldering, and presenting during meetings.'
        }
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
export const project2024_2025 = {
    overview: {
        // public/assets/images/competiton-photos/verticalLaunch.jpg
        team: "/assets/images/competiton-photos/verticalLaunch.jpg", //team photo
        description: "Fall Quarter: Focused on research, design work, and developing the Preliminary Design Report (PDR). Software development concentrated on creating a ground station capable of receiving and displaying telemetry data from the CanSat’s sensors, while the hardware team worked on electrical and mechanical prototype designs.\nWinter Quarter: Dedicated to preparing and practicing for the Preliminary Design Review (PDR) presentation, with all subteams refining their work to meet competition standards. \nSpring Quarter: Implemented the designs into physical solutions, including ordering electrical components, assembling container segments, and testing the system’s performance to ensure compliance with competition requirements"
    },
    projectDefinition: {
        show: true,
        planning: "Telemetry, an automated communication process for remotely measuring and monitoring data, has evolved significantly since its inception in aerospace during the 1930s. The CanSat competition, sponsored by the American Astronautical Society (AAS), offers students the opportunity to engage in the complete lifecycle of a telemetry payload system. The competition challenges university teams to design, build, and deploy a space-related system according to specific guidelines, culminating in a competitive launch at the end of the academic year.",
        problemStatement: "The mission requires designing a container deployable from a rocket, with controlled descent rates using parachutes. The container must descend at 15m/s above 400m and at 5m/s below 400m. At 300m, a payload attached by a 10-meter tether must deploy, descending at 0.5m/s, while maintaining a specific camera orientation. Throughout the descent, the container should report telemetry data.",
        image: "/assets/images/components/sicko_mode_vertical.jpg"
    },
    design: {
        show: true,
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
            show: true,
            mechanical: {
                name: "Mechanical",
                description: "The mechanical team was responsible for designing all structural components of the CanSat, which can be described by seven different subsystems. These include: Nose Cone (also functions as the heat shield), Landing Gear, Electronics Compartment, Egg Protection, Grid Fins, Streamer Release, and Parachute Release. During the competition, each of these subsystems serve a specific function in order to comply with a certain requirement, which gives us points towards our final ranking. Our job this year was to design, fabricate, test, (and redesign) each of these subsystems until they functioned reliably and robustly, and then integrate them into a full structure.",
                image: "/assets/images/projects/2023-2024/mechanical.png",
                model: null,
                caption: ""
            },
            electrical: {
                name: "Electrical",
                description: "The electrical team was responsible for developing the avionics printed circuit board (PCB). This PCB connects various sensors and actuators, GPS, and radio to the main microcontroller (an STM32F1). After outlining requirements, conducting trade studies, and selecting components, we began designing the PCB in Altium Designer. We went through three iterations in total, reducing weight, improving RF performance, and making small mechanical improvements along the way. We hand soldered all PCBs to reduce the cost of the iterative process we followed. As part of this process, we focused on first developing a minimum viable product (achieved in revision two) so that we would be able to launch should any following revisions fail. Thankfully, all of the improvements we implemented in revision three were executed successfully, and we plan to launch with this version.",
                image: "/assets/images/projects/2023-2024/electrical.png",
                model: "/assets/models/2024-2025/electrical/Image_to_STL_main.gltf",
                caption: "",
            },
            controls: {
                show: true,
                name: "Controls",
                description: "The controls subteam focused on designing and implementing the ground station program using PyQt5, adhering to the CanSat competition mission guide. The ground station interface, which includes commands like “Activate Heatshield” and “Activate Parachute,” communicates with the CanSat, displays received data, and controls operations. A “Simulation Mode” was also developed to test functionalities by mimicking flight data. Real-time data graphs on the ground station were designed and implemented using PyQtGraphs. Another main controls task is developing embedded systems for the CanSat payload using the electrical schematics provided by the electrical subteam. The embedded software, written in C, will run on the STM32 microcontroller.",
                image: "/assets/images/projects/2023-2024/controls.png"
            }
        },
        seniorSubsystem: {
            show: false,
            description: "",
            image: "",
            caption: ""
        },
        descentControl: {
            show: false,
            items: [
                {
                    name: "",
                    bullets: [],
                    image: "",
                }
            ]
        },
        mechanicalSubsystem: {
            show: false,
            image: "",
            description: "",
            items: [
                {
                    name: "",
                    bullets: []
                }
            ]
        },
        electricalPowerSubsystem: {
            show:false,
            image: "",
            caption: "",
            bullets: []
        },
        flightSoftware: {
            show: false,
            image: "",
            items: [
                {
                    name: "",
                    bullets: [],
                }
            ]
        },
        groundControlSystem: {
            show: false,
            leftImage: "",
            rightImage: "",
        }
    },
    competitionRequirements: {
        show: false,
        description: "",
        bullets: [
        ]
    },
    teamGoals: [],
    posters: {
        fall: "",
        winter: "",
        spring: "",
    }
}

// 2023 - 2024
export const project2023_2024 = {
    overview: {
        // public/assets/images/competiton-photos/verticalLaunch.jpg
        team: "/assets/images/competiton-photos/verticalLaunch.jpg", //team photo
        description: "Fall Quarter: Focused on research, design work, and developing the Preliminary Design Report (PDR). Software development concentrated on creating a ground station capable of receiving and displaying telemetry data from the CanSat’s sensors, while the hardware team worked on electrical and mechanical prototype designs.\nWinter Quarter: Dedicated to preparing and practicing for the Preliminary Design Review (PDR) presentation, with all subteams refining their work to meet competition standards. \nSpring Quarter: Implemented the designs into physical solutions, including ordering electrical components, assembling container segments, and testing the system’s performance to ensure compliance with competition requirements"
    },
    projectDefinition: {
        show: true,
        planning: "Telemetry, an automated communication process for remotely measuring and monitoring data, has evolved significantly since its inception in aerospace during the 1930s. The CanSat competition, sponsored by the American Astronautical Society (AAS), offers students the opportunity to engage in the complete lifecycle of a telemetry payload system. The competition challenges university teams to design, build, and deploy a space-related system according to specific guidelines, culminating in a competitive launch at the end of the academic year.",
        problemStatement: "The mission requires designing a container deployable from a rocket, with controlled descent rates using parachutes. The container must descend at 15m/s above 400m and at 5m/s below 400m. At 300m, a payload attached by a 10-meter tether must deploy, descending at 0.5m/s, while maintaining a specific camera orientation. Throughout the descent, the container should report telemetry data.",
        image: "/assets/images/components/sicko_mode_vertical.jpg"
    },
    design: {
        show: true,
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
            show: true,
            mechanical: {
                name: "Mechanical",
                description: "The mechanical team was responsible for designing all structural components of the CanSat, which can be described by seven different subsystems. These include: Nose Cone (also functions as the heat shield), Landing Gear, Electronics Compartment, Egg Protection, Grid Fins, Streamer Release, and Parachute Release. During the competition, each of these subsystems serve a specific function in order to comply with a certain requirement, which gives us points towards our final ranking. Our job this year was to design, fabricate, test, (and redesign) each of these subsystems until they functioned reliably and robustly, and then integrate them into a full structure.",
                image: "/assets/images/projects/2023-2024/mechanical.png",
                model: "/assets/models/2024-2025/mechanical/top_level.gltf",
                caption: ""
            },
            electrical: {
                name: "Electrical",
                description: "The electrical team was responsible for developing the avionics printed circuit board (PCB). This PCB connects various sensors and actuators, GPS, and radio to the main microcontroller (an STM32F1). After outlining requirements, conducting trade studies, and selecting components, we began designing the PCB in Altium Designer. We went through three iterations in total, reducing weight, improving RF performance, and making small mechanical improvements along the way. We hand soldered all PCBs to reduce the cost of the iterative process we followed. As part of this process, we focused on first developing a minimum viable product (achieved in revision two) so that we would be able to launch should any following revisions fail. Thankfully, all of the improvements we implemented in revision three were executed successfully, and we plan to launch with this version.",
                image: "/assets/images/projects/2023-2024/electrical.png",
                model: null,
                caption: "",
            },
            controls: {
                show: true,
                name: "Controls",
                description: "The controls subteam focused on designing and implementing the ground station program using PyQt5, adhering to the CanSat competition mission guide. The ground station interface, which includes commands like “Activate Heatshield” and “Activate Parachute,” communicates with the CanSat, displays received data, and controls operations. A “Simulation Mode” was also developed to test functionalities by mimicking flight data. Real-time data graphs on the ground station were designed and implemented using PyQtGraphs. Another main controls task is developing embedded systems for the CanSat payload using the electrical schematics provided by the electrical subteam. The embedded software, written in C, will run on the STM32 microcontroller.",
                image: "/assets/images/projects/2023-2024/controls.png"
            }
        },
        seniorSubsystem: {
            show: false,
            description: "",
            image: "",
            caption: ""
        },
        descentControl: {
            show: false,
            items: [
                {
                    name: "",
                    bullets: [],
                    image: "",
                }
            ]
        },
        mechanicalSubsystem: {
            show: false,
            image: "",
            description: "",
            items: [
                {
                    name: "",
                    bullets: []
                }
            ]
        },
        electricalPowerSubsystem: {
            show:false,
            image: "",
            caption: "",
            bullets: []
        },
        flightSoftware: {
            show: false,
            image: "",
            items: [
                {
                    name: "",
                    bullets: [],
                }
            ]
        },
        groundControlSystem: {
            show: false,
            leftImage: "",
            rightImage: "",
        }
    },
    competitionRequirements: {
        show: false,
        description: "",
        bullets: [
        ]
    },
    teamGoals: [],
    posters: {
        fall: "",
        winter: "",
        spring: "",
    }
}

export const project2021_2022 = {
    overview: {
        team: "/assets/images/competiton-photos/verticalLaunch.jpg", //team photo
        description: "Fall Quarter: consisted mostly of researching and design work, where we worked to complete the design for prototyping the preliminary design report which is additional documentation that the team needs to complete for the competition. Software development focused on creating a ground station capable of receiving and displaying telemetry data from the CanSat’s sensors, while hardware focused on having electrical and mechanical prototype designs for the following quarter to test.\n\nWinter quarter was dedicated to practicing our presentation for the Competitions Preliminary Design Review (PDR). All subteams worked focused on their forces to complete the presentation and practice presentation times.\n\nThis Spring quarter involved us finally taking all our research and designing over the past year and implementing them into a physical solution. Electrical components were ordered, container segments were printed and assembled, and the various performances of our design were tested to verify requirements compliance."
    },
    projectDefinition: {
        show: true,
        planning: "Telemetry, an automated communication process for remotely measuring and monitoring data, has evolved significantly since its inception in aerospace during the 1930s. The CanSat competition, sponsored by the American Astronautical Society (AAS), offers students the opportunity to engage in the complete lifecycle of a telemetry payload system. The competition challenges university teams to design, build, and deploy a space-related system according to specific guidelines, culminating in a competitive launch at the end of the academic year.",
        problemStatement: "Design a container that will be stored in and deployed from a rocket. The container should have predetermined descent rates based on altitude, controlled by a total of 2 parachutes: at above 400m, the container should descend at 15m/s, at below 400m, the container should descend at 5m/s. At 300m, the container should deploy a payload, attached to the container by a tether and consisting of a camera, at a decent rate of 0.5m/s, until the payload is 10m away from the container. The camera from the payload should face South and 45 degrees below the horizon at all times. The container should report telemetry while descending.",
        image: "/assets/images/components/sicko_mode_vertical.jpg"
    },
    design: {
        show: true,
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
            show: false,
            mechanical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            electrical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            controls: {
                show: false,
                name: "",
                description: "",
                image: "",
                // name: "Controls",
                // description: "The controls subteam focused on designing and implementing the ground station program using PyQt5, adhering to the CanSat competition mission guide. The ground station interface, which includes commands like “Activate Heatshield” and “Activate Parachute,” communicates with the CanSat, displays received data, and controls operations. A “Simulation Mode” was also developed to test functionalities by mimicking flight data. Real-time data graphs on the ground station were designed and implemented using PyQtGraphs. Another main controls task is developing embedded systems for the CanSat payload using the electrical schematics provided by the electrical subteam. The embedded software, written in C, will run on the STM32 microcontroller.",
                // image: "/assets/images/projects/2023-2024/controls.png"
            }
        },
        seniorSubsystem: {
            show: false,
            description: "",
            image: "",
            caption: ""
        },
        descentControl: {
            show: false,
            items: [
                {
                    name: "",
                    bullets: [],
                    image: "",
                }
            ]
        },
        mechanicalSubsystem: {
            show: false,
            image: "",
            description: "",
            items: [
                {
                    name: "",
                    bullets: []
                }
            ]
        },
        electricalPowerSubsystem: {
            show:false,
            image: "",
            caption: "",
            bullets: []
        },
        flightSoftware: {
            show: false,
            image: "",
            items: [
                {
                    name: "",
                    bullets: [],
                }
            ]
        },
        groundControlSystem: {
            show: false,
            leftImage: "",
            rightImage: "",
        }
    },
    competitionRequirements: {
        show: false,
        description: "",
        bullets: [
        ]
    },
    teamGoals: [],
    posters: {
        fall: "/assets/images/projects/2021-2022/AntSat Fall Design Review 2021.pptx.png",
        winter: "/assets/images/projects/2021-2022/AntSat Winter Design Review 2022.pptx.png",
        spring: "",
    }
}

export const project2020_2021 = {
    overview: {
        // public/assets/images/competiton-photos/verticalLaunch.jpg
        team: "", //team photo
        description: ""
    },
    projectDefinition: {
        show: true,
        planning: "This year’s mission is to design a container and two auto-rotating maple seed science payloads. The CanSat will be launched to 700m using a high-powered model rocket. The CanSat then descends using parachute at 15 m/s. At 500m, the first payload is released and the second payload will be released at 400m. These payloads will rotate and descend slower than 20 m/s. While descending, the container will collect its own telemetry as well as telemetry from both payloads.",
        problemStatement: "Our competition project involves designing and building a CanSat, consisting of a container and two science payloads that will descend from an altitude of 670 to 725 meters. The container and payload descend together at 15 m/s until 500 meters, where the first payload is released to rotate and descend at less than 20 m/s, followed by the release of the second payload at 400 meters. The payloads are equipped with sensors to measure air temperature, pressure, and rotation rate, transmitting data in real-time to the container, which relays it along with GPS, pressure, battery voltage, and an audio beacon. Our goal is to perform well in the CanSat Competition, ensure all teammates gain engineering design experience, and meet UCI's MAE Department requirements for senior design. The launch system is provided by the organizers, while we focus on CanSat and ground station design and construction.",
        image: "/assets/images/projects/2020-2021/mission.png"
    },
    design: {
        show: false,
        majorComponents: {
            description: "",
            bulletPoints: []
        },
        keyComponents: [],
        ourWorks: {
            show: true,
            mechanical: {
                name: "Mechanical",
                description: "The mechanical team completed designs and calculations for the container and payload. We calculated the descent velocities of the parachute and wrote python sizing scripts to estimate the size of the maple seed payloads to achieve the desired velocity that the competition required. In addition, we completed the SolidWorks 3D Models, drafted drawings, and ran FEA structural simulations on the container to withstand 15G launch acceleration and 30G shock.",
                image: "/assets/images/projects/2020-2021/mechanical.png",
                model: null,
                caption: "Figure: Container FEA Analysis"
            },
            electrical: {
                name: "Software / Electrical",
                description: "As for the software and electrical team, all electronics components (sensors, capacitors, resistors, ect.) have been selected and the container and payload PCB designs are completed. Firmware to read the sensor data and ground station is being completed. One of the prototype payload PCB boards have been completed and is currently being tested.",
                image: "/assets/images/projects/2020-2021/software-electrical.png",
                model: null,
                caption: "Figure: Payload PCB Rendering"
            },
            controls: {
                show: false,
                name: "Controls",
                description: "The controls subteam focused on designing and implementing the ground station program using PyQt5, adhering to the CanSat competition mission guide. The ground station interface, which includes commands like “Activate Heatshield” and “Activate Parachute,” communicates with the CanSat, displays received data, and controls operations. A “Simulation Mode” was also developed to test functionalities by mimicking flight data. Real-time data graphs on the ground station were designed and implemented using PyQtGraphs. Another main controls task is developing embedded systems for the CanSat payload using the electrical schematics provided by the electrical subteam. The embedded software, written in C, will run on the STM32 microcontroller.",
                image: "/assets/images/projects/2023-2024/software-electrical.png"
            }
        },
        seniorSubsystem: {
            show: false,
            description: "",
            image: "",
            caption: ""
        },
        descentControl: {
            show: false,
            items: [
                {
                    name: "",
                    bullets: [],
                    image: "",
                }
            ]
        },
        mechanicalSubsystem: {
            show: false,
            image: "",
            description: "",
            items: [
                {
                    name: "",
                    bullets: []
                }
            ]
        },
        electricalPowerSubsystem: {
            show:false,
            image: "",
            caption: "",
            bullets: []
        },
        flightSoftware: {
            show: false,
            image: "",
            items: [
                {
                    name: "",
                    bullets: [],
                }
            ]
        },
        groundControlSystem: {
            show: false,
            leftImage: "",
            rightImage: "",
        }
    },
    competitionRequirements: {
        show: true,
        description: "While there are 66 requirements published by the CanSat Competition. The most important requirements regarding CanSat's design are listed below:",
        bullets: [
            {
                id: 1,
                point: "Total mass of the CanSat (science payloads and container) shall be 600 grams +/- 10 grams.",
            },
            {
                id: 2,
                point: "CanSat shall fit in a cylindrical envelope of 125 mm diameter x 400 mm length.",
            },
            {
                id: 3,
                point: "The descent rate of the CanSat (container and science payload) shall be 15 meters/second +/- 5m/s.",

            },
            {
                id: 4,
                point: "The science payload shall have a maximum descent rate of 20 m/s.",

            },
            {
                id: 5,
                point: "The science payload will be released at 500 m and 400 m.",

            },
            {
                id: 6,
                point: "The science payload shall measure altitude using an air pressure sensor, air temperature, and rotation rate as it descends.",
            },
            {
                id: 7,
                point: "The container shall include a GPS sensor to track its position, pressure sensor to measure altitude, and a battery voltage sensor.",

            },
            {
                id: 8,
                point: "Each team must develop a ground station to plot sensor data in real time.",

            },
            {
                id: 9,
                point: "The CanSat must survive 15 Gs launch acceleration, and 30 Gs shock. Electronics must be secured and, with the exception of sensors, enclosed.",

            },
            {
                id: 10,
                point: "The total cost of the CanSat shall be under $1000, not including ground station equipment."

            }
        ]
    },
    teamGoals: [
        {
            id: 1,
            point: "Design and build a CanSat that meets all competition requirements.",
        },
        {
            id: 2,
            point: "Provide all team members with practical experience in the engineering design process.",
        },
        {
            id: 3,
            point: "Fall: Complete research, design, resource procurement, and initial prototypes; submit Preliminary Design Report."
        },
        {
            id: 4,
            point: "Winter: Focus on manufacturing, refining designs for prototype two, and completing the Critical Design Review (CDR)."
        },
        {
            id: 5,
            point: "Spring: Conduct testing, address any issues, and prepare for competition after finals."
        }
    ],
    posters: {
        fall: "/assets/images/projects/2020-2021/2020-2021 Fall Poster.png",
        winter: "/assets/images/projects/2020-2021/2020-2021 Winter Poster.png",
        spring: ""
    }
}

export const project2019_2020 = {
    overview: {
        team: "", //team photo
        description: ""
    },
    projectDefinition: {
        show: true,
        planning: "The CanSat Competition is an international design/build/fly engineering competition taking place at Virginia Tech University. In this year’s mission, the CanSat will be launched to 700m using a high-powered model rocket and then perform a controlled descent while transmitting data from its onboard sensors to a ground station computer. The CanSat consists of a container and science payload. Initially, both descend under a parachute. At 450m, the payload is released and continues its descent as a delta wing glider. The glider then descends in a circular pattern of radius 250m for one minute while staying above the altitude of 100m. Finally, the delta wing glider releases its own parachute and descends at 10 m/s back to the ground.",
        problemStatement: "Our CanSat project for the competition involves designing and building a container and science payload that descend from 670 to 725 meters. Initially, both parts descend together under a parachute at 15 m/s, then the first payload is released at 500 m, rotating to descend at under 20 m/s, followed by the release of a second maple-seed payload at 400 m. Equipped with sensors for air temperature, pressure, and rotation rate, the payload transmits data to the container, which relays all information and includes GPS, pressure, battery voltage, and an audio beacon. Our goal is to excel in the CanSat Competition, ensure all team members gain hands-on engineering experience, and meet both the MAE Department's senior design requirements and UCI’s standards in design reviews. The competition provides a high-power rocket for standardized launches, and our container is designed to protect the payload throughout launch and deployment.",
        image: "/assets/images/projects/2020-2021/mission.png"
    },
    design: {
        show: false,
        majorComponents: {
            description: "",
            bulletPoints: []
        },
        keyComponents: [],
        ourWorks: {
            show: false,
            mechanical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            electrical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            controls: {
                show: false,
                name: "",
                description: "",
                image: "",
                caption: "",
            }
        },
        seniorSubsystem: {
            show: true,
            description: "Most of the CanSat sensors are soldered directly onto the custom printed circuit board (PCB). The battery voltage measurement is integrated onto the PCB.\nThe MS5611 provides altitude, temperature, and pressure readings. The XA1110 provides GPS latitude, longitude, altitude, and time. It can report the number of GPS satellites tracked. The 5525DSO provides readings of airspeed, which works in conjunction with a pitot tube. The GP2Y1010AU0F provides particulate concentration readings.",
            image: "/assets/images/projects/2019-2020/seniorSubsystem.png",
            caption: "Figure: CanSat Sensors placed on the PCB"
        },
        descentControl: {
            show: true,
            items: [
                {
                    name: "Parachute (Container and Payload Descent Control System)",
                    bullets: [
                        "The container parachute is 13.3 cm with a 1 cm spill hole to reach 20 m/s. This spill hole will help stabilize the descent and reduce drifting.",
                        "Both will be dome parachutes made of 30d Silicone Nylon 66 Cloth",
                        "Compression spring launches payload from canister",
                    ],
                    image: "/assets/images/projects/2019-2020/parachute.png",
                },
                {
                    name: "Delta Wing Glider (Payload Descent Control System)",
                    bullets: [
                        "Canister parachute sits on top of canister and payload",
                        "When ejected from the rocket, parachute is immediately deployed",
                        "Payload parachute is stored in a release box triggered by a nichrome wire switch"
                    ],
                    image: "/assets/images/projects/2019-2020/parachute-deployment.png"
                },
                {
                    name: "Delta Wing Glider (Payload Descent Control System)",
                    bullets: [
                        "Glider will be made compoundly of fiberglass and 3-D printed ABS material",
                        "Joint areas will be made from ABS while flat areas of wing will be replaced with thin layers of fiberglass",
                        "Glider wings will be rigid and each incorporate a two stage folding mechanism to be stored within the container",
                        "Glider has been designed to achieve a vertical velocity of 4.59 m/s which vertically displaces the glider 275.4 m in one minute"
                    ],
                    image: "/assets/images/projects/2019-2020/delta-wing-glider.png"
                },
            ]
        },
        mechanicalSubsystem: {
            show: true,
            image: "/assets/images/projects/2019-2020/mechanical-subsystem.png",
            description: "This displays an overview of our mechanical subsystem. The payload structure is made from a 3D printed ABS components that consist of a base plate, as well as electronic, battery and air particle sensor mounts. The base plate also stores servo motors that rotate the wings about their hinged axis’. The two part folding wing design is made of joint fiberglass- ABS material design to reduce weight. The canister is designed to fall horizontally and contains a compression spring loaded piston mechanism for easier deployment from the canister. The canister itself has two 3D printed ABS end caps as well as a LDPE sidewall sheet. The payload is ejected from the canister using a nichrome wire release switch, along with a fishing wire that runs through both the canister and payload.",
            items: [
                {
                    name: "Payload Structural Elements",
                    bullets: [
                        "3D printed mounts to hold PCB, battery and servo",
                        "Base plate with mounting holes",
                        "Two part folding wing design",
                        "Retractable horizontal stabilizer"
                    ],
                },
                {
                    name: "Material Selection",
                    bullets: [
                        "Thin flat plate fiberglass wings, connected to 3D printed rotating joints",
                        "Steel slotted spring pins and music wire torsion springs"
                    ],
                },
                {
                    name: "Canister Structural Elements",
                    bullets: [
                        "ABS top and bottom caps",
                        "Compression spring piston deployment mechanism",
                        "Horizontal descent orientation",
                        "Nichrome wire release mechanism"
                    ]
                }
            ]
        },
        electricalPowerSubsystem: {
            show: true,
            image: "/assets/images/projects/2019-2020/electrical-power-subsystem.png",
            caption: "Figure: Diagram of the Electrical Power System components",
            bullets: [
                "The EPS has two power rails: 6V for motors and other high power devices, and 3.3V for low power devices.",
                "The main battery is a 6V, 350mAh, NiMH battery. An RTC battery allows the GPS module to keep time.",
                "A buck converter is used to convert 6V down to 3.3V."
            ]
        },
        flightSoftware: {
            show: true,
            image: "/assets/images/projects/2019-2020/flight-software-design.png",
            items: [
                {
                    name: "Glider",
                    bullets: [
                        "STM32 programed in Arduino IDE in C++/C with the stm32duino plugin",
                        "Sensor communication is through I2C and SPI",
                        "STM32F103C8Tx as MCU"
                    ],
                },
                {
                    name: "Ground Station",
                    bullets: [
                        "XBee is mounted onto the XBee Explorer board which converts serial data to USB",
                        "Uses PySerial library for Python to read/send data from the XBee via USB port.",
                        "Data will be graphed/visualized using Python Graph QT."
                    ]
                }
            ]
        },
        groundControlSystem: {
            show: true,
            leftImage: "/assets/images/projects/2019-2020/gcs.png",
            rightImage: "/assets/images/projects/2019-2020/gcs-design.png",
        }
    },
    competitionRequirements: {
        show: true,
        description: "While there are 66 requirements published by the CanSat Competition. The most important requirements regarding CanSat's design are listed below:",
        bullets: [
            {
                id: 1,
                point: "CanSat must include sensors for temperature, pressure, GPS, altitude, particulates, orientation, and battery voltage, adhering to competition specifications.",
            },
            {
                id: 2,
                point: "Real-time data transmission to a ground station, including a primary and backup laptop, handheld receiver, and XBEE radio."
            },
            {
                id: 3,
                point: "Data packets must be sent wirelessly, plotted on a GUI in real-time, and saved as a .CSV file for post-flight analysis.",
            },
            {
                id: 4,
                point: "Project scope includes only CanSat and ground station design and build; the high-power rocket launch system is provided by the organizers.",

            },
            {
                id: 5,
                point: "CanSat container must protect the payload during launch and deployment.",

            },
        ]
    },
    teamGoals: [
        {
            id: 1,
            point: "Design and build a CanSat that meets all competition requirements.",
        },
        {
            id: 2,
            point: "Provide all team members with practical experience in the engineering design process.",
        },
        {
            id: 3,
            point: "Fall: Complete research, design, resource procurement, and initial prototypes; submit Preliminary Design Report."
        },
        {
            id: 4,
            point: "Winter: Focus on manufacturing, refining designs for prototype two, and completing the Critical Design Review (CDR)."
        },
        {
            id: 5,
            point: "Spring: Conduct testing, address any issues, and prepare for competition after finals."
        }
    ],
    posters: {
        fall: "/assets/images/projects/2019-2020/2019-2020 Fall Poster.png",
        winter: "/assets/images/projects/2019-2020/2019-2020 Winter Poster.png",
        spring: ""
    }
}

export const project2018_2019 = {
    overview: {
        team: "", //team photo
        description: ""
    },
    projectDefinition: {
        show: false,
        planning: "",
        problemStatement: "",
        image: ""
    },
    design: {
        show: false,
        majorComponents: {
            description: "",
            bulletPoints: []
        },
        keyComponents: [],
        ourWorks: {
            show: false,
            mechanical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            electrical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            controls: {
                show: false,
                name: "",
                description: "",
                image: "",
                caption: "",
            }
        },
        seniorSubsystem: {
            show: false,
            description: "",
            image: "",
            caption: ""
        },
        descentControl: {
            show: false,
            items: [
                {
                    name: "",
                    bullets: [],
                    image: "",
                },
                {
                    name: "",
                    bullets: [],
                    image: ""
                },
                {
                    name: "",
                    bullets: [],
                    image: ""
                },
            ]
        },
        mechanicalSubsystem: {
            show: false,
            image: "",
            description: "",
            items: []
        },
        electricalPowerSubsystem: {
            show: false,
            image: "",
            caption: "",
            bullets: []
        },
        flightSoftware: {
            show: false,
            image: "",
            items: []
        },
        groundControlSystem: {
            show: false,
            leftImage: "",
            rightImage: "",
        }
    },
    competitionRequirements: {
        show: false,
        description: "",
        bullets: []
    },
    teamGoals: [],
    posters: {
        fall: "/assets/images/projects/2018-2019/2018-2019 Fall Poster.png",
        winter: "/assets/images/projects/2018-2019/2018-2019 Winter Poster.png",
        spring: "/assets/images/projects/2018-2019/2018-2019 Spring Poster.png"
    }
}

export const project2017_2018 = {
    overview: {
        team: "", //team photo
        description: ""
    },
    projectDefinition: {
        show: false,
        planning: "",
        problemStatement: "",
        image: ""
    },
    design: {
        show: false,
        majorComponents: {
            description: "",
            bulletPoints: []
        },
        keyComponents: [],
        ourWorks: {
            show: false,
            mechanical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            electrical: {
                name: "",
                description: "",
                image: "",
                model: null,
                caption: "",
            },
            controls: {
                show: false,
                name: "",
                description: "",
                image: "",
                caption: "",
            }
        },
        seniorSubsystem: {
            show: false,
            description: "",
            image: "",
            caption: ""
        },
        descentControl: {
            show: false,
            items: [
                {
                    name: "",
                    bullets: [],
                    image: "",
                },
                {
                    name: "",
                    bullets: [],
                    image: ""
                },
                {
                    name: "",
                    bullets: [],
                    image: ""
                },
            ]
        },
        mechanicalSubsystem: {
            show: false,
            image: "",
            description: "",
            items: []
        },
        electricalPowerSubsystem: {
            show: false,
            image: "",
            caption: "",
            bullets: []
        },
        flightSoftware: {
            show: false,
            image: "",
            items: []
        },
        groundControlSystem: {
            show: false,
            leftImage: "",
            rightImage: "",
        }
    },
    competitionRequirements: {
        show: false,
        description: "",
        bullets: []
    },
    teamGoals: [],
    posters: {
        fall: "/assets/images/projects/2017-2018/2017-2018 Fall Poster.png",
        winter: "/assets/images/projects/2017-2018/2017-2018 Winter Poster.png",
        spring: "/assets/images/projects/2017-2018/2017-2018 Spring Poster.png"
    }
}


// sponsors
export const sponsors = [
    {
        label: "Blue Origin",
        route: "https://www.blueorigin.com/",
        image: "/assets/images/sponsors/blueOrigin.jpg",
    },
    {
        label: "Nxbeam",
        route: "https://www.nxbeam.com/",
        image: "/assets/images/sponsors/nxBeam.png",
    },
    {
        label: "UROP",
        route: "https://urop.uci.edu/",
        image: "/assets/images/sponsors/urop.jpg",
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
/** @todo: add new card for samueli 25th year anniversary */
export const featuredNews = [
    {
        title: "UCI Samueli School of Engineering",
        subtitle: "Thank you Henry and Susan Samueli for your dedication to future engineers at the UC Irvine Samueli School of Engineering! Celebrating 25 years of impact!🤘🎉💛💙",
        date: "Oct 28, 2024",
        image: "/assets/images/news/25-year-anniversary.jpeg",
        route: "https://www.linkedin.com/posts/ucirvineengineering_thank-you-henry-and-susan-samueli-for-your-activity-7257088350157746177-NmpH/"
    },
    {
        title: "UCI Samueli School of Engineering",
        subtitle: "Anteater CanSat Team Takes Second Place in U.S., Fourth Worldwide",
        date: "July 11, 2024",
        image: "/assets/images/news/anteater-cansat-team.jpeg",
        route: "https://engineering.uci.edu/news/2024/7/anteater-cansat-team-takes-second-place-us-fourth-worldwide"
    },
    // {
    //     title: "UCI Giving Day 2024",
    //     subtitle: "CanSat Student Group",
    //     date: "",
    //     image: "/assets/images/news/giving-day-2024.jpeg",
    //     route: "https://givingday.uci.edu/giving-day/80306/department/89677"
    // }
]

export const updates = [
    {
        title: "UCI Samueli School of Engineering",
        subtitle: "Thank you Henry and Susan Samueli for your dedication to future engineers at the UC Irvine Samueli School of Engineering! Celebrating 25 years of impact!🤘🎉💛💙",
        date: "Oct 28, 2024",
        image: "/assets/images/news/25-year-anniversary.jpeg",
        route: "https://www.linkedin.com/posts/ucirvineengineering_thank-you-henry-and-susan-samueli-for-your-activity-7257088350157746177-NmpH/"
    },
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
        project: project2024_2025,
    },
    id2023_2024: {
        id: '2023-2024',
        label: '2023 - 2024',
        team: team2023_2024,
        project: project2023_2024,
    },
    // id2022_2023: {
    //     id: '2022-2023',
    //     label: '2022 - 2023',
    //     team: team2022_2023,
    //     project: project2023_2024,
    // },
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
        project: project2020_2021,
    },
    id2019_2020: {
        id: '2019-2020',
        label: '2019 - 2020',
        team: team2019_2020,
        project: project2019_2020,
    },
    id2018_2019: {
        id: '2018-2019',
        label: '2018 - 2019',
        team: team2018_2019,
        project: project2018_2019,
    },
    id2017_2018: {
        id: '2017-2018',
        label: '2017 - 2018',
        team: team2017_2018,
        project: project2017_2018,
    },
}
