import { writable } from 'svelte/store';

export const theme = writable('gray');

export const hue = writable(0);
export const hue_step = writable(5);

export const palette = writable([]);
export const error_tolerance = writable(5);