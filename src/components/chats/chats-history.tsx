"use client";
import { useParams } from "next/navigation";
import * as React from "react";
import { PiChats } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { useChatHistory } from "@/hooks/use-chat-history";
import { formatDate } from "@/lib/date-formatter";
import { Transition } from "@headlessui/react";

type ThreadLinkProp = {
  title: string;
  date: Date;
  messages: number;
  isCurrent: boolean;
  id: string;
};

const ThreadLink = ({
  title,
  id,
  date,
  messages,
  isCurrent,
}: ThreadLinkProp) => {
  const [show, setShow] = React.useState(false);
  // this a workaround and BUT it should fix later
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);
  return (
    <Link href={`/${id}`}>
      <div
        className={`no-draggable group relative mx-3 truncate rounded-lg  ${
          isCurrent ? "bg-[#055160] text-white" : "text-[#ffffffa8]"
        }  hover:bg-[#055160] hover:text-white active:opacity-90`}
      >
        <div
          className="flex items-center gap-2 p-2"
          data-discover="true"
          // href="/c/67188957-4434-800c-b470-7f768859934d"
        >
          <div
            className="relative grow overflow-hidden whitespace-nowrap text-sm capitalize"
            dir="auto"
          >
            {title}
            <div className="from-token-sidebar-surface-primary from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary can-hover:group-hover:w-10 can-hover:group-hover:from-60% absolute bottom-0 top-0 w-8 from-0% to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r" />
          </div>
        </div>
        <div className="can-hover:group-hover:flex absolute bottom-0 top-0 hidden items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0">
          <span className="" data-state="closed">
            <button
              className="text-token-text-secondary hover:text-token-text-primary radix-state-open:text-token-text-secondary flex items-center justify-center transition"
              data-testid="history-item-0-options"
              type="button"
              id="radix-:r4q:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-md"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
    </Link>
  );
};
export const ChatsHistory = () => {
  const params = useParams();
  const list = useChatHistory((s) => s.list);
  const append = useChatHistory((s) => s.append);
  return (
    <div className="relative bg-[#103a44] dark:bg-[#333538]">
      <div className="sticky top-0 z-[2] flex flex-col space-y-2 p-2 pb-3">
        <div className="md:h-header-height flex  h-[60px] items-center justify-between">
          <span className="flex" data-state="closed">
            <div className="text-2xl text-white ml-5 font-bold">AI</div>
          </span>
          <div className="flex">
            <span className="flex" data-state="closed">
              <button
                onClick={() => {
                  append({
                    id: (+Math.random() * 100).toFixed(0) + "",
                    title: "untitled",
                    createdAt: new Date(),
                    messages: 0,
                  });
                }}
                aria-label="New chat"
                data-testid="create-new-chat-button"
                className="text-token-text-secondary disabled:text-token-text-quaternary focus-visible:bg-token-sidebar-surface-secondary h-10 rounded-lg px-2 text-[#ffffffa8] hover:text-white focus-visible:outline-0 bg-[#055160]"
              >
               <IoMdAdd size={22} />
              </button>
            </span>
          </div>
        </div>

        <div tabIndex={0} style={{ willChange: "auto", transform: "none" }}>
        </div>
      </div>
      <div className="bg-token-sidebar-surface-primary sticky top-0 z-20">
        <span className="flex h-9 items-center">
          <h3 className="overflow-hidden text-ellipsis break-all px-2 pb-2 pt-3 text-xs font-semibold text-[#ffffffa8]">
            Today
          </h3>
        </span>
      </div>
      <ScrollArea className="scrollbar-hide h-[89vh] space-y-1 overflow-y-auto">
        {list.reverse().map((o) => (
          <ThreadLink
            id={o.id + ""}
            key={o.id}
            date={o.createdAt}
            messages={o.messages}
            title={o.title}
            isCurrent={o.id == (params?.chat as string)}
          />
        ))}
      </ScrollArea>
    </div>
  );
};
