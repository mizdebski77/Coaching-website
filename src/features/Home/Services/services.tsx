import React, { useState } from 'react';
import { ExpandButton, ExpandContent, ExpandSpan, ExpandWrapper, ListItem, ListItemWrapper, ListWrapper, OList, SVG, Title, UList, Wrapper } from './styledServices';
import circles from '../../../common/Images/circles-oval-svgrepo-com.svg';
import AnimatedElement from '../AnimatedElements';
import { ServicesData } from '../../../core/arrays';
import { AnimatePresence, motion } from 'framer-motion';

export const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <Wrapper id="services">
            <AnimatedElement left>
                <Title>
                    Nasza oferta
                </Title>
            </AnimatedElement>
            <SVG src={circles} />
            <SVG src={circles} bottom />
            <ListWrapper>
                {ServicesData.map((item, index) => (
                    <ListItemWrapper key={index}>
                        <ListItem>
                            {item.title}
                            <ExpandButton onClick={() => toggleExpand(index)}>
                                {expandedIndex === index ? 'Zwiń' : 'Czytaj więcej'}
                            </ExpandButton>
                        </ListItem>
                        {expandedIndex === index && (
                            <AnimatePresence>
                                <ExpandWrapper
                                    as={motion.div}
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >


                                    <ExpandContent
                                        as={motion.p}
                                        variants={{
                                            open: { opacity: 1, },
                                            collapsed: { opacity: 0, }
                                        }} transition={{ duration: 0.8, delay: 0.1 }}
                                    >
                                        {item.description}
                                    </ExpandContent>

                                    {item.list.length > 0 && (
                                        <UList
                                            as={motion.ul}
                                      
                                            variants={{
                                                open: { opacity: 1, },
                                                collapsed: { opacity: 0, }
                                            }} transition={{ duration: 0.8, delay: 0.2 }}
                                        >
                                            {item.list.map((module, moduleIndex) => (
                                                <li key={moduleIndex}>
                                                    <p ><span style={{ fontWeight: 'bold' }}>{module.title}</span> - {module.description}</p>
                                                    <ExpandSpan>Czas trwania około {module.duration}.</ExpandSpan>
                                                </li>
                                            ))}
                                        </UList>
                                    )}
                                    {item.list.length === 0 && (
                                        <ExpandSpan
                                            as={motion.span}
                                            variants={{
                                                open: { opacity: 1, },
                                                collapsed: { opacity: 0, }
                                            }} transition={{ duration: 0.8, delay: 0.3 }}
                                        >
                                            Czas trwania około {item.duration}.
                                        </ExpandSpan>
                                    )}
                                </ExpandWrapper>
                            </AnimatePresence>

                        )}
                    </ListItemWrapper>
                ))}

                <ListItemWrapper>
                    <ListItem>
                        Doradztwo Lean Menagement
                        <ExpandButton onClick={() => toggleExpand(-1)}>
                            {expandedIndex === -1 ? 'Zwiń' : 'Czytaj więcej'}
                        </ExpandButton>
                    </ListItem>
                    {expandedIndex === -1 && (
                        <ExpandWrapper
                            as={motion.div}
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            Oferujemy kompleksowe doradztwo dla firm produkcyjno-magazynowych, koncentrujące się na pięciu kluczowych obszarach:
                            <OList
                                as={motion.ol}
                                variants={{
                                    open: { opacity: 1, },
                                    collapsed: { opacity: 0, }
                                }} transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <li>
                                    Strategiczne wdrażanie kultury Lean - pomagamy zbudować efektywny system zarządzania, który zwiększa wyniki biznesowe przy jednoczesnej optymalizacji kosztów i zasobów.
                                </li>
                                <li style={{ margin: '20px 0 20px 0' }}>
                                    Optymalizacja procesów - usprawniamy procesy produkcyjne i logistyczne, skracając czas realizacji, redukując koszty i podnosząc jakość, angażując pracowników w ciągłe doskonalenie.
                                </li>
                                <li>
                                    Wdrożenie systemu TWI - implementujemy skuteczny system szkoleń stanowiskowych, który rozwija kompetencje pracowników i buduje ich zaangażowanie.
                                </li>
                                <li style={{ margin: '20px 0 20px 0' }}>
                                    Implementacja narzędzi Lean Management i Lean Office - wprowadzamy sprawdzone rozwiązania jak 5S, Kaizen czy standaryzacja pracy, budując trwałą kulturę ciągłego doskonalenia w całej organizacji.
                                </li>
                                <li>
                                    Zarządzanie jakością - wdrażamy kompleksowy system zapewnienia jakości, który gwarantuje satysfakcję klienta i stabilny rozwój firmy.
                                </li>
                            </OList>

                            <motion.div
                                variants={{
                                    open: { opacity: 1, },
                                    collapsed: { opacity: 0, }
                                }} transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Nasze podejście opiera się na praktycznych rozwiązaniach, mierzalnych wynikach i długofalowej współpracy, która prowadzi do rzeczywistej transformacji organizacji.
                                <p>
                                    Decydując się na nawiązanie współpracy z naszą firmą podejmujesz pierwszy, najważniejszy krok w dążeniu do lepszego jutra. Nasi specjaliści przeprowadzą dokładną analizę Twojego przedsiębiorstwa, zidentyfikują punkty wymagające usprawnienia, oraz zaproponują najlepsze rozwiązania. Podczas cyklu wdrożenia zmian, osobiście dopilnujemy wszystkich procesów, by metamorfoza firmy przebiegła pomyślnie, nie wpływając negatywnie na inne poszczególne sektory firmy. Zakończymy proces zmian przedstawiając szczegółowy raport usprawnień z krótko- i długoterminowym scenariuszem.
                                </p>
                            </motion.div>

                        </ExpandWrapper>
                    )}
                </ListItemWrapper>
            </ListWrapper>
        </Wrapper>
    );
};
