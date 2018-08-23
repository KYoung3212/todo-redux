import types from './types';
import axios from 'axios'

const BASE_URL = 'http://api.reactprototypes.com'
const API_KEY = '?key=c518_demouser';

export async function getAllListData(){
    const resp = await axios.get(`${BASE_URL}/todos${API_KEY}`);
    return {
        type: types.GET_ALL_LIST_DATA,
        payload: resp
    }
}