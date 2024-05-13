import { Box, Button, Flex, Image, Title, Text, Space, Group, Stack, Avatar, Overlay, BackgroundImage, Anchor } from '@mantine/core';
import React, { useState } from 'react';
import Background from '../../images/background.png'
import OutscaleExperienceLogo from '../../images/outscale-experience-logo-white.png'
import OutscaleLogo from '../../images/3ds-outscale-logo.svg'
import DassaultLogo from '../../images/dassault-systemes-logo.svg'
import JuliaAvatar from '../../images/julia.png'
import PhilippeAvatar from '../../images/philippe.png'
import LandingLeftColumn from '../Components/LandingLeftColumn';
import LandingRightColumn from '../Components/LandingRightColumn';
import SectionTitle from '../Components/SectionTitle';
import TimeCard from '../Components/TimeCard';
import PartnersRow from '../Components/PartnersRow';
import { Head } from '@inertiajs/inertia-react';
import FormulaireInscription from '../Components/FormulaireInscription';
import { useScrollIntoView } from '@mantine/hooks';

const Home = () => {
    const { scrollIntoView, targetRef } = useScrollIntoView({
        offset: 60
    })

    return (
        <>
            <Head><title>Outscale Experiences 2024</title></Head>
            <div className='bg-slate-200'>
                <BackgroundImage className='bg-fixed w-screen max-h-screen' 
                 style={{
                    backgroundImage: `url(${Background})`
                }}>
                <Image className='relative left-1/2 -translate-x-1/2 top-20' src={OutscaleExperienceLogo} maw={260} />
                <div className='sm:w-10/12 md:w-5/6 container bg-white mx-auto px-8 lg:px-16 relative top-36 pt-10'>
                    <Flex justify={'space-around'}>
                        <Image className="flex justify-start" src={OutscaleLogo} mah={200} />
                        <Image className="flex justify-end" src={DassaultLogo} mah={200} />
                    </Flex>

                    <Box className='my-4'>
                        <Title className='text-blue-950' order={4} align='center' transform="uppercase">Outscale Experiences</Title>
                        <Title className='text-blue-500' order={2} align='center' transform="uppercase">À L’ÈRE DE L’IA ET DE LA SOUVERAINETÉ</Title>
                    </Box>

                    <Box className='flex flex-col lg:flex-row mt-20'>
                        <LandingLeftColumn scrollToInscription={() => scrollIntoView()} />
                        <LandingRightColumn />
                    </Box>

                    <Box className='mt-20'>
                        <SectionTitle title={'Agenda'} />
                        <TimeCard title={'9h00 - 09h45'}>
                            <Text>Ouverture des portes & accueil café</Text>
                        </TimeCard>

                        <TimeCard title={'9h45 - 12h30'}>
                            <Stack>
                                <Text align='center'>Plénière</Text>
                                <Box className='flex flex-col md:flex-row'>
                                    <Avatar.Group spacing="sm" className='mx-auto mb-1 md:mr-4'>
                                        <Avatar src={PhilippeAvatar} radius="xl" />
                                        <Avatar src={JuliaAvatar} radius="xl" />
                                    </Avatar.Group>
                                    <Text>
                                    Animation par <Text span weight={"bold"}>Julia Sieger</Text>, Journaliste spécialisée en nouvelles technologies et innovation
                                    Keynote de <Text span weight={"bold"}>Philippe Miltin</Text>, Directeur Général, OUTSCALE, Dassault Systèmes
                                    Autres interventions en cours de programmation 
                                    </Text>
                                </Box>
                            </Stack>
                        </TimeCard>

                        <TimeCard title={'12h30 - 13h30'}>
                            <Text>Cocktail déjeunatoire</Text>
                        </TimeCard>

                        <TimeCard title={'13h30 - 17h30'}>
                            <Stack justify='center' align='center' spacing={'xs'}>
                                <Text>Sessions & Networking</Text>
                                <Text>Tables rondes</Text>
                                <Text>Masterclass</Text>
                                <Text>Démonstrations</Text>
                                <Text>Users club</Text>
                                <Text>Animations</Text>
                            </Stack>
                        </TimeCard>
                    </Box>

                    <Box className='mt-20'>
                        <SectionTitle title={'Partenaires'} />
                        <PartnersRow />
                    </Box>

                    <Box ref={targetRef}>
                        <SectionTitle title={'Inscription'} />
                        <FormulaireInscription />
                    </Box>

                    <Box className="bg-blue-200/80 rounded-lg py-2 mb-3 text-center my-14">
                        <Text>Pour toute demande d’information complémentaire, veuillez contacter</Text>
                        <Anchor href='mailto:imene.belmaaziz@outscale.com' fw={'bold'} className=' text-blue-900'>imene.belmaaziz@outscale.com</Anchor>
                    </Box>

                    <Text justify='justify' className='text-xs my-20 mb-30' color='dimmed'>
                        Nous vous informons que vos données à caractère personnel font l’objet d’un traitement par OUTSCALE - Dasssault Systèmes, dont le siège est situé 1, rue Royale, 319 Bureaux de la Colline, 92210 Saint-Cloud, en qualité de responsable de traitement.
                        OUTSCALE, WMH Project collectent les données nécessaires à l'inscription à l'évènement OUTSCALE EXPERIENCES 2024. Elles sont destinées aux départements marketing d'OUTSCALE. Ces données sont conservées pendant 2ans suite à l’évènement. WMH Project garantit que les données sont hébergées dans un datacenter en France – Microsoft Azure. Conformément à la loi Informatique et Libertés, vous pouvez exercer votre droit d’accès aux données vous concernant et les faire rectifier en contactant a.legoff@wmhproject.fr. Pour plus d’informations sur le traitement de vos données personnelles, nous vous invitons à prendre connaissance de notre politique de protection des données.
                        Nous vous rappelons que vous disposez sur vos données, d’un droit d’accès, de rectification, d’effacement – dans les cas prévus par la règlementation – de limitation, de définition des directives relatives à leur sort après votre mort, ainsi que, dans le cadre d’un traitement fondé sur l’intérêt légitime, d’un droit d’opposition et dans le cadre d’un traitement fondé sur le consentement, d’un droit à la portabilité de vos données.
                        Les données saisies seront partagées avec le groupe Dassault Systèmes et seront utilisées pour vous informer sur les activités du groupe et de ses marques. Vous aurez la possibilité de vous désabonner à tout moment en utilisant le lien intégré dans les communications.
                        Pour toute information complémentaire ou difficulté relative à l’utilisation de vos données, vous pouvez contacter notre délégué à la protection des données (DPO) à l’adresse suivante : donnees-personnelles@outscale.com. En cas de difficulté non résolue à l’amiable, vous pouvez saisir la CNIL.
                    </Text>
                </div>
            </BackgroundImage></div>
        </>
    )
}

export default Home