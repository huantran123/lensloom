import {atom} from 'recoil'

const searchTextState = atom({
  key: 'search-text-state',
  default: '',
})

export default searchTextState