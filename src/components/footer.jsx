import Logo from "./logo"

const Footer = () => {

	const dataFragments = {
		"fragment_1": "contacto",
		"fragment_2": "antonio",
		"fragment_3": "web@studiomoare.com",
	}

	return (
		<footer className="grid place-items-center min-h-60">
			<section className="container flex justify-start items-center gap-x-3">
				<a href="/" aria-label={dataFragments.fragment_1}>
					<Logo height='2.5rem' />
				</a>
				<div className="">
					<h3 className="text-sm">{dataFragments.fragment_1}</h3>
					<address aria-label="Secondary Navigation" className="not-italic">
						<span className="contact-info-mail">{dataFragments.fragment_3}</span><br/>
					</address>
				</div>
			</section>
		</footer>
	)

}

export default Footer