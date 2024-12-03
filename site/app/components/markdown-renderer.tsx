import React, { memo, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import clsx from "clsx";
// import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
    markdown: string;
    onHover?: (tagId: string, content: string) => void;
    onClick?: (tagId: string, content: string) => void;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = memo(
    ({ markdown, onHover, onClick }: MarkdownRendererProps) => {
        const [hoveredElement, setHoveredElement] = useState<string | null>(
            null
        );

        const handleHover = (tagId: string, content: string) => {
            setHoveredElement(content);

            if (onHover) onHover(tagId, content);
        };

        const handleClick = (tagId: string, content: string) => {
            if (onClick) onClick(tagId, content);
        };

        return (
            <div className="relative h-full w-full prose dark:prose-invert break-words prose-p:leading-relaxed prose-pre:p-0 text-wrap whitespace-normal prose-p:last:mb-0 prose-p:mb-2">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({ inline, className, children, ...props }) {
                            const content = String(children).trim();

                            const match = /language-(\w+)/.exec(
                                className || ""
                            );

                            return !inline && match ? (
                                <SyntaxHighlighter
                                    // style={
                                    //     darcula as
                                    //         | {
                                    //               [
                                    //                   key: string
                                    //               ]: React.CSSProperties;
                                    //           }
                                    //         | undefined
                                    // }
                                    language={match[1]}
                                    PreTag="div"
                                    {...props}
                                    onMouseEnter={() =>
                                        handleHover("code", content)
                                    }
                                    onClick={() => handleClick("code", content)}
                                >
                                    {content}
                                </SyntaxHighlighter>
                            ) : (
                                <code
                                    role="presentation"
                                    className={className}
                                    {...props}
                                    onMouseEnter={() =>
                                        handleHover("inline-code", content)
                                    }
                                    onClick={() =>
                                        handleClick("inline-code", content)
                                    }
                                >
                                    {content}
                                </code>
                            );
                        },
                        // Customize headings
                        h1({ node, children, className, ...props }) {
                            const content = String(children).trim();
                            return (
                                <h1
                                    role="presentation"
                                    {...props}
                                    onMouseEnter={() =>
                                        handleHover("h1", content)
                                    }
                                    onClick={() => handleClick("h1", content)}
                                    className={clsx(
                                        className,
                                        "text-2xl font-bold text-foreground dark:text-background mb-8"
                                    )}
                                >
                                    {children}
                                </h1>
                            );
                        },
                        h2({ node, children, className, ...props }) {
                            const content = String(children).trim();
                            return (
                                <h2
                                    role="presentation"
                                    {...props}
                                    onMouseEnter={() =>
                                        handleHover("h2", content)
                                    }
                                    onClick={() => handleClick("h2", content)}
                                    className={clsx(
                                        className,
                                        "text-xl font-semibold dark:text-background text-foreground mb-2"
                                    )}
                                >
                                    {children}
                                </h2>
                            );
                        },

                        // Customize blockquotes
                        blockquote({ node, children, ...props }) {
                            const content = String(children).trim();
                            return (
                                <blockquote
                                    role="presentation"
                                    {...props}
                                    onMouseEnter={() =>
                                        handleHover("blockquote", content)
                                    }
                                    onClick={() =>
                                        handleClick("blockquote", content)
                                    }
                                >
                                    {children}
                                </blockquote>
                            );
                        },

                        // Customize lists
                        li({ node, children, ...props }) {
                            const content = String(children).trim();
                            return (
                                <li
                                    role="presentation"
                                    {...props}
                                    onMouseEnter={() =>
                                        handleHover("li", content)
                                    }
                                    onClick={() => handleClick("li", content)}
                                >
                                    {children}
                                </li>
                            );
                        },
                    }}
                >
                    {markdown}
                </ReactMarkdown>

                {/* {hoveredElement && (
                    <div className="absolute top-0 right-0 bg-gray-800 text-white p-2 rounded shadow-lg">
                        <p>{`Actions for: ${hoveredElement}`}</p>
                    </div>
                )} */}
            </div>
        );
    }
);

MarkdownRenderer.displayName = "MarkdownRenderer";
