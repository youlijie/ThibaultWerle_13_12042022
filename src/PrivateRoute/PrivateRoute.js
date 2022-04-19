import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { store } from '../app/store';

export default function PrivateRoute({ children }) {
    const  currentUser  = store.getState().userData.token

    return currentUser ? children : <Navigate to="/login" />;
}