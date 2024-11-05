const LangMenu = ( props ) => {

	const dataFragments = ["es", "ca"]

	return(
		<nav aria-label="Menu idiomas" className="flex items-center mx-2">
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
			<ul className="flex gap-x-2 text-xs md:text-sm uppercase font-light">
				{dataFragments.map((item, index) => (
					<li key={index}>
						<a href={`/${item === 'es' ? '' : (item)}`}>{item}</a>
					</li>
				))}
			</ul>
		</nav>
	)

}

export default LangMenu
