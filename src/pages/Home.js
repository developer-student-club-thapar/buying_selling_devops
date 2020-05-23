import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/Home.module.css';
import { Typography } from 'antd';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import Categories from '../components/Home/Categories';
import Recommendations from '../components/Home/Recommendations';
import MenuIcon from '../assets/MenuIcon.svg';
import user from '../assets/user.svg';
import { useHasScrolled } from '../components/Home/hooks/useScrollHandler';
import TopBar from '../components/Home/TopBar';
import TopBarScroll from '../components/Home/TopBarScroll';

const Home = () => {
  const { Title } = Typography;
  const scroll = useHasScrolled();
  return (
    <Fragment>
      {scroll !== false ? console.log(scroll) : console.log('bye')}
      {scroll === false ? <TopBar /> : <TopBarScroll />}
      <div className={styles.main}>
        <br />
        <Row>
          <Col span={24}>
            <Title level={4} style={{ marginLeft: '20px', color: 'white' }}>
              Browse Categories
            </Title>
          </Col>
        </Row>
        <div className={styles.container}>
          <Categories />
        </div>
        <br />
        <Row>
          <Col span={24}>
            <Title level={4} style={{ marginLeft: '20px', color: 'white' }}>
              Recommendations
            </Title>
          </Col>
        </Row>

        <Recommendations />
      </div>
    </Fragment>
  );
};

export default Home;
