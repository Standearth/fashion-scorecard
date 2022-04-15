import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},

		vite: {
			optimizeDeps: {
				include: ['sveltestrap', '@popperjs/core']
			}
		}
	}
};

export default config;
