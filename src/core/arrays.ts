export const LinksData = [
    { to: "home", text: "Strona Główna", offset: -100 },
    { to: "about", text: "O Nas", offset: 120 },
    { to: "services", text: "Usługi", offset: -120 },
    { to: "contact", text: "Kontakt", offset: 120 },
];

export const mobileNavAnimation = {
    hidden: {
        y: "-100%",
        opacity: 0,
        transition: {
            type: "tween",
        },
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
        },
    },
};


export const MobileLinksWrapperAnimation = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: 1
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};



export const variantOpacity = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        delay: 0.4,
    }
};

export const variantTitle = {
    hidden: {
        opacity: 0,
        y: '-10vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
        }
    }
};

export const variantButton = {
    hidden: {
        opacity: 0,
        x: '-100vh'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4,
            type: "spring",
        }
    }
};

export const rightVariant = {
    hidden: {
        opacity: 0,
        x: '40vh'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.4,
            type: "spring",
        }
    }
};


export const ServicesData = [
    {
        title: 'Kultura Lean – Zarządzanie i Strategia',
        description: 'Odkryj skuteczne metody optymalizacji procesów i eliminacji marnotrawstwa podczas intensywnego szkolenia z Lean Management. Poznaj sprawdzone narzędzia i techniki, które pozwolą Ci zwiększyć efektywność działań w Twojej organizacji, redukując koszty i podnosząc jakość produktów oraz usług. Podczas praktycznych warsztatów, pod okiem doświadczonych ekspertów, nauczysz się identyfikować obszary wymagające usprawnienia oraz wdrażać konkretne rozwiązania, które przyniosą wymierne korzyści dla Twojej firmy. Zdobądź certyfikat potwierdzający Twoje kompetencje w zakresie Lean Management i dołącz do grona profesjonalistów, którzy skutecznie transformują swoje organizacje w kierunku doskonałości operacyjnej.',
        duration: '8 godzin',
        list: []
    },
    {
        title: 'Szkolenie Leaderów i Managerów',
        description: '',
        list: [
            {
                title: 'Feedbackowanie i prowadzenie trudnych rozmów',
                description: 'Odkryj sztukę prowadzenia efektywnych rozmów i udzielania konstruktywnego feedbacku. Na praktycznych warsztatach poznasz sprawdzone techniki prowadzenia trudnych rozmów, nauczysz się przekazywać informację zwrotną, a także dowiesz się, jak radzić sobie z emocjami i oporem rozmówcy.',
                duration: '5 godzin'
            },
            {
                title: 'Współpraca i rozwój w zespole',
                description: 'Poznaj, jak budować zgrany i efektywny zespół. Nauczysz się wykorzystywać różnorodność jako atut oraz dowiesz się, jak wspierać rozwój indywidualny każdego członka zespołu, by osiągać wspólne cele. Zdobędziesz praktyczne narzędzia do budowania atmosfery zaufania, wzmacniania synergii zespołowej i tworzenia środowiska sprzyjającego innowacjom oraz ciągłemu doskonaleniu.',
                duration: '5 godzin'
            },
            {
                title: 'Zarządzanie zmianą i stresem w pracy',
                description: 'Odkryj skuteczne strategie zarządzania zmianą i radzenia sobie ze stresem. Osiągniesz poczucie równowagi w dynamicznym środowisku pracy. Nauczysz się, jak efektywnie planować i wdrażać zmiany, minimalizować opór pracowników oraz wykorzystywać techniki redukcji stresu, które pozwolą Tobie i Twojemu zespołowi. Rozwiniesz umiejętności adaptacyjne i zbudujesz odporność psychiczną, które są kluczowe dla sukcesu w szybko zmieniającym się świecie biznesu.',
                duration: '5 godzin'
            },
            {
                title: 'Sztuka delegowania i komunikacji',
                description: 'odkryj tajniki efektywnego delegowania zadań i skutecznej komunikacji. Poznasz sprawdzone techniki przekazywania odpowiedzialności, nauczysz się precyzyjnie komunikować oczekiwania oraz dowiesz się, jak budować zaangażowanie i samodzielność pracowników poprzez właściwe delegowanie. Rozwiniesz umiejętności, które pozwolą Ci uwolnić potencjał zespołu, zwiększyć efektywność pracy i zyskać więcej czasu na strategiczne działania.',
                duration: '5 godzin'
            }
        ]
    },

    {
        title: 'Instrumenty Lean w zakładzie produkcyjnym ',
        description: 'Narzędzia Lean Manufacturing, które wykorzystasz w zakładzie produkcyjno-magazynowym i pozwolą osiągnąć maksymalną efektywność przy minimalnych stratach. Nasze szkolenie wprowadzi Cię w świat "szczupłego zarządzania", gdzie poznasz sprawdzone metody optymalizacji procesów produkcyjnych i nauczysz się je skutecznie wdrażać w swojej organizacji. Oferujemy praktyczne działania warsztatowe, które pomogą Ci zrozumieć i zastosować filozofię Lean w codziennej praktyce biznesowej, eliminując marnotrawstwo i zwiększając konkurencyjność Twojego przedsiębiorstwa. Dołącz do grona firm, które dzięki metodologii Lean osiągają ponadprzeciętne wyniki i budują trwałą przewagę rynkową.',
        duration: '8 godzin',
        list: []
    },

    {
        title: 'Zarządzanie Jakością ',
        description: 'Szkolenie, które łączy najlepsze praktyki z dziedziny Quality Management z filozofią Lean Management, tworząc synergię dla wyjątkowej efektywności organizacyjnej.Poznasz narzędzia i techniki, które pozwolą Ci skutecznie planować, nadzorować i doskonalić procesy w Twojej organizacji, jednocześnie eliminując straty i zwiększając wartość dodaną dla klienta. Zdobyta wiedza i praktyczne umiejętności umożliwią Ci wdrożenie systemu zarządzania jakością, który nie tylko spełni wymagania standardów branżowych, ale także przyczyni się do ciągłego rozwoju organizacji i osiągania wymiernych rezultatów biznesowych.',
        duration: '5 godzin',
        list: []
    },
];

