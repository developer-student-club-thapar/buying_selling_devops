import React from 'react';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import styles from '../styles/Login.module.css';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { connect } from 'react-redux';
import { Alert } from 'antd';
import { resetState } from '../redux/actions';

const Login = ({ auth: { error }, resetState }) => {
  const { Title } = Typography;

  return (
    <div>
      <div className={styles.main}>
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className={styles.heading}
        >
          <Col span={24}>
            <Title level={1} style={{ fontFamily: 'Leckerli One' }}>
              ThaparX
            </Title>
          </Col>
          <Col span={24}>
            <Title level={3} className={styles.subHeading}>
              Buying and Selling made easy
            </Title>
          </Col>
          <Col span={24}>
            <GoogleLoginButton />
          </Col>
          {error && (
            <Col xs={18} lg={3} style={{ margin: 'auto', paddingTop: '30px' }}>
              <Alert
                message="Login Failed. Please try again."
                type="error"
                showIcon
                closable={true}
                onClose={() => {
                  resetState();
                }}
              />
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { resetState })(Login);
