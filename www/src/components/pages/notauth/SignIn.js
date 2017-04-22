import React from 'react'
import { Card } from 'react-md/lib/Cards'
import TextField from 'react-md/lib/TextFields'
import PropTypes from 'prop-types'
import Button from 'react-md/lib/Buttons/Button'
import { Grid, Row, Col } from 'react-flexbox-grid'
const SignIn = ({enableSignIn, email, password, requestFacebook, requestSignIn, onChangeKey, goForgot}) => {
  return (
    <Grid fluid>
      <Row>
        <Col xs={0} sm={1} md={2} lg={3} />
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className='form-not-auth'>
            <Row middle='xs' center='xs' >
              <Col>
                <Button onClick={requestFacebook} raised primary
                  iconBefore={false} label='SignIn With Facebook' iconClassName='fa fa-facebook' />
              </Col>
            </Row>
            <Row style={{marginTop: 12, marginBottom: 12}} middle='xs' center='xs' >
              <Col><Button flat label='OR' /></Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id='email'
                  fullWidth
                  required
                  onChange={val => onChangeKey('email', val)}
                  value={email.value}
                  disabled={email.disabled}
                  label={email.label}
                  placeholder={email.placeholder || email.label}
                  error={!!email.error}
                  errorText={email.error}
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6}>
                <TextField
                  id='password'
                  fullWidth
                  required
                  onChange={val => onChangeKey('password', val)}
                  value={password.value}
                  type='password'
                  label={password.label}
                  placeholder={password.placeholder || password.label}
                  error={!!password.error}
                  errorText={password.error}
                />
              </Col>
            </Row>
            <Row style={{marginTop: 12, marginBottom: 12}} middle='xs' end='xs' >
              <Col><Button secondary flat label='Forgot password?' onClick={goForgot} /></Col>
            </Row>
            <Row middle='xs' center='xs'>
              <Col>
                <Button disabled={!enableSignIn} onClick={requestSignIn} raised
                  iconBefore={false} label='SignIn With Email' iconClassName='fa fa-envelope' />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={0} sm={1} md={2} lg={3} />
      </Row>
    </Grid>
  )
}

const fieldShape = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

SignIn.propTypes = {
  email: PropTypes.shape(fieldShape).isRequired,
  password: PropTypes.shape(fieldShape).isRequired,
  requestFacebook: PropTypes.func.isRequired,
  requestSignIn: PropTypes.func.isRequired,
  goForgot: PropTypes.func.isRequired,
  onChangeKey: PropTypes.func.isRequired,
  enableSignIn: PropTypes.bool
}

export default SignIn