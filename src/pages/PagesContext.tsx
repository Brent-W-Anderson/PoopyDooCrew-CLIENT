import { createContext, useContext, useState, ReactNode } from 'react'

interface PagesContextProps {
    loginState: [boolean, ( state: boolean ) => void];
}

const PagesContext = createContext<PagesContextProps | undefined>( undefined )

export const PagesProvider = ( { children }: { children: ReactNode } ) => {
    const loginState = useState( false )

    return (
        <PagesContext.Provider value={{ loginState }}>
            {children}
        </PagesContext.Provider>
    )
}

export const usePagesContext = () => {
    const context = useContext( PagesContext )
    if ( !context ) {
        throw new Error( 'usePagesContext must be used within a PagesProvider' )
    }
    return context
}