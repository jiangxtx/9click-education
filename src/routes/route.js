
import 'antd/dist/antd.min.css'
import '../css/public/public.css'

import React, { Component } from 'react'
import {
    Route, Router, hashHistory, IndexRoute,
} from 'react-router'
import Home from '../containers/home/Home'
import IndexHead from '../containers/home/Header'
import IndexFooter from '../components/index_footer'

import { navbarList } from '../Config/proj-config'
import EducationTrain from '../containers/EducationTrain.container'
import EducationTrainMain from '../containers/EducationTrainMain.container'
import EducationTrainOnline from '../containers/EducationTrainOnline.container'
import EducationTrainDetail from '../containers/EducationTrainDetail.container'

import StudentEducation from '../containers/StudentEducation.container'
import StudentEducationMain from '../containers/StudentEducationMain.container'
import StudentEducationStudy from '../containers/StudentEducationStudy.container'

import SuccessCase from '../containers/SuccessCase.container'
import SuccessCaseMain from '../containers/SuccessCaseMain.container'
import SuccessCaseDetail from '../containers/SuccessCaseDetail.container'

import Aboutus from '../containers/AboutUs.container'
import AboutusMain from '../containers/AboutUsMain.container'
import AboutusTeam from '../containers/AboutUsTeam.container'
import AboutusPartner from '../containers/AboutUsPartner.container'
import AboutusRecruit from '../containers/AboutUsRecruit.container'
import AboutusContact from '../containers/AboutUsContact.container'


const Roots = (props) => (
    <div>
        <IndexHead />
        { props.children }
        <IndexFooter />
    </div>
)

const HomeRoute = (
    <Router history={hashHistory}>
        <Route path="/" component={Roots} >
            <IndexRoute component={Home} />
            <Route path={ navbarList[1].link } component={ EducationTrain } >
                <IndexRoute component={ EducationTrainMain } />
                <Route path={ navbarList[1].subnav[1].link } component={ EducationTrainOnline } />
                <Route path={ `${navbarList[1].subnav[0].link}/detail/:tid` } component={ EducationTrainDetail } />
            </Route>

            <Route path={ navbarList[2].link } component={ StudentEducation } >
                <IndexRoute component={ StudentEducationMain } />
                <Route path={ navbarList[2].subnav[1].link } component={ StudentEducationStudy } />
            </Route>

            <Route path={ navbarList[3].link } component={ SuccessCase } >
                <IndexRoute component={ SuccessCaseMain } />
                <Route path={ `/${navbarList[3].link}/detail/:cid` } component={ SuccessCaseDetail } />
            </Route>

            <Route path={ navbarList[4].link } component={ Aboutus } >
                <IndexRoute component={ AboutusMain } />
                <Route path={ navbarList[4].subnav[1].link } component={ AboutusTeam } />
                <Route path={ navbarList[4].subnav[2].link } component={ AboutusPartner } />
                <Route path={ navbarList[4].subnav[3].link } component={ AboutusRecruit } />
                <Route path={ navbarList[4].subnav[4].link } component={ AboutusContact } />
            </Route>

        </Route>
    </Router>
)

export default HomeRoute