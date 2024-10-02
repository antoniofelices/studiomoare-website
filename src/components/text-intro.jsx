import React from "react"

const TextIntro = ( props ) => {
	
	return (
		<div className="max-w-md">
			<p className="lg:text-2xl py-4">{props.text}</p>
			<ul>
				<li className="pt-1">
					<a href={`/${props.linktodevelop}`}>{props.textlinktodevelop} <span className="icon" role="img">&#x02192;</span></a>
				</li>
				<li className="pt-1">
					<a href={props.linktodesign} rel="noopener noreferrer" target="_blank">{props.textlinktodesign} <span className="icon" role="img">&#x02197;</span></a>
				</li>
			</ul>
		</div>
	)

}

export default TextIntro