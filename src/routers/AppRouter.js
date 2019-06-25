import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import Horse from '../components/Horse';


const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' component={ExpenseDashboardPage} exact={true} />
            <Route path='/header' component={Header} />
            <Route path='/horse' component={Horse} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;