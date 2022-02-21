import {COUNT,COMMENTS,IMAGE,NAME,WEIGHT,WIDTH,HEIGHT,ADD_PRODUCT} from "../actions/action-types";
import {v4 as uuidv4} from  "uuid"






const initialstate = {
    items:[],

    name: "",
    image: "",
    id: "",
    count:"",
    weight:"",
    width:"",
    height:"",
    comments:""
}



const productReducer = (state = initialstate, action) => {
    switch (action.type){

        case ADD_PRODUCT: {
                let newProduct = {
                    name: state.name,
                    image: state.image,
                    id: uuidv4(),
                    count: state.count,
                    weight: state.weight,
                    width: state.width,
                    height: state.height,
                    comments: state.comments
                }
                return {
                    name: "",
                    image: "",
                    count:"",
                    weight:"",
                    width:"",
                    height:"",
                    comments:"",
                    items: [
                        ...state.items, newProduct
                    ]
                }
        }
        case NAME: {
            return{
                ...state,
                name: action.payload
            }
        }
        case IMAGE: {
            return{
                ...state,
                image: action.payload
            }
        }
        case COUNT: {
            return{
                ...state,
                count: action.payload
            }
        }
        case WEIGHT: {
            return{
                ...state,
                weight: action.payload
            }
        }
        case WIDTH: {
            return{
                ...state,
                width:action.payload
            }
        }
        case HEIGHT: {
            return{
                ...state,
                height:action.payload
            }
        }
        case COMMENTS: {
            return{
                ...state,
                comments:action.payload
            }
        }
        default:
            return state;
    }
}


export default productReducer