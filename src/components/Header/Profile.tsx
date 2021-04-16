import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData ?: boolean;
}

export function Profile({showProfileData = true }: ProfileProps) {
    return (

        <Flex align="center">
            { showProfileData && (
                <Box>
                <Text mr="4" textAlign="right">
                    Yan Gurgel
                            </Text>
                <Text color="gray.300" fontSize="small">
                    yan.gurgel@email.com
                            </Text>
            </Box>
            )}

            <Avatar size="md" name="Yan Gurgel" src="https://github.com/Yan-Gurgel.png" />
        </Flex>
    );
}