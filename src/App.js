import React,{Component} from 'react';
import styles from './App.module.css';

import {Cards,Chart,CountryPicker} from './components'
import {fetchData} from './api/index';

import imgc from './images/covid-19.png'
class App extends Component{
state = {
  data:{

  },
  country:""
}
async componentDidMount (){
  const fetchedData = await fetchData();
 
  this.setState({data:fetchedData});
}
handleCountryChange = async(country)=>{
  const fetchedData = await fetchData(country);
  this.setState({data:fetchedData,country:country});

console.log(fetchedData);

}

  render(){
    const {data} = this.state;
    return (
      
      <div className={styles.container}>
        <img className={styles.image} alt='logo' src={imgc}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={this.state.country}/>
        
      </div>
    );
  }

}

export default App;
