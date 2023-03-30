/** @format */

import CookieConsent, { Cookies } from 'react-cookie-consent';
export default function CookieAcceptBar() {
	return (
		<>
			<CookieConsent
				location='top'
				buttonText='Accept'
				style={{ background: '#2B373B' }}
				buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
				overlay
			>
				This website uses cookies to enhance the user experience.{' '}
				<span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span>
			</CookieConsent>
		</>
	);
}
