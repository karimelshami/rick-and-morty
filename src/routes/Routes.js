import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router'
import HomeContainer from 'modules/common/containers/HomeContainer'
import Cookies from 'js-cookie'

const Routes = () => {
  let history = useHistory()
  useEffect(() => {
    if (Cookies.get('')) {
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  )
}
export default Routes
