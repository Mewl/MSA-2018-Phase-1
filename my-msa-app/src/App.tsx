import CircularProgress from '@material-ui/core/CircularProgress';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import * as React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Dropzone from 'react-dropzone';
// import Loader from 'react-loader-spinner';
import TextField from '@material-ui/core/TextField';
import './App.css';

interface IState {
  results: any
}

export default class App extends React.Component<{}, IState>{
  constructor(props: any) {
    super(props)
    this.state = {
      results: "",
    }
  }

  public exchange = async(e: any) => {
    e.preventDefault();
    fetch('https://orion.apiseeds.com/api/exchangerates/convert/${currencyFrom}/${currencyTo}&apikey=KEzZtCBHi4ZEtVmCS77DvtLiJfeYGjnvb6BIQAxWJS27rG5DL99dzHoHCRQfyrCv', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
  
    })
    .then((response : any) => {
      if (!response.ok) {
        this.setState({results: response.statusText})
      }
      else {
        response.json().then((data:any) => this.setState({results: data[0].class}))
      }
      return response
    })
  }


  public render() {

    return (
      <div className="container-fluid">
        <div className="centreText">
        <form className={"Covert"} noValidate autoComplete="off">
        <TextField
          id="From"
          label="From"
          margin="normal"
        />
        <TextField
          id="To"
          label="To"
          margin="normal"
        />
        <TextField
          id="Amount"
          label="Amount"
          margin="normal"
        />
        </form>

        <div  className="loading">
          {
            this.state.results === "" ?
            <CircularProgress thickness={3} /> :
            <p>{this.state.results}</p>
          }
        </div>
          
        </div>
        
      </div>
    );
  }
}
