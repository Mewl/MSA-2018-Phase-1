// import CircularProgress from '@material-ui/core/CircularProgress';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Dropzone from 'react-dropzone';
// import Loader from 'react-loader-spinner';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import {Typography} from '@material-ui/core/';
import './App.css';

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

  public setVar = async (e: any) => {
    e.preventDefault();
    const currency1 = e.target.elements.from.value;
    const currency2 = e.target.elements.to.value;
    const totalVal = e.target.elements.amount.value;
    try{
    if (currency1&&currency2&&totalVal){
      const apiCall = await fetch(`https://orion.apiseeds.com/api/exchangerates/convert/${currency1}/${currency2}?amount=${totalVal}&apikey=KEzZtCBHi4ZEtVmCS77DvtLiJfeYGjnvb6BIQAxWJS27rG5DL99dzHoHCRQfyrCv`);
      const data = await apiCall.json();
     if (data.from.code && data.to.code && data.result.value){
      this.setState({
        currencyTo: data.to.code,
        currencyFrom: data.from.code,
        conversionAmount: data.from.value,
        error: "",
        total: data.result.format
        });
      }
    }
  }
    catch (e){
      this.setState({
        total: "Please enter valid currency code."}
      )
    
   }
  }

// need to print error and output
  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
        <div className="centreText">
      <form onSubmit={this.setVar}>
        <TextField
          name="from"
          label="From"
          margin="normal"
          placeholder="E.g. NZD"
          style={{margin: '10% 20px'}}
        />
        <TextField
          name="to"
          label="To"
          margin="normal"
          placeholder="E.g. AUD"
          style={{margin: '10% 20px'}}
        />
        <TextField
          name="amount"
          label="Amount"
          margin="normal"
          style={{margin: '10% 20px'}}
        />
        <Button type="submit" variant="contained">convert</Button>
    </form>
    <h2>Value will not display for invalid curreny codes. </h2>
    <h1>
      {this.state.total}
    </h1>
  </div>
      </div>
      </div>
    );
  }
}

export default App;