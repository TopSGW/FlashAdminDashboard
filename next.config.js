/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	redirects: async function () {
		return [
			{
				source: '/dashboard/newaccount',
				destination: '/dashboard/newaccount/1',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
