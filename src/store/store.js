
import { createStore } from 'redux'
import usersReduer from '../reducers/users.js'

const store = createStore(usersReduer)

store.subscribe(    () => { console.log( 'store data: ', store.getState() ) }    )

export default store