import { Box, Button, Checkbox, Divider, Flex, Modal, PasswordInput, Select, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link, router } from "@inertiajs/react";
import { useDisclosure } from "@mantine/hooks";

export default function FormulaireInscription({context}) {
    const organisationTypes = context.organisationTypes.data
    const secteursActivite = context.secteursActivite.data
    const { errors } = context
    
    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
          initialValues: {
            prenom: 'don',
            nom: 'joe',
            email: 'admin@example.com',
            telephone: '0123123123',
            fonction: 'dev',
            organisation: 'aaa',
            organisation_type_id: '',
            secteur_activite_id: '',
            participation: false,
            has_agreed_commercial_use: false,
            is_subscribed_newsletter: false,
            password: '123',
            passwordConfirm: '123',
          },
      
          validate: {
            nom: (value) => value != '' ? null : 'Saisissez votre nom',
            prenom: (value) => value != '' ? null : 'Saisissez votre prénom',
            organisation: (value) => value != '' ? null : 'Veuillez remplir le champ',
            fonction: (value) => value != '' ? null : 'Veuillez remplir le champ',
            telephone: (value) => (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(value) ? null : 'Saisir un numéro de téléphone'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email invalide'),
            participation: (value) => (value == true ? null : 'Veuillez cocher la case'),
            password: (value) => value != '' ? null : 'Saisissez votre mot de passe',
            passwordConfirm: (value) => {
                if (value == '') {
                    return 'Saisissez votre mot de passe'
                } else {
                    if (value == form.values.password) {
                        return null
                    } else {
                        return 'Les deux mot de passes ne correspondent pas'
                    }
                }
            } 
          },
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        form.validate()
        if (form.isValid()) {
            router.post('/inscription', form.values, {
                preserveScroll: true,
                onSuccess: () => {
                    form.reset()
                    open()
                }
            })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Text className="font-semibold text-blue-900 mt-6">Informations Personnelles</Text>
            <Box className="flex flex-col md:flex-row justify-between md:space-x-6">
                <TextInput w={'100%'} mt={'md'}
                    placeholder="Prénom"
                    label="Prénom"
                    {...form.getInputProps('prenom')} 
                    withAsterisk
                    />
                <TextInput w={'100%'} mt={'md'}
                    placeholder="Nom"
                    label="Nom"
                    {...form.getInputProps('nom')} 
                    withAsterisk
                    />
            </Box>

            <Box className="flex flex-col md:flex-row justify-between md:space-x-6">
                <TextInput w={'100%'} mt={'md'}
                    placeholder="Email professionnel"
                    label="Email professionnel"
                    {...form.getInputProps('email')} 
                    withAsterisk
                    />
                <TextInput w={'100%'} mt={'md'}
                    placeholder="Téléphone portable"
                    label="Téléphone portable"
                    {...form.getInputProps('telephone')} 
                    withAsterisk
                    />
            </Box>

            <Divider my={'xl'} />


            <Text className="font-semibold text-blue-900 mt-6">Informations professionnelles</Text>
            <Box className="flex flex-col md:flex-row justify-between md:space-x-6">
                <TextInput w={'100%'} mt={'md'}
                    placeholder="Fonction"
                    label="Fonction"
                    {...form.getInputProps('fonction')} 
                    withAsterisk
                    />
                <TextInput w={'100%'} mt={'md'}
                    placeholder="Organisation"
                    label="Organisation"
                    {...form.getInputProps('organisation')} 
                    withAsterisk
                    />
            </Box>

            <Box className="flex flex-col md:flex-row justify-between md:space-x-6">
                <Select w={'100%'} mt={'md'}
                    label="Type d'organisation"
                    placeholder="Type d'organisation"
                    data={secteursActivite}
                    {...form.getInputProps('secteur_activite_id')} 
                    />
                <Select w={'100%'} mt={'md'}
                    label="Secteur d'activité"
                    placeholder="Secteur d'activité"
                    data={organisationTypes}
                    {...form.getInputProps('organisation_type_id')} 
                    />
            </Box>

            <Divider my={'xl'} />

            <Text className="font-semibold text-blue-900 mt-6">Création de votre mot de passe</Text>
            <Box className="flex flex-col md:flex-row justify-between md:space-x-6">
                <PasswordInput w={'100%'} mt={'md'}
                    placeholder="Mot de passe"
                    label="Mot de passe"
                    {...form.getInputProps('password')} 
                    withAsterisk
                    />
                <PasswordInput w={'100%'} mt={'md'}
                    placeholder="Confirmation mot de passe"
                    label="Confirmation mot de passe"
                    {...form.getInputProps('passwordConfirm')} 
                    withAsterisk
                    />
            </Box>


            <Checkbox 
                className="mt-12"
                size={"xs"}
                mt="md"
                label="J'accepte que les données renseignées sur ce formulaire soient communiquées à OUTSCALE dans le cadre de ma participation à cet évènement."
                {...form.getInputProps('participation', { type: 'checkbox' })}
                />

            <Checkbox
                size={"xs"}
                mt="md"
                label="J'accepte que les données renseignées sur ce formulaire soient communiquées aux partenaires de OUTSCALE pour OUTSCALE EXPERIENCES dans le but de recevoir les communications commerciales et marketing de ces partenaires, ces données seront partagées avec les équipes marketing et commerciales des partenaires, vous pourrez à tout moment vous désabonner de ces communications. Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer votre droit à la limitation du traitement de vos données. Pour plus d'informations concernant le traitement de vos données personnelles, nous vous invitons à lire notre politique de protection des données."
                {...form.getInputProps('has_agreed_commercial_use', { type: 'checkbox' })}
                />


            <Checkbox
                size={"xs"}
                mt="md"
                label="J’accepte qu'OUTSCALE me communique sa newsletter.
                Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre newsletter ainsi que des informations concernant les activités d'OUTSCALE. Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans la newsletter.
                Pour plus d'informations concernant le traitement de vos données personnelles, nous vous invitons à lire [notre politique de protection des données|https://fr.outscale.com/cgucgv/]."
                {...form.getInputProps('is_subscribed_newsletter', { type: 'checkbox' })}
                />

            {Object.keys(errors).length !== 0 && <Box  className="bg-red-100/50 rounded-lg my-5 p-2">
                {Object.keys(errors).map((keyName, i) => (
                    <Text color="red" fz={'xs'} key={i}>{errors[keyName]}</Text>
                ))}
            </Box>}
            <Flex className="mb-20" justify={'center'} mt={'xl'} >
                <Button size="lg" className="bg-blue-800 hover:bg-blue-950 text-white uppercase px-10" type="submit">Valider mon inscription</Button>
            </Flex>

            <Modal opened={opened} onClose={close} title="Succès">
                <Text justify='center'>Votre inscription à bien été prise en compte.</Text>
                <Link className="justify-center" href="/inscription/all">Voir les inscriptions</Link>
            </Modal>
        </form>
    )
}