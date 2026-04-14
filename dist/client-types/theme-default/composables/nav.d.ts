import { type InjectionKey } from 'vue';
export declare function useNav(): {
    isScreenOpen: import("vue").Ref<boolean, boolean>;
    openScreen: () => void;
    closeScreen: () => void;
    toggleScreen: () => void;
};
export interface NavExposedMethods {
    closeScreen: () => void;
}
export declare const navInjectionKey: InjectionKey<NavExposedMethods>;
