import { config } from '../../config'

export const apiNode = {
  
  newNode (node) {
    if (!node) {
      return Promise.reject(new Error('Data not informed'))
    }
    return new Promise((resolve, reject) => {
      config.api.post(`/node/`,node)
        .then(resp => {
          resolve(resp.data)
        })
        .catch((e) => {
          reject(new Error(`Error when creating a new node ${e}`))
        })
    })
  },  
  updateNode (node) {
    if (!node) {
      return Promise.reject(new Error('Data not informed'))
    }
    return new Promise((resolve, reject) => {
      config.api.put(`/node/${node.id}`,node)
        .then(resp => {
          resolve(resp.data)
        })
        .catch((e) => {
          reject(new Error(`Error when updating a node ${e}`))
        })
    })
  },  
  removeNode (nodeId) {
    if (!nodeId) {
      return Promise.reject(new Error('Data not informed'))
    }
    return new Promise((resolve, reject) => {
      config.api.delete(`/node/${nodeId}`)
        .then(resp => {
          resolve(resp.data)
        })
        .catch((e) => {
          reject(new Error(`Error when removing a new node ${e}`))
        })
    })
  },  

  getNodes () {
    return new Promise((resolve, reject) => {
      config.api.get(`/node/`)
        .then(resp => {
            resolve(resp.data)
        })
        .catch(e => {
            reject(e)
        })
    })
  },

  getNode (nodeId) {
    return new Promise((resolve, reject) => {
      config.api.get(`/node/${nodeId}`)
        .then(resp => {
          resolve(resp.data)
        })
        .catch(e => {
          reject(e)
        })
    })
  }
}