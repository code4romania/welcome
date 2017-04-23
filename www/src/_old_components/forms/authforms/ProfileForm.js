import React from 'react'
import PropTypes from 'prop-types'
import BasicForm from '../../forms/basicform/BasicForm'

class ProfileForm extends React.Component {
  componentDidMount () {
    const {handlers, store} = this.context
    const editFields = {...store.auth}
    handlers.changeFields('account', editFields)
  }

  validate (values) {
    const errors = {}
    return errors
  }

  render () {
    return (
      <BasicForm
        fields={this.props.fields}
        submitText='Update'
        title='Edit profile'
        name='editprofile'
        validate={this.validate}
        submitHandler='requestEditProfile' />
    )
  }
}

ProfileForm.propTypes = {
  // Edit profile fields to view/edit
  fields: PropTypes.array.isRequired
}

ProfileForm.contextTypes = {
  store: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired
}

export default ProfileForm
