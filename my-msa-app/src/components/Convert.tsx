import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Convert = (props: any) =>{
    return <div className="centreText">
      <form onSubmit={props.setVar}>
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
  </div>
}
export default Convert;