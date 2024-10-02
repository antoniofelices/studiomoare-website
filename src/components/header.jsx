import React from "react"
import Logo from "./logo"
import MainMenu from "./menu-main"
import LangMenu from "./menu-lang"

const Header = ( props ) => {

	const dataFragments = {
		"fragment_1": "inicio"
	}

	const includeMainMenu = props.includeMainMenu;

	return(
		<header className={`absolute w-lvw py-4`}>
			<div className="container flex justify-between items-center">
				<a href="/" aria-label={dataFragments.fragment_1}>
					<Logo />
				</a>
				{includeMainMenu
					? <MainMenu />
					: <LangMenu />
				}
			</div>
		</header>
	)

}

export default Header
