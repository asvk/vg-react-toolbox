/* global VERSION */
import 'react-toolbox/lib/commons.scss';
import React from 'react';
import style from './style';
import HardwareForm from './HardwareForm/index';
import OrgMainInfoForm from './OrgMainInfoForm/index';
import OrgAccountInfoForm from './OrgAccountInfoForm/index';
import OrgAdminsForm from './OrgAdminsForm/index';
import Summary from './Summary';
import MessageCard from './MessageCard';
import MissionPageTest from './MissionPage';
const Root = () => (
    <div className={style.app}>
        <h1>VG React Toolbox
            <small>Spec {VERSION}</small>
        </h1>
        <MissionPageTest />
        <HardwareForm/>
        <hr style={{margin: '50px'}}/>
        <OrgMainInfoForm/>
        <OrgAccountInfoForm/>
        <OrgAdminsForm/>
        <Summary/>
        <MessageCard/>
        <section>
            <h5>THE END</h5>
        </section>
    </div>
);

export default Root;
