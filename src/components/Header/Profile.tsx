import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (

        <Flex align="center">
            <Box>
                <Text mr="4" textAlign="right">
                    Yan Gurgel
                            </Text>
                <Text color="gray.300" fontSize="small">
                    yan.gurgel@email.com
                            </Text>
            </Box>

            <Avatar size="md" name="Yan Gurgel" src="https://github.com/Yan-Gurgel.png" />
        </Flex>
    );
}