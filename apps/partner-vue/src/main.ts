import './styles.scss';

import { createApp } from 'vue';
import App from './app/App.vue';
import router from './app/app.routes';

// Import Bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const app = createApp(App);

app.use(router);
app.mount('#root');
