import { type App } from 'vue';
import { type Router } from './router';
export declare function createApp(): Promise<{
    app: App<any>;
    router: Router;
    data: import("./data").VitePressData<any>;
}>;
