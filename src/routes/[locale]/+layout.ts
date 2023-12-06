import { setLocale } from '$lib/i18n/i18n-svelte';
import { detectLocale } from '$lib/i18n/i18n-util';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import type { LayoutLoad } from './$types';

export const load = (async (event) => {
	const locale = detectLocale(() => [event.params.locale ?? '']);
	await loadLocaleAsync(locale);
	setLocale(locale);
	return event.data;
}) satisfies LayoutLoad;
