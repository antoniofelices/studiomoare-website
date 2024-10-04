import React from "react"

const TextIntro = ( props ) => {
	
	return (
		<div>
			<h1 className="text-7xl md:text-9xl lg:text-11xl 2xl:text-14xl text-center font-bold mb-4">{props.title}</h1>
			<p className="text-xl md:text-2xl lg:text-4xl text-center mb-6 max-w-3xl">{props.text}</p>
			<div className="flex justify-center">
				<button className="text-white bg-m-orange hover:bg-m-blue-600 focus:outline-none font-medium dark:bg-m-orange rounded-none text-xs lg:text-sm px-5 py-2.5 me-2 mb-2 flex items-center gap-x-2"><a href={`/${props.linktodevelop}`}>{props.textlinktodevelop}</a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
				<button className="text-white bg-m-violet hover:bg-m-blue-600 focus:outline-none font-medium dark:bg-m-violet rounded-none text-xs lg:text-sm px-5 py-2.5 me-2 mb-2 flex items-center gap-x-2"><a href={props.linktodesign} rel="noopener noreferrer" target="_blank"> {props.textlinktodesign}</a> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></button>
			</div>
		</div>
	)

}

export default TextIntro