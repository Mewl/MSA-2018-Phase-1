import CircularProgress from '@material-ui/core/CircularProgress';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Dropzone from 'react-dropzone';
// import Loader from 'react-loader-spinner';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import './App.css';
import Convert from './components/Convert'

interface IState {
  currencyTo: any,
  currencyFrom: any,
  conversionAmount: any,
  error: any,
  total: any
}

class App extends React.Component<{}, IState>{
  constructor(props: any) {
    super(props)
    this.state = {
      currencyTo: "",
      currencyFrom: "",
      conversionAmount: "",
      error: "",
      total: ""
    }
  }

  public setVar = async(e: any) => {
    e.preventDefault();
    const currency1 = e.target.elements.currencyFrom.value;
    const currency2 = e.target.elements.currencyTo.value;

    if(currency1&&currency2){
    const apiCall = await fetch(`https://orion.apiseeds.com/api/exchangerates/convert/${currency1}/${currency2}&apikey=KEzZtCBHi4ZEtVmCS77DvtLiJfeYGjnvb6BIQAxWJS27rG5DL99dzHoHCRQfyrCv`);
    const data = await apiCall.json();
    if (data.from.code && data.to.code){
      this.setState({
        currencyTo: data.to.code,
        currencyFrom: data.from.code,
        conversionAmount: data.from.updated,
        error: "",
        total: data.result.format
      });
      }
    }
      else {
        this.setState({
          currencyTo: undefined,
          currencyFrom: undefined,
          conversionAmount: undefined,
          error: "Currency undefined, please enter valid 3 character currency code",
          total: undefined
        })
      }

  }


  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
        <Convert setVar={this.setVar}/>
        <TextField
          id="convertedAmount"
          label="Converted amount"
          margin="normal"
        />

        <div  className="loading">
          {
            this.state.total === "" && this.state.total.length > 0?
            <CircularProgress thickness={3} /> :
            <p>{this.state.total}</p>
          }
        </div>
          
        </div>
        
      </div>
    );
  }
}

export default App;