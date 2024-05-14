import { Box, Button, Space, Text } from "@mantine/core";
import { GoArrowRight } from "react-icons/go";

export default function LandingLeftColumn({className, scrollToInscription}) {
    return (
        <Box className='lg:w-9/12 text-sm'>
        <Text align='justify' weight={300}>
        OUTSCALE et Dassault Systèmes vous convient le <Text span weight={500} className='text-blue-500'>17 Septembre prochain</Text>, à venir vivre l'Expérience de l'IA souveraine lors de cette édition inédite d’OUTSCALE EXPERIENCES. 
        </Text>

        <Space h="md"/>

        <Text align='justify' weight={300}>
        L’événement le plus attendu de l’année consacré à l’IA et à la souveraineté des données vous donne rendez-vous pour accélérer la transformation de vos métiers. 
        </Text>

        <Button
            styles={(theme) => ({
                label: {
                    overflow: 'visible',
                },
            })}
            className="bg-gradient-to-b from-blue-600/80 via-blue-700 
                        hover:from-blue-600/80 hover:to-blue-900
                        transition-all ease-in-out duration-200
                        my-4 group w-60 overflow-visible
                        hover:tracking-wide"
            size="lg"
            radius={'sm'}
            onClick={scrollToInscription}
            >
            Je m'inscris
            <GoArrowRight className="top-[0.5] left-2 duration-300 ease-in-out group-hover:left-4 relative" size={18} />
        </Button>

        <Box my={'lg'}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/NNGDj9IeAuI?si=tzrL5fta7HZzF4ez" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Box>

        <Text align='justify' weight={300} mt={'md'}>
        Lors d’OUTSCALE EXPERIENCES 2024, rencontrez nos équipes d’experts et tout notre écosystème et mettez la puissance de l’IA au service de la modernisation de vos processus, dans le but d’apprendre à vos équipes à prendre des décisions éclairées, ou encore d’automatiser les tâches les plus complexes tout en préservant la souveraineté et la sécurité de vos données les plus sensibles. 
        </Text>

        <Text align='justify' weight={300} mt={'md'}>
        En tant qu'opérateur souverain d’Expérience as a Service, et plaçant la cybergouvernance au cœur de nos solutions, nous offrons aux entreprises privées et acteurs publics, un environnement virtuel performant et sécurisé, pour leurs opérations les plus exigeantes. 
        </Text>

        <Text align='justify' weight={300} mt={'md'}>
        Au programme : des annonces stratégiques avec notamment sur scène, le CEO Philippe Miltin, un village innovations pour le développement de vos projets (des Démos, Masterclass, Marketplace Village, des users clubs dédiés Business Process et Business Experiences), des échanges inspirants et des rencontres inédites avec des partenaires leaders de leur marché.
        </Text>

        <Text align='justify' weight={300} mt={'md'}>
        Ensemble, entrons ensemble dans l’ère de l'IA souveraine !
        </Text>

        <Text align='justify' weight={300} mt={'md'}>
        Retrouvons-nous vite le 17 septembre prochain ! 
        </Text>
    </Box>
    )
}