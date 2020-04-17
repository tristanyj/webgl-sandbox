export const state = () => ({
	sketches: [
		{
			url: '/image-hover-1',
			name: 'image hover 1',
			options: {
			}
		},
	]
})

export const getters = {
	GET_SKETCHES(state) {
		return state.sketches
	}
}
