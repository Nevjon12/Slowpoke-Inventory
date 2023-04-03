import * as types from '../constants/actionTypes';

export const addInsulationAction = data => ({
    type: types.ADD_INS,
    payload: data,
});

export const deleteInsulationAction = data => ({
    type: types.DELETE_INS,
    payload: data,
});

export const updateInsulationAction = data => ({
    type: types.UPDATE_INS,
    payload: data,
});

export const findInsulationAction = data => ({
    type: types.FIND_INS,
    payload: data,
});

