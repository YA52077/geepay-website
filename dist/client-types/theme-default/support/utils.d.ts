export declare function throttleAndDebounce(fn: () => void, delay: number): () => void;
export declare function ensureStartingSlash(path: string): string;
export declare function isLinkExternal(href?: string, target?: string, external?: boolean): boolean;
export declare function normalizeLink(url: string): string;
