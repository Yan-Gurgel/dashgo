import { createContext, ReactNode, useContext, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface SidebarDrawerContextProviderProps {
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SideBarDrawerProvider({ children }: SidebarDrawerContextProviderProps) {
    const disclousure = useDisclosure()
    const router = useRouter()


    /*Fecha a Sidebar sempre que troca de rota */
    useEffect(()=>{
        disclousure.onClose()
    },[router.asPath])
    

    return (
        <SidebarDrawerContext.Provider value={disclousure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)