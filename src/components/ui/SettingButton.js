import React from 'react'
import { useDispatch } from 'react-redux'
import { settingsOpen } from '../../actions/ui';

export const SettingButton = () => {
    const dispatch = useDispatch();
    const openSetting = () =>{
        dispatch(settingsOpen())
    }
    return (
        <button className="btn b ui__btnfix-tr" onClick={openSetting}>
            <i className="fas  fa-cogs"></i>
        </button>
    )
}
