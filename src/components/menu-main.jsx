
const MainMenu = () => {

	const dataFragments = {
		"fragment_1": "Proyectos",
		"fragment_2": "proyectos-desarrollo-web",
		"fragment_3": "Contacto",
		"fragment_4": "contacto"
	}

	return(
		<nav>
			<ul className="flex gap-x-2 text-xs md:text-sm">
				<li>
					<a href={`/${dataFragments.fragment_2}`}>{dataFragments.fragment_1}</a>
				</li>
				<li>
					<a href={`/${dataFragments.fragment_4}`}>{dataFragments.fragment_3}</a>
				</li>
			</ul>
		</nav>
	)

}

export default MainMenu
