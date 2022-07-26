import appHeader from './cmps/app-header.cmp.js'
import keepApp from './apps/keep/pages/note-app.cmp.js'
import appFooter from './cmps/app-footer.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'


const options = {
    template: `
    <section>
        <app-header />
        <user-msg />
        <keep-app />
        <app-footer />
    </section>
    `,

    components: {
        appHeader,
        keepApp,
        appFooter,
        userMsg
    }
}

const app = Vue.createApp(options);
app.mount('#app');

