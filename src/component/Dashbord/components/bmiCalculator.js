import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
    borderRadius: '9px',
    backgroundColor: '#ffff',
    padding: '10px',
    // border:'1 px solid white',
    // boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(1, 4),
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: 'none',
    borderRadius: theme.spacing(1),
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  result: {
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  },
}));

const HealthInfoCalculator = ({ onChatInput }) => {
  const classes = useStyles();

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBMI] = useState('');
  const [bmr, setBMR] = useState('');
  const [bodyFatPercentage, setBodyFatPercentage] = useState('');

  const calculate = () => {
    calculateBMI();
    calculateBMR();
    calculateBodyFatPercentage();
  };

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiResult = weight / (heightInMeters * heightInMeters);
    setBMI(bmiResult.toFixed(2));
  };

  const calculateBMR = () => {
    let bmrResult;
    if (gender === 'male') {
      bmrResult = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === 'female') {
      bmrResult = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    } else {
      bmrResult = '';
    }
    setBMR(bmrResult.toFixed(2));
  };

  const calculateBodyFatPercentage = () => {
    // Implement the formula or method to calculate body fat percentage
    // based on gender, weight, height, and potentially additional measurements
    let bodyFatPercentageResult;
    // Perform the calculation and assign the result to the bodyFatPercentageResult variable

    setBodyFatPercentage(bodyFatPercentageResult ? bodyFatPercentageResult.toFixed(2) : '');
  };

  // const handleChatInput = (e) => {
  //   const input = e.target.value;
  //   onChatInput(input);
  // };

  return (
    <div className={classes.root}>
      <h5><storng>BMI Calculator</storng></h5>
      <input
        className={classes.input}
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <input
        className={classes.input}
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <input
        className={classes.input}
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <select className={classes.input} value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      <button className={classes.button} onClick={calculate}>
        Calculate
      </button>

      {bmi && <p className={classes.result}>BMI: {bmi}</p>}
      {bmr && <p className={classes.result}>BMR: {bmr}</p>}
      {bodyFatPercentage && <p className={classes.result}>Body Fat Percentage: {bodyFatPercentage}%</p>}

      {/* <input
        className={classes.input}
        type="text"
        placeholder="Enter additional input"
        onChange={handleChatInput}
      /> */}
    </div>
  );
};

export default HealthInfoCalculator;
