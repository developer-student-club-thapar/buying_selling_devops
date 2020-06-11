import React, { Fragment } from 'react';
import { Row, Col, Skeleton } from 'antd';
import styles from '../../styles/Home.module.css';
import { Typography } from 'antd';
import { useHasScrolled } from './hooks/useScrollHandler';
import TopBar from './TopBar';
import TopBarScroll from './TopBarScroll';

const Home = () => {
  const { Title } = Typography;
  const scroll = useHasScrolled();
  const recommendationSkeleton = [];
  const categoriesSkeleton = [];
  for (let i = 0; i < 10; i++) {
    recommendationSkeleton.push(
      <Col span={12}>
        <Skeleton.Button
          active
          style={{
            height: '140px',
            width: '140px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        />
      </Col>,
    );
  }
  for (let i = 0; i < 5; i++) {
    categoriesSkeleton.push(
      <div style={{ display: 'inline-block' }}>
        <Skeleton.Button
          active
          style={{ width: '106px', marginRight: '5px' }}
        />
      </div>,
    );
  }

  return (
    <Fragment>
      {scroll === false ? <TopBar /> : <TopBarScroll />}
      <div className={styles.main}>
        <br />
        <Row>
          <Col span={16}>
            <Title level={4} style={{ marginLeft: '20px', color: 'white' }}>
              Browse Categories
            </Title>
          </Col>
        </Row>
        <div className={styles.container}>{categoriesSkeleton}</div>
        <br />
        <Row>
          <Col span={24}>
            <Title level={4} style={{ marginLeft: '20px', color: 'white' }}>
              Recommendations
            </Title>
          </Col>
        </Row>
        <Row style={{ textAlign: 'center' }}>{recommendationSkeleton}</Row>
      </div>
    </Fragment>
  );
};

export default Home;
