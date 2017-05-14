import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-md/lib/Buttons/Button'

const Logo = ({clickLogo}) => {
  return (
    <Button
      onClick={clickLogo}
      style={{marginTop: 7}}
      label='Welcome'
      flat
      primary>
        rss_feed
    </Button>
  );
}

Logo.PropTypes = {
  clickLogo: PropTypes.func.isRequired
}

export default Logo