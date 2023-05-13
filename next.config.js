/**
 * @format
 * @type {import('next').NextConfig}
 */
const withTM = require('next-transpile-modules')(['@amcharts/amcharts5'])

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
			{
				source: '/dashboard/role',
				destination: '/dashboard/role/1',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
module.exports = withTM({});