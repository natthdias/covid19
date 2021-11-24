import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 const InputDetails = ({info}) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Typography 
        variant="h5" 
        component="div" 
        gutterBottom 
        sx={{
          marginTop: "10px",
          fontWeight: "bold"
          }}>
          {info.state}
        </Typography>
         <TextField
          id="outlined-read-only-input"
          label="id"
          defaultValue={info.uid}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="uf"
          defaultValue={info.uf}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
          <TextField
          id="outlined-read-only-input"
          label="state"
          defaultValue={info.state}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="cases"
          defaultValue={info.cases}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="deaths"
          defaultValue={info.deaths}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="suspects"
          defaultValue={info.suspects}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="refuses"
          defaultValue={info.refuses}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="broadcast"
          defaultValue={info.broadcast}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="comments"
          defaultValue={info.comments}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
         <TextField
          id="outlined-read-only-input"
          label="datetime"
          defaultValue={info.datetime}
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
      </div>
    </form>
  );
}

export default InputDetails