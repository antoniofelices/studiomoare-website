import { useTranslations } from '@i18n/utils'

const FilterProjects = ({ onWordPress, onReact, onAll }) => {
    const translateString = useTranslations('es')

    return (
        <div className="flex gap-4 mb-6 items-center lg:justify-end">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-sliders"
            >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <ul className="flex gap-4 text-xs lg:text-sm">
                <li>
                    <button onClick={onWordPress}>WordPress</button>
                </li>
                <li>
                    <button onClick={onReact}>React</button>
                </li>
                <li>
                    <button onClick={onAll}>{translateString('all')}</button>
                </li>
            </ul>
        </div>
    )
}

export default FilterProjects
