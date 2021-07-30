import axios from "axios";

const state = () => ({
    places: {},
    placeDetail: {},
    isLoading: false,
})


const getters = {

    getterPlacesData(state) {
        return state.places
    },
    gettterPlacesDetail(state) {
        return state.placeDetail
    },
    getterIsLoading(state) {
        return state.isLoading
    }
}

const mutations = {

    /**
     * Set State place
     *
     * @param {Object} state
     * @param {Object} payload
     */
    setPlaces(state, payload) {
        state.places = payload;
    },

    /**
     * Set State placeDetail
     *
     * @param {Object} state
     * @param {Object} payload
     */
    setPlaceDetail(state, payload) {
        state.placeDetail = payload;
    },

    /**
     * Set State isLOading
     *
     * @param {Boolean} state
     * @param {Boolean} payload
     */
    setLoading(state, payload) {
        state.isLoading = payload;
    },

}

const actions = {

    /**
     * Get All Data Place from DB
     *
     * @param {commit} param0
     */
    async getPlaces({ commit }) {
        const response = await axios.get(
            "https://ulin-api.herokuapp.com/v1/places"
        );
        const result = await response.data;

        commit("setPlaces", result.data);
        commit("setLoading", true);
    },

    /**
     * Create Data Place to DB
     *
     * @param {commit} param0
     */
    CreatePlace(
        { commit },
        {
            name,
            address,
            city,
            province,
            description,
            image,
            manager,
            openDay,
            openTime,
            ticket,
            vehicle,
        }
    ) {
        axios
            .post(`https://ulin-api.herokuapp.com/v1/place`, {
                name: name,
                address: address,
                city: city,
                province: province,
                description: description,
                image: image,
                manager: manager,
                openDay: openDay,
                openTime: openTime,
                ticket: ticket,
                vehicle: vehicle,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    },

    /**
     * Edit Data Place by Id from DB
     *
     * @param {commit} param0
     */
    EditPlace(
        { commit },
        {
            placeId,
            name,
            address,
            city,
            province,
            description,
            image,
            manager,
            openDay,
            openTime,
            ticket,
            vehicle,
        }
    ) {
        axios
            .put(`https://ulin-api.herokuapp.com/v1/place/${placeId}`, {
                name: name,
                address: address,
                city: city,
                province: province,
                description: description,
                image: image,
                manager: manager,
                openDay: openDay,
                openTime: openTime,
                ticket: ticket,
                vehicle: vehicle,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    },

    /**
     * Delete Data Place by Id from DB
     *
     * @param {commit} param0
     */
    deletePlace({ commit }, { placeId }) {
        axios
            .delete(`https://ulin-api.herokuapp.com/v1/place/${placeId}`)
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
    },
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}