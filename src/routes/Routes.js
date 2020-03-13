import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router'
import Cookies from 'js-cookie'

const HelloWorld = () => {
  return <div>Hello World</div>
}
const Routes = () => {
  let history = useHistory()
  useEffect(() => {
    if (Cookies.get('')) {
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={HelloWorld} />
    </Switch>
  )
}
export default Routes
