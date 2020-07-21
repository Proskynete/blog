import React from 'react';
import ReactMarkdown from 'react-markdown';

export const createMarkup = (text) => ({ __html: text });
export const printHtmlInSelector = (text) => (
	<span dangerouslySetInnerHTML={createMarkup(text)} />
);

export const transformMarkdownToHtml = (text) => (
	<ReactMarkdown source={text} />
);
