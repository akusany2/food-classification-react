
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Button, CssBaseline, FormControl, FormHelperText, InputLabel, LinearProgress, Grid, Box, createTheme, Typography, FilledInput } from '@material-ui/core';

import { yellow } from '@material-ui/core/colors';
import './App.css';
import ButtonAppBar from './header';
import { useState } from 'react';
import axios from 'axios';
import Category from './category';

function App() {
  const theme = createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#e64a19',
      },
      secondary: yellow,
    },
  });
  const [url, setUrl] = useState('');
  const [prediction, setPrediction] = useState('');
  const [inputError, setInputError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [categorySelection, setCategorySelection] = useState(false);
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setPrediction('');
    setLoader(true);
    console.log(url);
    axios.post('http://ec2-34-226-205-176.compute-1.amazonaws.com:8000/', { url: url })
      .then(res => {
        console.log(res);
        setPrediction(res.data.prediction);
        setLoader(false);
      })
  }
  function handleChange(e) {
    if ((/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(e.target.value)) {
      setInputError(false)
      setUrl(e.target.value);
      setPrediction('');
    } else {
      setInputError(true);

    }

  }
  function handleValidation(val) {
    if (val == 'w') {
      
      setCategorySelection(true);
    } else {
      setCategorySelection(false);
      reset();
    }
  }
  function handleCategory(val) {
    setCategory(val);
    setPrediction('');
    setTimeout(() => { setCategorySelection(false); reset(); }, 2000);
  }
  function reset() {
    setUrl('');
    setPrediction('');
    setInputError(false);
    setLoader(false);
  }
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ButtonAppBar className="App-header" />
      <Grid container direction="column"
        justifyContent="center"
        alignItems="center">
        <Box mt={5}>

          {url && <img className='image' src={url} alt="url" />}
          {loader && <LinearProgress />}

          {prediction && <Box mt={5} justifyContent='center'>
            <Typography variant="h3" style={{ color: '#e64a19' }}>{prediction}</Typography>

            {/* Validate prediciton */}
            <Button size='large' id='correct' onClick={() => handleValidation('c')}>Correct</Button>

            <Button size='large' id='wrong' onClick={() => handleValidation('w')}>Wrong</Button>
          </Box>}
          {categorySelection && <Category handleCategory={handleCategory}></Category>}

        </Box>
        <Box mt={5}>
          

          {/* Main control */}
          <FormControl>
            <InputLabel htmlFor="url-input" className='label-url'>URL of Image</InputLabel>
            <FilledInput id="url" aria-describedby="url-helper-text" label="Required"
              variant="filled" onChange={handleChange} fullWidth={true} value={ url } />
            <FormHelperText id="url-helper-text">{
              inputError ? 'URL is not valid!' : 'The URL should end with proper extension (.jpg/.png/jpeg)'
            }</FormHelperText>
            <br />
            <Button
              type="submit"
              variant="contained"
              component="label"
              disabled={inputError}
              onClick={handleSubmit}
            >
              Predict Image
            </Button>
          </FormControl>

        </Box>
        
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
