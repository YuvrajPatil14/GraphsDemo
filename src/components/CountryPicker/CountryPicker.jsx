import React ,{useState,useEffect}from 'react';
import styles from './CountryPicker.module.css';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries} from '../../api'
const CountryPicker = ({handleCountryChange})=>{

    const [fc,setFc]= useState([]);
    useEffect(()=>{
        const fetchCountriesData = async ()=>{
            setFc(await fetchCountries())
        }

        fetchCountriesData();
    },[setFc])
    console.log(fc);
    return(
       <FormControl className={styles.formControl}>
           <NativeSelect defaultValue='' onChange={(e)=>{handleCountryChange(e.target.value)}}>
               <option value='global'>Global</option>
               {fc.map((c)=><option value={c} key={c}>{c}</option>)}
           </NativeSelect>
       </FormControl>
    );
};
export default CountryPicker;