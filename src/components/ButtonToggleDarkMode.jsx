import { useEffect, useState } from 'react'

const ButtonToggleDarkMode = () => {

	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {

		const theme = (() => {
			if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
				return localStorage.getItem('theme');
			}
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				return 'dark';
			}
			return 'light';
		})();
	
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		}

	}, []);
	
	const handleClick = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		}
		setIsDarkMode(!isDarkMode);
	};

	return (
		<button
			onClick={handleClick}
			aria-label={`Toggle ${isDarkMode ? "light" : "dark"} mode`}
			className="mx-2"
		>
			{isDarkMode
				? <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
				: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
			}
		</button>
	)
}

export default ButtonToggleDarkMode