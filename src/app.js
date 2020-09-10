import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import store from './store/store.js'
import addUsers from './actions/users.js'
import Header from './components/Header.js'
import UserList from './components/UserList.js'
import { Provider } from 'react-redux'
import './css/style.css'

class App extends React.Component {
    componentDidMount(){
        axios.get('/users')
             .then((response)=>{
                 console.log(response.data)
                 store.dispatch(addUsers(response.data.results))
             })
    }
    render() {
        return (
            <div>
                <Header />
                <UserList />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>
    , 
    document.getElementById('root')
)