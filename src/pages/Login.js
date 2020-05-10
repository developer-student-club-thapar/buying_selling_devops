import React from 'react';
import LoginBG from '../assets/login_bg.jpg';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';
import styles from '../styles/Login.module.css';
import { Button } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';

const Login = () => {
  const { Title } = Typography;
  return (
    <div className={styles.main}>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        className={styles.heading}
      >
        <Col span={24}>
          <Title level={1}>ThaparX</Title>
        </Col>
        <Col span={24}>
          <Title level={3} className={styles.subHeading}>
            Buying and Selling made easy
          </Title>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            className={styles.button}
            icon={<GoogleOutlined />}
          >
            {' '}
            <Title
              level={3}
              style={{ margin: 'auto', display: 'inline-block' }}
            >
              Log in with Google
            </Title>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
