import { Box, Flex, Spacer } from '@chakra-ui/react'

export const Navbar = () => (
    <Flex border='1px' borderColor='red.200' p='1rem'>
        <Box>
            devfinder
        </Box>
        <Spacer />
        <Box>
            Night/light
        </Box>
    </Flex>
)