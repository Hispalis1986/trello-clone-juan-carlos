import { createStore } from 'vuex';

import trello from './modules/trello-store';

const trelloStore = createStore({
    modules: {
        trello
    },
    plugins: [] // Aqui me falta algo
})

export default trelloStore;

