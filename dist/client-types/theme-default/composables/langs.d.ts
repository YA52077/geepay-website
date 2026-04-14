export declare function useLangs({ correspondingLink }?: {
    correspondingLink?: boolean | undefined;
}): {
    localeLinks: import("vue").ComputedRef<{
        text: string;
        link: string;
        lang: string | undefined;
        dir: string | undefined;
    }[]>;
    currentLang: import("vue").ComputedRef<{
        label: string;
        link: string;
    }>;
};
