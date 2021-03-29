import{
  Button,TextField,InputAdornment,Grid
  } 
  from '@material-ui/core';
import ComboBox from '../Autocomplete/Combobox';
import React, { useState, useEffect, useReducer,useMemo} from 'react';
import {indexDB,artists} from "../../api/db/indexedDb";



const initialArtists = [];
function init(initialArtists){
  return [];
} 

function reducer(state,action){
  switch (action.type) {
    case 'fill-autocomplete':
      return artists;
      
    defauult:
      return new Error();
  }
}


export  function Home() {

  // const [artists, setArtists] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialArtists, init);
  const [loaded,setLoaded] = useState(false);
  //const artistsMemo = useMemo(()=>artists,[]);

   useEffect(()=>{
      console.log(artists) ;
      if(!loaded){   
      dispatch({
        type: 'fill-autocomplete',
      });
      setLoaded(true);
    }
  });

  

  return (<>
  <div style={{padding: 20+"px"}}>
    <h2>Home</h2>
    <h4>Buttons of material-ui framework</h4>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
    </Button>
    <h4> Text fields from material-ui framework</h4>
    <TextField id="outlined-basic" label="Insert text here" variant="outlined" />
    <h4>Number text field from Material iu framework</h4>
   <TextField
          label="With normal TextField"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          id="standard-number"
     label="Price"
     type="number"
     InputLabelProps={{
       shrink: true,
     }}
        />
    <h4>Autocomplete example with indexDB</h4>
    {
      loaded == true && (<ComboBox data={state}></ComboBox>)

    }
    </div>
     </> );
     
    
  };

  