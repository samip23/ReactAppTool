import { createBrowserHistory, createHashHistory } from 'history';
import { useHistory } from 'react-router-dom';

const history = createHashHistory({forceRefresh:true});

export default history;