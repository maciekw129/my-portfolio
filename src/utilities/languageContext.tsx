import React, { createContext, useState } from 'react';

type ContextTypes = {
    isEnglish: boolean,
    setIsEnglish: (arg: boolean) => void,
}

const defaultValues: ContextTypes = {
    isEnglish: true,
    setIsEnglish: () => {},
}

export const LanguageContext = createContext(defaultValues);

type ProviderProps = {
    children: React.ReactChild[],
}

const Provider = ({children}: ProviderProps) => {

    const [isEnglish, setIsEnglish] = useState(false);

    return(
        <LanguageContext.Provider value={{isEnglish, setIsEnglish}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default Provider;