import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Convert = (props: any) => {
    <div className="centreText">
    <form onSubmit={props.setVar}>
    <TextField
          id="from"
          label="From"
          margin="normal"
          style={{margin: '10% 20px'}}
        />
        <TextField
          id="to"
          label="To"
          margin="normal"
          style={{margin: '10% 20px'}}
        />
        <TextField
          id="amount"
          label="Amount"
          margin="normal"
          style={{margin: '10% 20px'}}
        />
        <Button type="submit" variant="contained">convert</Button>
    </form>
    </div>
}
export default Convert;