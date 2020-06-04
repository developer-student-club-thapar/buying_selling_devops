import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import styles from '../../styles/Home.module.css';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import MenuIcon from '../../assets/MenuIcon.svg';
import user from '../../assets/user.svg';

const TopBarScroll = () => {
  return (
    <Fragment>
      <Row className={styles.topScroll} style={{ position: 'sticky', top: 0 }}>
        <Col span={24} style={{ height: 150 }}>
          <br />
          <Row
            style={{
              paddingLeft: '10px',
              paddingRight: '10px',
            }}
          >
            <Col span={4}>
              <img src={MenuIcon} alt="menu" />
            </Col>
            <Col span={16}>
              <Input
                size="small"
                placeholder="Search for Products, Categories, etc."
                prefix={<SearchOutlined />}
                style={{ color: 'white', borderColor: '#D7D7D7' }}
              />
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}>
              <img src={user} alt="profile" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TopBarScroll;
