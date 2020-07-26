import React from 'react';
import ReactMarkdown from 'react-markdown';

export const transformMarkdownToHtml = (text) => (
	<ReactMarkdown source={text} />
);
