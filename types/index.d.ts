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
}

// cover page props
declare type CoverPageProps = {
    page: string;
    title: string;
    subtitle?: string;
    background: string;
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