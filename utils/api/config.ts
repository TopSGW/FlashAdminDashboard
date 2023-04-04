/** @format */
export const baseUrl = process.env.BASE_URL || 'http://localhost:5000';
const config = {
	auth: {
		getProfile: 'getProfile',
		createAdmin: 'createAdmin',
		searchAdmin: 'searchAdmin',
		signIn: 'signIn',
		verifyOTP: 'verify-otp',
		setupOTP: 'setupOTP',
		loginOTP: 'loginOTP',
		refreshToken: 'refreshToken',
		disableOTP: 'disableOTP',
		logout: 'logOut',
	},
};

export function getKeyPath<T extends object, V>(
	obj: T,
	val: V
): string[] | undefined {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			const element = obj[key];
			if (element === val) {
				return [key];
			}
			if (typeof element === 'object' && element !== null) {
				const path = getKeyPath(element, val);
				if (path !== undefined) {
					return [key, ...path];
				}
			}
		}
	}
}
type Url = typeof config;

export function getUrl(_url: string) {
	const path = getKeyPath<Url, string>(config, _url);
	if (typeof path === 'undefined') {
		return '';
	} else {
		switch (path[0]) {
			case 'auth':
				return _url;
		}
	}
}
export default config;
