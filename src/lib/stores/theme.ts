import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const stored = (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) as Theme | null;
const initial: Theme = stored ?? 'light';

export const theme = writable<Theme>(initial);

theme.subscribe((value) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
    localStorage.setItem('theme', value);
  }
});