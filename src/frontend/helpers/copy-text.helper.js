import { prodUrl } from '../config/urls';

export const urlToShare = (slug) => `${prodUrl}/blog/${slug}`;

export const copyTextToClipboard = (e, string) => {
	e.preventDefault();
	const textarea = document.createElement('textarea');
	textarea.innerText = string;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
};

export const handleCopyUrl = (e, slug) => {
	copyTextToClipboard(e, urlToShare(slug));
};
