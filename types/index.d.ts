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