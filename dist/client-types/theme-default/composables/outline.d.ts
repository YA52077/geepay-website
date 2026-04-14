import type { DefaultTheme } from 'vitepress/theme';
import { type Ref } from 'vue';
export declare function resolveTitle(theme: DefaultTheme.Config): string;
export declare function getHeaders(range: DefaultTheme.Config['outline']): DefaultTheme.OutlineItem[];
export declare function resolveHeaders(headers: DefaultTheme.OutlineItem[], range?: DefaultTheme.Config['outline']): DefaultTheme.OutlineItem[];
export declare function useActiveAnchor(container: Ref<HTMLElement>, marker: Ref<HTMLElement>): void;
