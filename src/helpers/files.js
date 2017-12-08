import 'whatwg-fetch'

const getFile = path => {
 return fetch(path)
    .then(res => {
      return res.text()
    })
}

export default getFile
