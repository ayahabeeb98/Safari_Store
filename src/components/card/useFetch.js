import {useReducer , useEffect} from 'react'
import axios from 'axios'

const initialState = {
	productCards:[] ,
	loading:true
};

function reducer(state, action) {
	switch (action.type) {
		case "make_request":
			return { loading: true, productCards: [] };
		case "get_data":
			return { ...state, loading: false, productCards: action.payload.productCards };
		case "error":
			return { ...state, loading: false, error: action.payload.error, productCards: [] };
		default:
			return state
	}
}
export default  function useFetch(params){
	console.log(params,'param')
	const [state, dispatch] = useReducer(reducer,initialState );
	useEffect(()=>{
		dispatch({type:"make_request"})
		axios.get('https://612fb1645fc50700175f1708.mockapi.io/api/vi/products', {
			params:{...params }
		}).then(res=>{
			dispatch({type:"get_data" , payload:{productCards:res.data} })
			console.log(res,'res   ')

		}) .catch(e => {
			dispatch({type:"error", payload: {error: e} })
		})
	} , [params]);
	return state
}