import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

import { isLocale } from '$lib/i18n/i18n-util';

const language: Handle = async ({ event, resolve }) => {
	const [, lang] = event.url.pathname.split('/');

	if (isLocale(lang)) {
		// Set lang attribute
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%lang%', lang)
		});
	}

	return await resolve(event);
};

export const handle: Handle = sequence(language);
