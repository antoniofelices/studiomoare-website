const LangMenu = () => {

	const dataFragments = {
		"fragment_1": "es",
		"fragment_2": "ca"
	}

	return(
		<nav aria-label="Menu idiomas">
			<ul className="flex gap-x-2 text-xs md:text-sm">
				<li>
					<a href="/">{dataFragments.fragment_1}</a>
				</li>
				<li>
					<a href={`/${dataFragments.fragment_2}`}>{dataFragments.fragment_2}</a>
				</li>
			</ul>
		</nav>
	)

}

export default LangMenu
