import { type InjectionKey, type Ref } from 'vue';
import { type PageData, type SiteData } from '../shared';
import type { Route } from './router';
export declare const dataSymbol: InjectionKey<VitePressData>;
export interface VitePressData<T = any> {
    /**
     * Site-level metadata
     */
    site: Ref<SiteData<T>>;
    /**
     * themeConfig from .vitepress/config.js
     */
    theme: Ref<T>;
    /**
     * Page-level metadata
     */
    page: Ref<PageData>;
    /**
     * page frontmatter data
     */
    frontmatter: Ref<PageData['frontmatter']>;
    /**
     * dynamic route params
     */
    params: Ref<PageData['params']>;
    title: Ref<string>;
    description: Ref<string>;
    lang: Ref<string>;
    dir: Ref<string>;
    localeIndex: Ref<string>;
    isDark: Ref<boolean>;
    /**
     * Current location hash
     */
    hash: Ref<string>;
}
export declare const siteDataRef: Ref<SiteData>;
export declare function initData(route: Route): VitePressData;
export declare function useData<T = any>(): VitePressData<T>;
