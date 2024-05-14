import { Box, Flex, Image, Title, BackgroundImage, Table, ScrollArea } from '@mantine/core';
import Background from '../../images/background.png'
import OutscaleExperienceLogo from '../../images/outscale-experience-logo-white.png'
import OutscaleLogo from '../../images/3ds-outscale-logo.svg'
import DassaultLogo from '../../images/dassault-systemes-logo.svg'
import { Head, usePage } from '@inertiajs/react';


const Inscriptions = () => {
    const inscriptions = usePage().props.inscriptions?.data
    console.log('inscriptions', usePage().inscriptions)

    const rows = inscriptions === undefined ? 
        <td colSpan={100} className='text-center'>Aucune inscription enregistrée</td>
        : inscriptions.map((element) => (
        <tr key={element.email}>
          <td>{element.nom}</td>
          <td>{element.prenom}</td>
          <td>{element.telephone}</td>
          <td>{element.email}</td>
          <td>{element.fonction}</td>
          <td>{element.organisation}</td>
          <td>{element.organisationType}</td>
          <td>{element.secteurActivite}</td>
          <td>{element.isValidated ? 'Validé' : 'En attente'}</td>
        </tr>
      ));

    return (
        <>
            <Head><title>Outscale Experiences 2024 - Liste des inscriptions</title></Head>
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
                        <Title className='text-blue-950' order={4} align='center' transform="uppercase">Liste inscriptions</Title>
                        <ScrollArea className="max-w-full mt-12">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Téléphone</th>
                                        <th>Email</th>
                                        <th>Fonction</th>
                                        <th>Organisation</th>
                                        <th>Type d'organisation</th>
                                        <th>Secteur D'activité</th>
                                        <th>Etat compte</th>
                                    </tr>
                                </thead>
                                <tbody>{rows}</tbody>
                            </Table>
                    </ScrollArea>
                    </Box>
                </div>

            </BackgroundImage></div>
        </>
    )
}

export default Inscriptions