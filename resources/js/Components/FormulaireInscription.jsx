import { Box, Button, Checkbox, Divider, Flex, PasswordInput, Select, Text, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function FormulaireInscription() {
    const organisationType = [
        {
            label: "Administrations publiques",
            value: 1
        },
        {
            label: "Associations",
            value: 2
        },
        {
            label: "Cabinets de conseil",
            value: 3
        },
    ]
    const form = useForm({
          initialValues: {
            prenom: '',
            nom: '',
            email: '',
            telephone: '',
            fonction: '',
            organisation: '',
            typeOrganisation: '',
            secteurActivite: '',
            participation: false,
            marketing: false,
            newsletter: false,
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

    const handleSubmit = (values) => {
        console.log('values', values)
    }

    return (
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
                    data={organisationType}
                    {...form.getInputProps('secteurActivite')} 
                    />
                <Select w={'100%'} mt={'md'}
                    label="Secteur d'activité"
                    placeholder="Secteur d'activité"
                    data={organisationType}
                    {...form.getInputProps('typeOrganisation')} 
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
                {...form.getInputProps('marketing', { type: 'checkbox' })}
                />


            <Checkbox
                size={"xs"}
                mt="md"
                label="J’accepte qu'OUTSCALE me communique sa newsletter.
                Votre adresse de messagerie est uniquement utilisée pour vous envoyer notre newsletter ainsi que des informations concernant les activités d'OUTSCALE. Vous pouvez à tout moment utiliser le lien de désabonnement intégré dans la newsletter.
                Pour plus d'informations concernant le traitement de vos données personnelles, nous vous invitons à lire [notre politique de protection des données|https://fr.outscale.com/cgucgv/]."
                {...form.getInputProps('newsletter', { type: 'checkbox' })}
                />


            <Flex className="mb-20" justify={'center'} mt={'xl'} >
                <Button size="lg" className="bg-blue-800 hover:bg-blue-950 text-white uppercase px-10" type="submit">Valider mon inscription</Button>
            </Flex>
        </form>
    )
}