import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const MarkdownVisualizer = ({ source }: { source: string }) => {
  return (
    <ReactMarkdown
      skipHtml={false}
      rehypePlugins={[rehypeRaw]}
      transformImageUri={(uri) =>
        uri.startsWith('http')
          ? uri
          : `${process.env.NEXT_PUBLIC_REACT_IMAGE_BASE_URL}${uri}`
      }
      components={{
        h1: (props) => {
          return <h1 className="text-xl" {...props} />;
        },
        iframe: (props) => {
          return (
            <div className="flex w-full justify-center h-auto py-4">
              <iframe className="w-2/3 h-80" {...props}></iframe>
            </div>
          );
        },
        p: (props) => {
          return <p {...props} />;
        },
        img: (props) => {
          return (
            <div className="flex flex-col justify-center items-center py-4">
              <img className="w-auto max-w-full mx-auto " {...props} />
              {props.alt && (
                <span className="text-gray-500 font-thin pt-2">
                  {props.alt}
                </span>
              )}
            </div>
          );
        },
      }}
    >
      {source}
    </ReactMarkdown>
  );
};

export default MarkdownVisualizer;
