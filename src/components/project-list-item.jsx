import React from "react"

const ProjectListItem = ( props ) => {

	const dataFragments = {
		"fragment_1": "Proyecto",
		"fragment_2": "Año",
		"fragment_3": "URL",
		"fragment_4": "No disponible online."
	}

	return (
		<li className="py-4 border-b dark:border-m-blue-800">
			<h3 className="text-l sm:text-xl lg:text-2xl">
				<a href={`/${props.linktoproject}`} rel="bookmark" className="border-none">{props.title} <span className="icon" role="img" aria-label="link to description project">&#x02192;</span></a>
			</h3>
			<ul className="md:flex gap-x-2 text-xs mt-1">
				<li><span>{dataFragments.fragment_1}</span>: {props.type}</li>
				<li><span>{dataFragments.fragment_2}</span>: {props.year}</li>
				{props.url
					? <li>{dataFragments.fragment_3}: <a href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a></li>
					: <li>&#x000D7; {dataFragments.fragment_4}</li>
				}
			</ul>
		</li>
	)

}

export default ProjectListItem
