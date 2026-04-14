import type { Component, InjectionKey } from 'vue';
import type { Awaitable, PageData } from '../shared';
export interface Route {
    path: string;
    hash: string;
    query: string;
    data: PageData;
    component: Component | null;
}
export interface Router {
    /**
     * Current route.
     */
    route: Route;
    /**
     * Navigate to a new URL.
     */
    go: (to: string, options?: {
        initialLoad?: boolean;
        smoothScroll?: boolean;
        replace?: boolean;
    }) => Promise<void>;
    /**
     * Called before the route changes. Return `false` to cancel the navigation.
     */
    onBeforeRouteChange?: (to: string) => Awaitable<void | boolean>;
    /**
     * Called before the page component is loaded (after the history state is
     * updated). Return `false` to cancel the navigation.
     */
    onBeforePageLoad?: (to: string) => Awaitable<void | boolean>;
    /**
     * Called after the page component is loaded (before the page component is updated).
     */
    onAfterPageLoad?: (to: string) => Awaitable<void>;
    /**
     * Called after the route changes.
     */
    onAfterRouteChange?: (to: string) => Awaitable<void>;
}
export declare const RouterSymbol: InjectionKey<Router>;
interface PageModule {
    __pageData: PageData;
    default: Component;
}
export declare function createRouter(loadPageModule: (path: string) => Awaitable<PageModule | null>, fallbackComponent?: Component): Router;
export declare function useRouter(): Router;
export declare function useRoute(): Route;
export declare function scrollTo(hash: string, smooth?: boolean, scrollPosition?: number): void;
export {};
