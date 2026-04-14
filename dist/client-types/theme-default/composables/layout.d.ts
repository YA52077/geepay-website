import type { useLayout as expected } from 'vitepress/theme';
import { type ComputedRef, type InjectionKey } from 'vue';
export declare function useLayout(): ReturnType<typeof expected>;
interface RegisterWatchersOptions {
    closeSidebar: () => void;
}
export declare function registerWatchers({ closeSidebar }: RegisterWatchersOptions): void;
export interface LayoutInfo {
    heroImageSlotExists: ComputedRef<boolean>;
}
export declare const layoutInfoInjectionKey: InjectionKey<LayoutInfo>;
export {};
