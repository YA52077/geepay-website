import { type ComputedRef } from 'vue';
export declare function smartComputed<T>(getter: () => T, comparator?: (oldValue: T, newValue: T) => boolean): ComputedRef<T>;
