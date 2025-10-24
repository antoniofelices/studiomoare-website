import { useTranslations, getLangFromUrl } from '@i18n/utils'

const ProjectListItem = ({ linktoproject, title, type, year, url }) => {
    const lang = getLangFromUrl(window.location)
    const translateString = useTranslations(lang)
    const linktoProjectRaw = linktoproject || ''
    const projectURL =
        {
            es: linktoProjectRaw,
            ca: `ca/${linktoProjectRaw}`,
        }[lang] ?? linktoProjectRaw

    return (
        <>
            <li className="py-4 border-b border-m-gray-300 dark:border-m-blue-800">
                <h3 className="text-l sm:text-xl lg:text-2xl">
                    <a
                        href={`/${projectURL}`}
                        rel="bookmark"
                        className="border-none"
                    >
                        {title}{' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline feather feather-arrow-right"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </h3>
                <ul className="md:flex gap-x-2 text-xs mt-1">
                    <li>
                        <span>{translateString('project')}</span>: {type}
                    </li>
                    <li>
                        <span>{translateString('projectYear')}</span>: {year}
                    </li>
                    {url ? (
                        <li>
                            {translateString('projectURL')}:{' '}
                            <a
                                href={url}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {url}
                            </a>
                        </li>
                    ) : (
                        <li>&#x000D7; {translateString('projectOffLine')}.</li>
                    )}
                </ul>
            </li>
        </>
    )
}

export default ProjectListItem
