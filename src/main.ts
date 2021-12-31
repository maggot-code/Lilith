/*
 * @Author: maggot-code
 * @Date: 2021-12-29 11:24:44
 * @LastEditors: maggot-code
 * @LastEditTime: 2021-12-29 15:29:20
 * @Description: file content
 */
import type { App } from 'vue';

import { createApp } from 'vue';
import AppView from '@/App.vue';

function bootstrap(app: App): void {
    app.mount("#app", true);
}

void bootstrap(createApp(AppView));