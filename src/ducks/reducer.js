import { HANDLE_NAME, HANDLE_ADDRESS, HANDLE_CITY, HANDLE_ZIPCODE} from './constants'

let initialState = {
    value: 0
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case HANDLE_NAME:
        return { ...state, }
        default:
        return state
    }
}

export function handleName(name){
    return {
        type: HANDLE_NAME,
        payload: name
    }
}

export function handleAddress(address){
    return {
        type: HANDLE_ADDRESS,
        payload: address
    }
}

export function handleCity(city){
    return {
        type: HANDLE_CITY,
        payload: city
    }
}

export function handleZipCode(zipcode){
    return {
        type: HANDLE_ZIPCODE,
        payload: zipcode
    }
}