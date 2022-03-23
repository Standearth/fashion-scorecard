/* @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static'
import netlify  from '@sveltejs/adapter-netlify'
import autoadapt from '@sveltejs/adapter-auto'
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
		adapter: netlify({
			// if true, will split your app into multiple functions
			// instead of creating a single one for the entire app
			split: false
		})
	}
};
