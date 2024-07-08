/**
 * @param {string} name
 * @param {boolean | string} value
 * @param {number} days
 */
export function setCookie(name, value, days) {
    if (typeof document === 'undefined') {
        return null; 
      }
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	const expires = 'expires=' + date.toUTCString();
	document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

/**
 * @param {string} name
 */
export function getCookie(name) {
    if (typeof document === 'undefined') {
        return null; 
      }
	const cookieName = name + '=';
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(';');
	for (let i = 0; i < cookieArray.length; i++) {
		let cookie = cookieArray[i];
		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(cookieName) === 0) {
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return false;
}
