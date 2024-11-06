import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Markdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
      className="prose mb-2 max-w-full tracking-wide prose-p:mb-2 prose-p:mt-1 prose-p:leading-5 prose-p:text-[#0F0F0F] dark:prose-p:text-[#eeeeee] prose-li:mb-1 prose-li:leading-5"
    >
      {children}
    </ReactMarkdown>
  );
};
