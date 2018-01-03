import React from 'react'
import { cofire } from 'cofire'
import { Link } from 'react-router-dom'

const Outro = ({authUser, isAuth, isAuthing, data, data2 }) => {
  return (<pre>
    {/*isAuth:{JSON.stringify(isAuth)} / isAuthing:{JSON.stringify(isAuthing)} / authUser: {JSON.stringify(authUser)} / */}
    <Link to='/dados/tuliofaria@gmail.com'>Tulio</Link> <Link to='/dados/everton@gmail.com'>Everton</Link>
    {JSON.stringify(data)}
    <Link to='/'>Voltar</Link>
  </pre>)
}



export default cofire(Outro)( props => {
  console.log('props inside cofire', props.match.params.email)
  let email = ''
  if(props.match.params.email){
    email = props.match.params.email
  }
  return {
    data: {
      collection: 'testing',
      where: [
        {
          alias: 'email',
          field: 'email', 
          op: '==', 
          value: email
        }
      ]
    }
  }
})

