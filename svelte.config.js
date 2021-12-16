// import adapter from '@sveltejs/adapter-auto';

import vercel from '@sveltejs/adapter-vercel';
// import adapter from '@sveltejs/adapter-netlify';
const config = {
	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
