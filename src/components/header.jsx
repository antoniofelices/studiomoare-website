import { useState } from 'react'
import Logo from './logo'
import MainMenu from './menu-main'
import LangMenu from './menu-lang'
import ButtonToggle from './button-toggle'
import { useMediaQuery } from 'react-responsive'

const Header = ( props ) => {

	const dataFragments = {
		"fragment_1": "inicio"
	}

	const [isOpen, setIsOpen] = useState(false);
	const includeMainMenu = props.includeMainMenu;
	const isMobile = useMediaQuery({ maxWidth: 1140 })
	const isDesktop = useMediaQuery({ minWidth: 1140 })
	const classButton = isOpen ? 'navigation-open z-20' : 'navigation-is-close'

	return(
		<header className={`absolute w-lvw py-4`}>
			<div className="container flex justify-between items-center">
				<a href="/" aria-label={dataFragments.fragment_1}>
					<Logo />
				</a>
				<div className="flex content-center">
				{includeMainMenu &&
					<>
					{isMobile &&
						<>
							<button onClick={() => setIsOpen(!isOpen)} className={classButton}>
								{isOpen
									? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
									: <svg width="32" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"> <path d="m 0,4.7830688 h 24 v 2.4 H 0 Z"></path> <path d="m 0,16.816931 h 22 v 2.4 H 0 Z"></path> <path d="m 0,10.8 h 20 v 2.4 H 0 Z"></path> </svg>
								}
							</button>
							{isOpen &&
								<div className="fixed top-0 left-0 h-3/6 w-screen bg-m-orange z-10">
									<div className="grid place-items-center h-full">
									<MainMenu />
									<LangMenu />
									</div>
								</div>
							}
							<ButtonToggle />
						</>
					}
					{isDesktop &&
						<>
							<MainMenu />
							<LangMenu />
							<ButtonToggle />
						</>
					}
				</>
				}
				{!includeMainMenu &&
					<>
						<LangMenu />
						<ButtonToggle />
					</>
				}
				</div>
			</div>
		</header>
	)

}

export default Header
