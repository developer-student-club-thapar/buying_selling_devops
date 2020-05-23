import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import styles from '../../styles/Home.module.css';
import { Typography } from 'antd';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import MenuIcon from '../../assets/MenuIcon.svg';
import user from '../../assets/user.svg';

const TopBar = () => {
  const { Title } = Typography;
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 0.08 ||
      document.documentElement.scrollTop > 0.08
    ) {
      document.getElementById('searchBar').style.width = '30%';
    } else {
      document.getElementById('searchBar').style.width = '100%';
    }
  }
  return (
    <Fragment style={{ alignSelf: 'center' }}>
      <Row className={styles.top}>
        <Col
          span={24}
          style={{ height: 150, alignItems: 'center', alignSelf: 'center' }}
        >
          <br />
          <Row
            style={{
              paddingLeft: '10px',
              paddingRight: '10px',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          >
            <Col span={8}>
              <img src={MenuIcon} alt="menu" />
            </Col>
            <Col span={8}>
              <Title
                level={3}
                style={{
                  fontFamily: 'Leckerli One',
                  textAlign: 'center',
                }}
              >
                ThaparX
              </Title>
            </Col>
            <Col span={8} style={{ textAlign: 'right' }}>
              <img src={user} alt="profile" />
            </Col>
          </Row>
          <br />

          {/* <Row id="header" style={{ paddingLeft: '10px', paddingRight: '10px' }}> */}
          <Row id="searchBar" className={styles.searchBarRow}>
            <Col span={24}>
              <Input
                size="small"
                placeholder="Search for Products, Categories, etc."
                prefix={<SearchOutlined />}
                style={{ color: 'white', borderColor: '#D7D7D7' }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TopBar;
