import html from '../core.js';
import Header from '../Component/Header.js';
import TodoList from '../Component/TodoList.js';
import Footer from '../Component/Footer.js';
import {connect} from '../store.js'
const connector = connect();
function App({todos}){
    
    return html`
    <section class="todoapp">
    ${Header()}
    ${TodoList()}
    ${todos.length > 0 && Footer()}
    </section>
    `
}
export default connector(App);
