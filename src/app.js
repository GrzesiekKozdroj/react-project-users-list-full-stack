import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import store from './store/store.js'
import addUsers from './actions/users.js'


class App extends React.Component {
    componentDidMount(){
        axios.get('http://localhost:4200/users')
             .then((response)=>{
                 console.log(response.data)
                 store.dispatch(addUsers(response.data.results))
             })
    }
    render() {
        return (
            <h1>Welcome to REACT!!</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))