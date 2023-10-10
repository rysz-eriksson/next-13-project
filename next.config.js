/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		serverActions: true,
	},
	async redirects() {
		return [
		  {
			source: '/products',
			destination: '/products/all',
			permanent: true,
		  },
		  {
			source: '/products/all',
			destination: '/products/all/1',
			permanent: true,
		  },
		  {
			source: '/products/t-shirts',
			destination: '/products/t-shirts/1',
			permanent: true,
		  },
		  {
			source: '/products/hoodies',
			destination: '/products/hoodies/1',
			permanent: true,
		  },
		  {
			source: '/products/accessories',
			destination: '/products/accessories/1',
			permanent: true,
		  },
		]
	  },
};

module.exports = nextConfig
