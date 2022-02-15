import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { settingsClose } from '../../actions/ui';
import { startUpdateSettings } from '../../actions/weatherBox';
import { useForm } from '../../hooks/useForm';

export const SettingBar = () => {
    const dispatch = useDispatch();
    const { ui:{settingsBar}, weatherBox: {settings}} = useSelector(state => state);
    const [formSettings, handleInputChange] = useForm(settings);
    const {formatTime, template, temperature, wind} = formSettings;
    const closeBar = ()=>{
        dispatch(settingsClose());
    }
    const handleSaveSettings = (e) =>{
        e.preventDefault();
        dispatch(startUpdateSettings({
            formatTime,
            template,
            temperature,
            wind
        }));
    }
    return (
        settingsBar && (
        <div className={`setting-sidebar animate__animated ${settingsBar?'animate__fadeInRight':'animate__fadeOutRight'}`} >
            <button className="btn-close" onClick={closeBar}></button>
            <div className="settingForm ps-2 pt-2">
                <form onSubmit={handleSaveSettings}>
                    <h5>Time Format</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" value="24 hours" name="formatTime" 
                            checked={formatTime === '24 hours'} 
                            onChange={handleInputChange}  
                        />
                        <label className="form-check-label" >
                            24 Hours
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="formatTime" value="AM/PM"  
                            checked={formatTime === 'AM/PM'} 
                            onChange={handleInputChange}   
                        />
                        <label className="form-check-label" >
                            AM/PM
                        </label>
                    </div>
                    <hr />
                    <h5>Clock position</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="template"  value="top" 
                            checked={template === 'top'} 
                            onChange={handleInputChange}  
                        />
                        <label className="form-check-label">
                            Top
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="template"  value="bottom"
                            checked={template === 'bottom'}  
                            onChange={handleInputChange}   
                        />
                        <label className="form-check-label" >
                            Bottom
                        </label>
                    </div>
                    <hr />
                    <h5>Temperature</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="temperature"  value="c" 
                            checked={temperature === 'c'} 
                            onChange={handleInputChange}  
                        />
                        <label className="form-check-label">
                            Celsius
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="temperature"  value="f"
                            checked={temperature === 'f'}  
                            onChange={handleInputChange}   
                        />
                        <label className="form-check-label" >
                            Fahrenheit
                        </label>
                    </div>
                    <hr />
                    <h5>Wind</h5>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="wind"  value="km" 
                            checked={wind === 'km'} 
                            onChange={handleInputChange}  
                        />
                        <label className="form-check-label">
                            Km/h
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="wind"  value="mph"
                            checked={wind === 'mph'}  
                            onChange={handleInputChange}   
                        />
                        <label className="form-check-label" >
                            mph
                        </label>
                    </div>
                    <hr />
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
        )
    )
}
