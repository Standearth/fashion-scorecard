/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static'
import netlify  from '@sveltejs/adapter-netlify'
/*
export default {
	kit: {
		
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte'
	}
};*/

export default {
	kit: {
		adapter: netlify(),
		target: '#svelte'
	}
}
