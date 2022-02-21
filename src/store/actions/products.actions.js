import {NAME,IMAGE,COUNT,COMMENTS,WEIGHT,WIDTH,HEIGHT,ADD_PRODUCT} from "./action-types"


export const addProductAction = () => ({ type: ADD_PRODUCT });

export const updateName = (text) => ({ type: NAME, payload: text });

export const updateImage = (text) => ({ type: IMAGE, payload: text });

export const updateCount = (text) => ({ type: COUNT, payload: text });

export const addCommentAction = (text) => ({type: COMMENTS, payload: text});

export const updateWeight = (text) => ({ type: WEIGHT, payload: text });

export const updateWidth = (text) => ({ type: WIDTH, payload: text });

export const updateHeight = (text) => ({ type: HEIGHT, payload: text })