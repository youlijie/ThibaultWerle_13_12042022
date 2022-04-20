import React, { useRef ,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserData } from '../../../API/Auth';
import { store } from '../../../app/store';
import { profile } from '../../../user-data/userRedux';


const Editname = ({modeSet ,setModeSet}) => {
    const userData = useSelector((state)=> state.userData)
    const dispatch = useDispatch()
    const firstNameRef =  useRef()
    const lastNameRef = useRef()
    const inputsRef = useRef()
    const editRef = useRef()
    const saveRef = useRef()
    const cancelRef = useRef()
    const dataNameRef = useRef()
    
    const onpenInputs = () => {
        console.log( inputsRef);
         setModeSet('edit')
        inputsRef.current.classList.remove('hiden')
        dataNameRef.current.classList.add('hiden')
        editRef.current.classList.add('hiden')
     
    }   
    const save = async() => {
        if ((firstNameRef.current.value.length > 2 && firstNameRef.current.value.length < 20) && (lastNameRef.current.value.length > 2 && lastNameRef.current.value.length < 20) ){
        const newDataProfile = await changeUserData(store.getState().userData.token.payload,firstNameRef.current.value  ,lastNameRef.current.value )
        if (newDataProfile.data) {
            console.log(newDataProfile);
            dispatch(profile(newDataProfile.data.body))
        }
        cancel()
    }
    }
    const cancel = () => {
        inputsRef.current.classList.add('hiden')
        editRef.current.classList.remove('hiden')
        dataNameRef.current.classList.remove('hiden')
        setModeSet('normal')
    }
    return (
        <div className="header">
        <h1 className = {"welcome-" + modeSet}>Welcome back</h1>
        <h2 className ='user-name' ref = {dataNameRef}>{userData.profile?.payload?.firstName +' '+ userData.profile?.payload?.lastName +  " !"}</h2>
        <button className="edit-button " onClick={onpenInputs} ref = {editRef}>Edit Name</button>
        <div className = "hiden edit-inputs" ref = {inputsRef}>
            <div className = " flex">
        <input className = "edit-input" type="text"  id="fistName" placeholder= {userData.profile?.payload?.firstName} ref={firstNameRef} min = "2" max = "20"/> 
        <input className = "edit-input" type="text" id="lastName" placeholder= {userData.profile?.payload?.lastName} ref={lastNameRef} min = "2" max = "20"/> 
         </div>
         <div className = "flex">
         <button className="save-button btn" onClick={save} ref = {saveRef}>Save</button>
         <button className="cancel-button btn" onClick={cancel} ref = {cancelRef}>Cancel</button>
         </div>
        </div>
      </div>
    );
}

export default Editname;