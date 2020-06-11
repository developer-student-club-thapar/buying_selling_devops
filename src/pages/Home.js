import React, { Fragment, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import styles from '../styles/Home.module.css';
import { Typography } from 'antd';
import Categories from '../components/Home/Categories';
import Recommendations from '../components/Home/Recommendations';
import { useHasScrolled } from '../components/Home/hooks/useScrollHandler';
import TopBar from '../components/Home/TopBar';
import TopBarScroll from '../components/Home/TopBarScroll';
import { connect } from 'react-redux';
import { getAllPosts, clearFilter } from '../redux/actions';
import HomeSkeleton from '../components/Home/HomeSkeleton';

const Home = ({
  posts: { posts, filteredPosts },
  getAllPosts,
  clearFilter,
}) => {
  const { Title } = Typography;
  const scroll = useHasScrolled();
  useEffect(() => {
    getAllPosts();
    //eslint-disable-next-line
  }, []);
  if (!posts) {
    return <HomeSkeleton />;
  }
  if (posts) {
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
            {filteredPosts.length > 0 ? (
              <Col span={8}>
                <Button
                  type="primary"
                  shape="round"
                  size="middle"
                  id="filterbtn"
                  onClick={() => {
                    clearFilter();
                  }}
                >
                  Clear Filters
                </Button>
              </Col>
            ) : (
              <Col></Col>
            )}
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
          <Recommendations posts={posts} filteredPosts={filteredPosts} />
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getAllPosts, clearFilter })(Home);
