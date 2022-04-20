import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../API/Auth';
import { store } from '../../app/store';
import { profile } from '../../user-data/userRedux';
import Dashboardheader from '../dependencies/Dashboard/DashboardHeader';
import DashboardMain from '../dependencies/Dashboard/DashboardMain';
import Footer from '../dependencies/Footer';

const Dashboard = () => {

    const dispatch = useDispatch()
    const userData = useSelector((state)=> state.userData)

    useEffect(() => {
        console.log(store.getState().userData.token.payload ,'token');
        apiCall()
    }, [])

    const apiCall = async () => {
        const newDataProfile = await getProfile(store.getState().userData.token.payload)
        if (newDataProfile.data) {
            console.log(newDataProfile);
            dispatch(profile(newDataProfile.data.body))
        }
      
        }

    return (
        <div>
            <Dashboardheader />
            <DashboardMain />
            <Footer />
        </div>
    );
};

export default Dashboard;