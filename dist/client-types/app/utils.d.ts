import { type AsyncComponentLoader } from 'vue';
import { type Awaitable } from '../shared';
export { escapeHtml as _escapeHtml, inBrowser } from '../shared';
/**
 * Join two paths by resolving the slash collision.
 */
export declare function joinPath(base: string, path: string): string;
/**
 * Append base to internal (non-relative) urls
 */
export declare function withBase(path: string): string;
/**
 * Converts a url path to the corresponding js chunk filename.
 */
export declare function pathToFile(path: string): string | null;
export declare let contentUpdatedCallbacks: (() => any)[];
/**
 * Register callback that is called every time the markdown content is updated
 * in the DOM.
 */
export declare function onContentUpdated(fn: () => any): void;
export declare function defineClientComponent(loader: AsyncComponentLoader, args?: any[], cb?: () => Awaitable<void>): {
    setup(): () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | null;
};
export declare function getScrollOffset(): number;
