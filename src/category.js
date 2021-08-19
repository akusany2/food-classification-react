import { FormControl, Box, MenuItem, Select, InputLabel, Typography } from '@material-ui/core';
import { useState } from 'react';

function Category(props) {
  var categories = [
    "Burger",
    "Butter Naan",
    "Chai",
    "Chapati",
    "Chole Bhature",
    "Dal Makhani",
    "Dhokla",
    "Fried Rice",
    "Idli",
    "Jalebi",
    "Kaathi Rolls",
    "Kadai Paneer",
    "Kulfi",
    "Masala Dosa",
    "Momos",
    "Paani Puri",
    "Pakode",
    "Pav Bhaji",
    "Pizza",
    "Samosa",
  ];
  const [category, setCategory] = useState('');
  function handleChange(event) {
    
    props.handleCategory(event.target.value);
    setCategory(event.target.value);

    setTimeout(() => { setCategory('') }, 2000);
  }
    return (
      <Box mt='5'>
        <br />
        {/* Category selection */}
        {!category && <FormControl fullWidth={ true} component="fieldset">
          <InputLabel id="category-select-label">Select Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
        
            {categories.map((category, i) => {
            return <MenuItem key={i} value={category}>{category}</MenuItem>})}
          </Select>
        </FormControl>}

        {category && <Typography variant="h3" style={{ color: '#e64a19' }}>Thank you!</Typography> }
      </Box>
    )
}

export default Category;