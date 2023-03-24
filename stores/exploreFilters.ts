import { defineStore } from 'pinia'

interface State {
  // status
  listed: boolean
  owned: boolean
  // price
  min: number | undefined
  max: number | undefined
}

export const useExploreFiltersStore = defineStore('exploreFilters', {
  state: (): State => ({
    listed: false,
    owned: false,
    min: undefined,
    max: undefined,
  }),
  getters: {
    getStatusFilters: (state) => ({ listed: state.listed, owned: state.owned }),
    getPriceRange: (state) => ({ min: state.min, max: state.max }),
  },
  actions: {
    setListed(payload) {
      this.listed = payload
    },
    setOwned(payload) {
      this.owned = payload
    },
    setMin(payload) {
      this.min = payload
    },
    setMax(payload) {
      this.max = payload
    },
    setPriceRange(payload) {
      this.min = payload.min
      this.max = payload.max
    },
  },
})