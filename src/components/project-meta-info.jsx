import React from "react"

const ProjectMetaInfo = ( props ) => {

	const dataFragments = {
		"fragment_1": "Año",
		"fragment_2": "Cliente",
		"fragment_3": "URL",
		"fragment_4": "No disponible online."
	}

	return (
		<ul className="sm:flex gap-x-4 text-xs lg:text-sm">
			<li className="sm:flex flex-col"><span>{dataFragments.fragment_1}</span> {props.year}</li>
			<li className="sm:flex flex-col"><span>{dataFragments.fragment_2}</span> {props.client}</li>
			{props.url
			? <li className="sm:flex flex-col"><span>{dataFragments.fragment_3}</span> <a href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a></li>
			: <li>&#x000D7; {dataFragments.fragment_4}</li>
			}
		</ul>
	)

}

export default ProjectMetaInfo
