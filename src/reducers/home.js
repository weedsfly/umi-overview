// 初始化一个homeStore
const initHomeStore = {
  isShowDesc: false
}

const homeStore = (state=initHomeStore, action) => {
  switch (action.type) {
    case 'home-show-desc':
      return {
        ...state,
        isShowDesc: action.value
      }
    default: 
      return state
  }
}

export default homeStore