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
        label: "2024 - 2025",
        route: "/projects/2025",
        //   icon: "/assets/icons/logo.png",
    },
    {
        label: "2023 - 2024",
        route: "/projects/2024",
        //   icon: "/assets/icons/logo.png",
    },
    {
        label: "2022 - 2023",
        route: "/projects/2023",
        //   icon: "/assets/icons/logo.png",
    },
    {
        label: "2021 - 2022",
        route: "/projects/2022",
        //   icon: "/assets/icons/logo.png",
    },
    {
        label: "2020 - 2021",
        route: "/projects/2021",
        //   icon: "/assets/icons/logo.png",
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




// connect year with corresponding object
export const yearTeamProject = {
    id2024_2025: {
        id: '2024-2025',
        label: '2024 - 2025',
        team: team2024_2025,
    },
    id2023_2024: {
        id: '2023-2024',
        label: '2023 - 2024',
        team: team2024_2025,
    },
    id2022_2023: {
        id: '2022-2023',
        label: '2022 - 2023',
        team: team2024_2025,
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