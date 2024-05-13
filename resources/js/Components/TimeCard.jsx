import { Box, Title } from "@mantine/core";

export default function TimeCard({title, children}) {
    return (
        <Box className="bg-blue-100/50 rounded-lg p-4 mb-3">
            <Title className="text-md text-blue-600" weight={'bold'} align="center" order={6} mb={'sm'}>{title}</Title>
            <Box className="flex justify-center text-sm">
            {children}
            </Box>
        </Box>
    )
}