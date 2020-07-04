import axios from "axios";

const state = {
    todos: [],
};

const getters = {
    getTodos: state => state.todos
};

const actions = {
    async fetchTodos({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data);
        
    },
    async addTodo({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{title});
        commit('addTodo', response.data);
        
    },
    async deleteTodo({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('deleteTodo', id);
        
    },
    async filterTodos({commit}, event){
        const limit = event.target.options[event.target.options.selectedIndex].value;
        
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
        commit('setTodos', response.data);
        
    },
    async updateTodo({commit}, updTodo){
                
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
        updTodo
        );
        console.log(response.data);
        
        commit('updateTodo', response.data);
        
    }
};

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    addTodo: (state, todo) => state.todos = [todo, ...state.todos],
    deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if(index !== -1){
            state.todos.splice(index, 1, updTodo);
        }
        
        
    }
};

export default{
    state, getters, mutations, actions
}