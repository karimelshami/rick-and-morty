import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from 'modules/common/containers/HomeContainer'
import NotFound from 'modules/common/components/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route component={NotFound} />
    </Switch>
  )
}
export default Routes
