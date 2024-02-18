import { marked } from 'marked';
import React, { useState, useEffect } from 'react';

const MarkdownViewer = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        const fetchMarkdownFile = async () => {
            try {
                const response = await fetch('iotwu.MD');
                const markdownText = await response.text();
                setMarkdownContent(marked(markdownText));
            } catch (error) {
                console.error('Error fetching Markdown file:', error);
            }
        };

        fetchMarkdownFile();
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    );
};

export default MarkdownViewer;
