import React, { createContext, useState, useEffect } from 'react';
import languages from './languages';

type ObjectLiteral = {
    [key: string]: string,
}

type ContextTypes = {
    isEnglish: boolean,
    setIsEnglish: (arg: boolean) => void,
    language: ObjectLiteral,
}

const defaultValues: ContextTypes = {
    isEnglish: true,
    setIsEnglish: () => {},
    language: {},
}

export const LanguageContext = createContext(defaultValues);

type ProviderProps = {
    children: React.ReactChild[],
}

const Provider = ({children}: ProviderProps) => {

    const [isEnglish, setIsEnglish] = useState(true);
    const [language, setLanguage] = useState({});

    useEffect(() => {
        isEnglish ? setLanguage(languages.english) : setLanguage(languages.polish);
    }, [isEnglish]);

    return(
        <LanguageContext.Provider value={{isEnglish, setIsEnglish, language}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default Provider;