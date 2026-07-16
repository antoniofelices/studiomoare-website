export const languages = {
    es: 'Español',
    ca: 'Català',
    en: 'English',
}

export type LangType = keyof typeof languages

export const defaultLang: LangType = 'es'

export const showDefaultLang = false

export const hreflangMap: Record<LangType, string> = {
    es: 'es-ES',
    ca: 'ca-ES',
    en: 'en',
}

export const ogLocales: Record<LangType, string> = {
    es: 'es_ES',
    ca: 'ca_ES',
    en: 'en_US',
}

export const routes: Record<LangType, Record<string, string>> = {
    es: {
        projects: 'proyectos',
        contact: 'contacto',
        thanks: 'gracias',
    },
    ca: {
        projects: 'projectes',
        contact: 'contacte',
        thanks: 'gracies',
    },
    en: {
        projects: 'projects',
        contact: 'contact',
        thanks: 'thanks',
    },
}
