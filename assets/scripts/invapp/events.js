'use strict'

// require all necessary documents
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onNewInv = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log('in Events')
  api.createInv(data)
    .then(function () {
      onIndex(event)
    })
    .catch(ui.Failure)
}

const onIndex = function () {
  api.indexInv()
    .then(ui.onIndexSucces)
    .catch(ui.Failure)
}

const onDeleteInv = function (event) {
  event.preventDefault()
  api.deleteInv($(event.target).data('id'))
    .then(function () {
      onIndex(event)
    })
    .catch(ui.Failure)
}

const onShowInv = function (event) {
  event.preventDefault()
  api.showInv($(event.target).data('id'))
    .then(ui.onShowSucces)
    .catch(ui.Failure)
}

// export all functions
module.exports = {
  onNewInv,
  onIndex,
  onDeleteInv,
  onShowInv
}
