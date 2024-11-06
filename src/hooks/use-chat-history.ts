import { create } from "zustand";

type ChatObject = {
    id: string;
    title: string;
    messages: number;
    createdAt: Date;
};
type ChatState = {
    list: ChatObject[];
    initialize: (p: ChatObject[]) => void;
    append: (chatObject: ChatObject) => void;
    update: (id: string, chatObject: Partial<ChatObject>) => void;
};

export const useChatHistory = create<ChatState>((set) => ({
    list: [],
    append: (p: ChatObject) => set((state) => ({ list: [...state.list, p] })),
    update: (id, chatObject) =>
        set((state) => {
            if (state.list.length === 0) {
                return {
                    list: [{ ...chatObject, createdAt: new Date(), id }],
                } as ChatState;
            } else {
        const list = state.list.map((item) => {
            if (item.id === id) {
                return { ...item, ...chatObject };
            }
            return item;
        });
        return {
              list,
          };
      }
    }),
    initialize: (p: ChatObject[]) => set({ list: p }),
}));
