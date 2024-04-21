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

export const ServicesData = [
    { title: 'Usłgua', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', price: '1000 zł' },
    { title: 'Usłgua', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', price: '1000 zł' },
    { title: 'Usłgua', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation', price: '1000 zł' },
];


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
