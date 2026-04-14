import type { DefaultTheme } from 'vitepress/theme';
import { type ComputedRef } from 'vue';
/**
 * a11y: cache the element that opened the Sidebar (the menu button) then
 * focus that button again when Menu is closed with Escape key.
 */
export declare function useCloseSidebarOnEscape(close: () => void): void;
export declare function useSidebarControl(): {
    isOpen: import("vue").Ref<boolean, boolean>;
    open: () => void;
    close: () => void;
    toggle: () => void;
};
export declare function useSidebarItemControl(item: ComputedRef<DefaultTheme.SidebarItem>): {
    collapsed: import("vue").Ref<boolean, boolean>;
    collapsible: ComputedRef<boolean>;
    isLink: ComputedRef<boolean>;
    isActiveLink: import("vue").Ref<boolean, boolean>;
    hasActiveLink: ComputedRef<boolean>;
    hasChildren: ComputedRef<boolean>;
    toggle: () => void;
};
