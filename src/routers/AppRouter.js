import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Horse from '../components/Horse';
import AllHorse from '../components/AllHorse';
import HelpModal from '../components/HelpModal';
// import PdfGrabber from '../components/PdfGrabber';
import { HashLink as Link } from 'react-router-hash-link';


const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' component={AllHorse} exact={true} />
            <Route path='/horse/:id' component={Horse} exact={true} />
            <Route path='/header' component={Header} />
            <Route component={NotFoundPage} />
        </Switch>
        <HelpModal />
    </BrowserRouter>
);

export default AppRouter;



// const AppRouter = () => (
//     <BrowserRouter>
//         <Header />
//         <Switch>
//             <Route path='/' component={Horse} exact={true} />
//             <Route path='/header' component={Header} />
//             <Route path='/horse' component={Horse} />
//             <Route component={NotFoundPage} />
//         </Switch>
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <a id='7' href='/#7'></a>
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse2 />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <Horse />
//         <HelpModal />
//     </BrowserRouter>
// );