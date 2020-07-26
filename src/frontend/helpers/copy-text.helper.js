import { prodUrl } from '../config/urls';

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
	const urlToShare = `${prodUrl}/blog/${slug}`;
	copyTextToClipboard(e, urlToShare);
};
