import axios from 'axios';

import { ADD_UNIT, GET_UNITS  } from './types';

function addUnit(unit) {
  return {
    type: ADD_UNIT,
    unit
  }
}

function receiveUnits(units) {
  return {
    type: GET_UNITS,
    units
  }
}

export function postUnit(unit) {
  return (dispatch) => {
    const options =  {
      url: 'https://localhost/api/admin/units',
      method: 'POST',
      data: unit
    };
    return axios(options)
      .then(
        res => {
          const unit = res.data;
          dispatch(addUnit(unit));
        },
        err => {
          console.log(err);
        }
      )
  }
}

export function fetchUnits() {
  return (dispatch) => {
    return axios
      .get('https://localhost/api/admin/units')
      .then(
        res => {
          const units = res.data;
          dispatch(receiveUnits(units));
        },
        err => {
          console.log(err);
        }
      );
  }
}
