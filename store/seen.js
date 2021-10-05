export const state = () => ({
	seenArr: []
})
  
export const mutations = {

	add(state, url){
		
		state.seenArr.push(url);
		
	},

	remove(state, url){

		const indexToRemove = state.seenArr.indexOf(url);

		state.seenArr.splice(indexToRemove, 1);

	}

}