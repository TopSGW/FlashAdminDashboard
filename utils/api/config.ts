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
	overview: {
		getTotalInfo: 'getTotalInfo',
		getActivity: 'getActivity',
	},
	statistic: {
		getTopInfo: 'getTopInfo',
		getCustomerByCountry: 'getCustomerByCountry',
		getCommonInfo: 'getCommonInfo',
		siteVisitors: 'siteVisitors',
		salesStatistic: 'salesStatistic',
	},
	client: {
		getClientHistory: 'getClientHistory',
		customer: 'customer',
	},
	bill: {
		getInvoices: 'getInvoices',
		updateInvoice: 'updateInvoice',
	},
	transaction: {
		getCommonInformation: 'getCommonInformation',
		getOrders: 'getOrders',
		getProfits: 'getProfits',
	},
	notification: {
		getNotification: 'getNotification',
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
			case 'overview':
				return 'overview/' + _url;
			case 'client':
				return 'clientHis/' + _url;
			case 'bill':
				return 'bill/' + _url;
			case 'transaction':
				return 'transaction/' + _url;
			case 'statistic':
				return 'statistics/' + _url;
			case 'notification':
				return 'notification/' + _url;
		}
	}
}
export default config;
