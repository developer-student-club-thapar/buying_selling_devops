import React, { Fragment, useEffect } from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/Home.module.css';
import { Typography } from 'antd';
import Categories from '../components/Home/Categories';
import Recommendations from '../components/Home/Recommendations';
import { useHasScrolled } from '../components/Home/hooks/useScrollHandler';
import TopBar from '../components/Home/TopBar';
import TopBarScroll from '../components/Home/TopBarScroll';
import { connect } from 'react-redux';
import { getAllPosts } from '../redux/actions';

const Home = ({ posts: { posts, filteredPosts }, getAllPosts }) => {
  const { Title } = Typography;
  const scroll = useHasScrolled();
  useEffect(() => {
    getAllPosts();
    //eslint-disable-next-line
  }, []);
  if (!posts) {
    return <h1>Loading</h1>;
  }
  if (posts) {
    return (
      <Fragment>
        {/* {scroll !== false ? console.log(scroll) : console.log('bye')} */}
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

          <Recommendations posts={posts} filteredPosts={filteredPosts} />
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { getAllPosts })(Home);
