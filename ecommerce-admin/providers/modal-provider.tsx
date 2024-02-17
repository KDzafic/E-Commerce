//we will use this provider so that we can use the store modal component everywhere in the code

"use client"

import { useEffect, useState } from "react"
import { StoreModal } from "@/components/modals/store-modal"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // if it is server side rendering we return null so it doestn throw hidration error
    if(!isMounted) {
        return null;
    }

    return (
        <>
            <StoreModal />
        </>
    )
}