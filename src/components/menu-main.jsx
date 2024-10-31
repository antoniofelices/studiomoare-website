import slugify from "@sindresorhus/slugify";

const MainMenu = () => {

	const dataFragments = ["Proyectos", "Contacto"]

	const path = window.location.pathname
	const slug = path.replace(/\//g,'')

	return(
		<nav className="mx-2">
			<ul className="flex gap-x-2 flex-col md:flex-row text-4xl lg:text-sm">
				{dataFragments.map((item) => (
					<li key={item}>
						<a href={`/${slugify(item)}`} className={slug === slugify(item) ? 'border-b border-dotted lg:pb-1' : '' }>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	)

}

export default MainMenu
