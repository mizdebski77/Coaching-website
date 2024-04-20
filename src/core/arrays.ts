export const LinksData = [
    { to: "home", text: "Strona Główna" },
    { to: "about", text: "O Nas" },
    { to: "services", text: "Usługi" },
    { to: "contact", text: "Kontakt" },
];

export const MobileNavAnimation = {
    visible: {
        height: 280,
        opacity: 1,
        transition: {
            x: { velocity: 100 },
            duration: 0.3,
        }
    },

    hidden: {
        height: 24,
        opacity: 0,
        transition: {
            x: { velocity: 100 },
            duration: 0.3,
            delay: 0.2
        }
    }
};

export const MobileLinksWrapperAnimation = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07
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