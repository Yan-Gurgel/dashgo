import { Box, Flex, SimpleGrid, Text, theme, } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";


const Chart = dynamic(() => import("react-apexcharts"),{ 
    ssr: false, 
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500],
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: true,
    },
    tooltip:{
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder:{
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-04-10T00:00:00.000Z',
            '2021-04-11T00:00:00.000Z',
            '2021-04-12T00:00:00.000Z',
            '2021-04-13T00:00:00.000Z',
            '2021-04-14T00:00:00.000Z',
            '2021-04-15T00:00:00.000Z',
            '2021-04-16T00:00:00.000Z'
        ],
    },
    fill: {
        opacity: 0.3,
        typ: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        },
    },
};

const tagsSolicitadas = [
    { name: 'Empresa 1', data: [31, 120, 10, 28, 51, 18, 109 ]},
    { name: 'Empresa 2', data: [40, 80, 50, 25, 5, 18, 80 ]}
];

const tagsUtilizadas = [
    { name: 'Empresa 1', data: [3, 40, 10, 23, 45, 18, 35 ]},
    { name: 'Empresa 2', data: [20, 35, 15, 25, 5, 18, 19 ]}
];

export default function Dashboad() {
    return (

        <Flex direction="column" h="100vh">

            <Header />

            <Flex
                w="100%"
                my="6"
                mx="auto"
                maxWidth={1480}
                px="6"
            >
                <Sidebar />
                {/* minChildWidth deixa responsívo limitando a linha e fazendo sua quebra */}
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Tags solicitadas  </Text>
                        {/*options=configuração/ series = dados do gráfico */}
                        <Chart options={ options } series={ tagsSolicitadas } type="area" height={160} />
                    </Box>


                    <Box
                        p={["6", "8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                    >
                        <Text fontSize="lg" mb="4">Tags utilizadas</Text>
                        <Chart options={ options } series={ tagsUtilizadas } type="area" height={160} />
                    </Box>
                </SimpleGrid>

            </Flex>
        </Flex>

    );
}