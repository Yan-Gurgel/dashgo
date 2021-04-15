import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile'
import { SeachBox } from './SearchBox';

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >


            <Logo />

            <Flex align="center" ml="auto">

                <SeachBox />

                <NotificationsNav />

                <Profile />
            </Flex>
        </Flex>
    );
}