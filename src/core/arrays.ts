export const LinksData = [
    { to: "home", text: "Strona Główna" },
    { to: "about", text: "O Nas" },
    { to: "services", text: "Usługi" },
    { to: "contact", text: "Kontakt" },
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