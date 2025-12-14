import { WINDOW_CONFIG, INITIAL_Z_INDEX } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const useWindowStore = create(
    immer((set) => ({
    windows : WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX+1,

    openWindow: (windowKey, data = null) =>
        set((state) => {
            const win = state.windows[windowKey];
            if (!win) {
                console.error(`Cannot open window: "${windowKey}" not found in WINDOW_CONFIG`);
                return;
            }
            win.isOpen = true;
            win.zIndex = state.nextZIndex;
            win.data = data ?? win.data;
            state.nextZIndex++;
        }),

    closeWindow: (windowKey) =>
        set((state) => {
            const win = state.windows[windowKey];
            if (!win) {
                console.error(`Cannot close window: "${windowKey}" not found in WINDOW_CONFIG`);
                return;
            }
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX;
            win.data = null
        }),
    
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if (!win) {
            console.error(`Cannot focus window: "${windowKey}" not found in WINDOW_CONFIG`);
            return;
        }
        win.zIndex = state.nextZIndex++;
    }),

    maximizeWindow: (windowKey) =>
        set((state) => {
            const win = state.windows[windowKey];
            if (!win) {
                console.error(`Cannot maximize window: "${windowKey}" not found in WINDOW_CONFIG`);
                return;
            }
            win.isMaximized = !win.isMaximized;
            win.isMinimized = false;
        }),

    minimizeWindow: (windowKey) =>
        set((state) => {
            const win = state.windows[windowKey];
            if (!win) {
                console.error(`Cannot minimize window: "${windowKey}" not found in WINDOW_CONFIG`);
                return;
            }
            win.isMinimized = !win.isMinimized;
            win.isMaximized = false;
        }),
        
    })),
);

export default useWindowStore;