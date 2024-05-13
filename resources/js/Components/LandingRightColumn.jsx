import { ActionIcon, Anchor, Box, Button, Divider, Group, Space, Text } from "@mantine/core";
import { FaArrowRightLong, FaCalendar, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function LandingRightColumn({className}) {
    return (
        <Box className='mt-10 lg:mt-0 lg:w-3/12 lg:ml-10 bg-blue-100/50 rounded-lg' p={'lg'}>
            <Box pt={'lg'}>
                <Text className='text-gray-500' fz={'xs'} mb={'sm'}>DATE ET HEURE</Text>
                <Text className='text-gray-700' fz={"sm"}>17 SEPTEMBRE 2024</Text>
                <Group className='text-xs mt-1'>
                    <Text>09:00</Text>
                    <FaArrowRightLong className='relative' />
                    <Text>17:30</Text>
                </Group>
                <Space h={'md'} />
                <Anchor
                    fz={'sm'}>
                    <FaCalendar className="mr-1 relative top-[0.5]" />
                    Ajouter au calendrier
                </Anchor>
            </Box>

            <Divider my={'md'} />

            <Box>
                <Text className='text-gray-500' fz={'xs'} mb={'sm'}>LIEU</Text>
                <Text className='text-gray-700' fz={'sm'}>CNIT FOREST, La Défense</Text>
                <Text className='text-gray-500' fz={'xs'}>2 PL. de la défense</Text>
                <Text className='text-gray-500' fz={'xs'}>92092 Puteaux</Text>
                <Text className='text-gray-500' fz={'xs'}>France</Text>
            </Box>


            <Divider my={'md'} />

            <Box>
                <Text className='text-gray-500' fz={'xs'} mb={'sm'}>PARLEZ-EN AUTOUR DE VOUS !</Text>
                <Group>
                    <ActionIcon component="a" href="https://twitter.com/WMH_PROJECT" target="_blank" color="dark"><FaXTwitter /></ActionIcon>
                    <ActionIcon component="a" href="https://fr.linkedin.com/company/wmhproject" target="_blank" color="dark"><FaLinkedinIn /></ActionIcon>
                </Group>

            </Box>
        </Box>
    )
}