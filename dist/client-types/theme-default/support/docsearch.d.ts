import type { DefaultTheme } from 'vitepress/theme';
import type { DocSearchAskAi } from '../../../../types/docsearch';
export type FacetFilter = string | string[] | FacetFilter[];
export interface ValidatedCredentials {
    valid: boolean;
    appId?: string;
    apiKey?: string;
    indexName?: string;
}
export type DocSearchMode = 'auto' | 'sidePanel' | 'hybrid' | 'modal';
export interface ResolvedMode {
    mode: DocSearchMode;
    showKeywordSearch: boolean;
    useSidePanel: boolean;
}
/**
 * Resolves the effective mode based on config and available features.
 *
 * - 'auto': infer hybrid vs sidePanel-only from provided config
 * - 'sidePanel': force sidePanel-only even if keyword search is configured
 * - 'hybrid': force hybrid (error if keyword search is not configured)
 * - 'modal': force modal even if sidePanel is configured
 */
export declare function resolveMode(options: Pick<DefaultTheme.AlgoliaSearchOptions, 'appId' | 'apiKey' | 'indexName' | 'askAi' | 'mode'>): ResolvedMode;
export declare function hasKeywordSearch(options: Pick<DefaultTheme.AlgoliaSearchOptions, 'appId' | 'apiKey' | 'indexName'>): boolean;
export declare function hasAskAi(askAi: DefaultTheme.AlgoliaSearchOptions['askAi']): boolean;
/**
 * Removes existing `lang:` filters and appends `lang:${lang}`.
 * Handles both flat arrays and nested arrays (for OR conditions).
 */
export declare function mergeLangFacetFilters(rawFacetFilters: FacetFilter | FacetFilter[] | undefined, lang: string): FacetFilter[];
/**
 * Validates that required Algolia credentials are present.
 */
export declare function validateCredentials(options: Pick<DefaultTheme.AlgoliaSearchOptions, 'appId' | 'apiKey' | 'indexName'>): ValidatedCredentials;
/**
 * Builds Ask AI configuration from various input formats.
 */
export declare function buildAskAiConfig(askAiProp: NonNullable<DefaultTheme.AlgoliaSearchOptions['askAi']>, options: DefaultTheme.AlgoliaSearchOptions, lang: string): DocSearchAskAi;
/**
 * Resolves Algolia search options for the given language,
 * merging in locale-specific overrides and language facet filters.
 */
export declare function resolveOptionsForLanguage(options: DefaultTheme.AlgoliaSearchOptions, localeIndex: string, lang: string): DefaultTheme.AlgoliaSearchOptions;
