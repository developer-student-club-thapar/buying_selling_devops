import React, { Fragment, useEffect } from 'react';
import { Row, Col } from 'antd';
import styles from '../styles/Product.module.css';
import { Typography } from 'antd';
import Text from 'antd/lib/typography/Text';
import { Button } from 'antd';
import ImageCarousel from '../components/Product/ImageCarousel';
import ProductDescription from '../components/Product/ProductDescription';
import ProductDetails from '../components/Product/ProductDetails';
import { connect } from 'react-redux';
import { getPost, addToWishlist } from '../redux/actions';
import Moment from 'react-moment';
import WishlistButton from '../components/Product/WishlistButton';

const Product = ({
  posts: { post },
  auth: { token },
  getPost,
  addToWishlist,
  match,
}) => {
  const { Title } = Typography;
  const id = `${match.params.id}`;
  useEffect(() => {
    getPost(id);
    //eslint-disable-next-line
  }, []);
  if (!post) {
    return <h1>Loading</h1>;
  }
  if (post) {
    return (
      <Fragment>
        <Row style={{ position: 'sticky', top: 0 }}>
          <ImageCarousel post={post} />
        </Row>
        <div className={styles.main}>
          <Row>
            <Col span={24} style={{ marginTop: '20px' }}>
              {post.isSold === false ? (
                <Text
                  style={{
                    color: '#42FF00',
                    fontSize: '14px',
                    marginLeft: '20px',
                  }}
                >
                  Available
                </Text>
              ) : (
                <Text
                  style={{
                    color: 'red',
                    fontSize: '14px',
                    marginLeft: '20px',
                  }}
                >
                  Sold
                </Text>
              )}
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ height: '30px', overflow: 'hidden' }}>
              <Title
                level={3}
                style={{
                  color: '#ffffff',
                  marginLeft: '20px',
                }}
              >
                {post.title}
              </Title>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              {post.category.map(category => (
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: '14px',

                    marginLeft: '20px',
                  }}
                >
                  {category.name}
                </Text>
              ))}
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Title
                level={4}
                style={{
                  color: '#FFFFFF',

                  paddingRight: '20px',
                }}
              >
                ₹ {post.price}
              </Title>
            </Col>
          </Row>
          <Row>
            <ProductDescription post={post} />
          </Row>
          <ProductDetails post={post} />
          <div className={styles.footer}>
            <Row>
              <Col
                span={24}
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  marginTop: '30px',
                }}
              >
                <WishlistButton />
              </Col>
            </Row>
            <Row>
              <Col
                span={24}
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  marginTop: '10px',
                }}
              >
                {post.isSold === false ? (
                  <Button
                    type="primary"
                    block
                    style={{ backgroundColor: '#4F4F4F', border: 'none' }}
                  >
                    Contact the seller
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    block
                    style={{ backgroundColor: '#4F4F4F', border: 'none' }}
                    disabled
                  >
                    Sold
                  </Button>
                )}
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ marginTop: '20px', textAlign: 'center' }}>
                <Text
                  style={{
                    color: '#42FF00',
                    fontSize: '14px',
                  }}
                >
                  Posted on{' '}
                  <Moment format="DD/MM/YYYY">{post.datePosted}</Moment>
                </Text>
              </Col>
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPost, addToWishlist })(Product);
