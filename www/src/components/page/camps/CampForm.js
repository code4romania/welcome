import React, {Component, PropTypes} from 'react'
import LoginForm from '../../loginform/LoginForm'

const fields = [
  { name: 'name', label: 'Camp Name', type: 'input' },
  { name: 'somekey', label: 'Secret thing', type: 'input' }
]

const validate = values => {
  const errors = {}
  return errors
}

class CampForm extends Component {
  render () {
    return <LoginForm
      fields={fields}
      submitText='Update'
      title='Edit Camp'
      name='updatecamp'
      validate={validate}
      submitHandler='updateCamp'
      />
  }
}
CampForm.contextTypes = {
  store: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired
}

export default CampForm
