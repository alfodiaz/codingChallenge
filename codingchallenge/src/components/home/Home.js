import{
  Button,TextField
  } 
  from '@material-ui/core';

export  function Home() {
  return (<>
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
     </> );
  };

  