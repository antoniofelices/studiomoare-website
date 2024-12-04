import { defaultLang, showDefaultLang, routes } from './ui';
import { stringToTranslate } from './strings-to-translate';

// Return es or ca
export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/');
	if (lang in stringToTranslate) return lang as keyof typeof stringToTranslate;
	return defaultLang;
}

// 
export function useTranslations(lang: keyof typeof stringToTranslate) {
	return function t(key: keyof typeof stringToTranslate[typeof defaultLang]) {
		return stringToTranslate[lang][key] || stringToTranslate[defaultLang][key];
	}
}

// Return translatePath
export function useTranslatedPath(lang: keyof typeof stringToTranslate) {
	return function translatePath(path: string, l: string = lang) {
		const pathName = path.replaceAll('/', '');
		const hasTranslation = defaultLang !== l && routes[l] !== undefined && routes[l][pathName] !== undefined
		const translatedPath = hasTranslation ? '/' + routes[l][pathName] : path
	
		return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
	  }
}

export function getRouteFromUrl(url: URL): string | undefined {
	const pathname = new URL(url).pathname;
	const parts = pathname?.split('/');
	const path = parts.pop() || parts.pop();

	if (path === undefined) {
		return undefined;
	}

	const currentLang = getLangFromUrl(url);

	if (defaultLang === currentLang) {
		const route = Object.values(routes)[0];
		return route[path] !== undefined ? route[path] : undefined;
	}

	const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined  => {
		return Object.keys(obj).find((key) => obj[key] === value);
	}

	const reversedKey = getKeyByValue(routes[currentLang], path);

	if (reversedKey !== undefined) {
		return reversedKey;
	}

	return undefined;
}