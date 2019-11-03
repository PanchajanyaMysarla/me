import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';


export default function ToggleTheme({theme,onToggleTheme}) {

  return (
    <div >
    <IconButton aria-label = "delete" color="primary" onClick={onToggleTheme}>
    {theme ==='dark' ?  <Brightness7Icon/> :  <BrightnessLowIcon/>}
    </IconButton>
    </div>
  )
}
