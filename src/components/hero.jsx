import React from "react"

const Hero = ( props ) => {
  
	const textintro = props.textintro ? props.textintro : 'Studio Moaré'

	return (
		<section className="grid place-items-center pt-44 pb-16 lg:pt-48 lg:pb-24">
			<div className="container">
				<div className="max-w-2xl">
					<p className="text-xs text-m-orange">{textintro}</p>
					<h1 className="text-4xl sm:text-6xl lg:text-8xl py-4">{props.maintitle}</h1>
					{props.secondarycontent &&
					<p className="text-sm sm:text-l lg:text-2xl">{props.secondarycontent}</p>
					}
				</div>
			</div>
		</section>
	)

}

export default Hero
