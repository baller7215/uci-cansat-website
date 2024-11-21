declare type LinkItem = {
    route: string;
    label: string;
}

declare type NavbarDropdownProps = {
    links: LinkItem[];
}

// accordion props
declare type AccordionItem = {
    id: number;
    title: string;
    content: string;
  }
  
declare type CustomAccordionProps = {
    accordionItems: AccordionItem[];
}

// collection props
declare type Card = {
    // id: number,
    label: string;
    route: string;
    image?: string;
}

declare type CollectionProps = {
    cards: Card[];
    dark: boolean;
}

// news collection props
declare type NewsCard = {
    title: string;
    subtitle: string;
    route: string;
    date: string;
    image?: string;
}

declare type CollectionNewsProps = {
    cards: NewsCard[];
}

// cover page props
declare type CoverPageProps = {
    page: string;
    title: string;
    subtitle?: string;
    background: string;
}

// image text layout props
declare type ImageTextLayoutProps = {
    title: string;
    description: string;
    image: string;
    link?: string;
}


// profiles grid page props
// declare type Advisor = {
//     name: string;
//     role: string;
//     profileImg?: string;
// }

declare type Member = {
    name: string;
    role: string;
    profileImg?: string;
    github?: string;
    linkedin?: string;
    major?: string;
    gradYear?: string;
    description?: string;
}

declare type ProfilesGridProps = {
    members: Member[];
}

declare type ProfileCardProps = {
    member: Member;
}


// testimonial component props
declare type TestimonialProps = {
    name: string;
    year: string;
    role: string;
    quote: string;
    image?: string;
}

// subteam info component props
declare type Responsibilities = {
    description: string;
    bullets: {
            title: string;
            description: string;
    }[]

}

declare type Requirements = {
        title: string;
        description: string;
}[]


declare type SubteamInfoProps = {
    subteam: string;
    responsibilities: Responsibilities;
    requirements: Requirements;
}