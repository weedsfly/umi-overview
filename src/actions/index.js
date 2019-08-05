import { get } from '../util'

export const getList = ({dispatch, params}) => {
  get('/getList')
  .then(res => {
    return res.json()
  }).then(value => {
    dispatch({type: 'home-get-list', value: value.list})
  }).catch((e) => {
    console.log(e)
  })
} 