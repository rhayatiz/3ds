import { Box, Paper, Title } from "@mantine/core";

export default function SectionTitle({title}) {
    return (
        <Box className="bg-blue-200/80 rounded-lg py-2 mb-3">
            <Title className="text-lg" transform="capitalize" align="center" order={1}>{title}</Title>
        </Box>
    )
}