import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';
import { withRouter } from 'react-router-dom';

const Recommendations = ({ posts, history, filteredPosts }) => {
  return (
    <Fragment>
      <Row>
        {filteredPosts.length > 0
          ? filteredPosts.map(post => (
              <Col
                span={12}
                style={{
                  height: '140px',
                  width: '140px',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={post.image.image}
                  alt="product"
                  height="140px"
                  width="140px"
                  style={{ borderRadius: '10px', cursor: 'pointer' }}
                  onClick={() => {
                    history.push(`/product/${post.id}`);
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    bottom: '50px',
                    background: 'rgba(57, 57, 57, 0.5)',
                    width: '140px',
                    height: '50px',
                    borderRadius: '0px 0px 10px 10px',
                    cursor: 'pointer',
                    margin: 'auto',
                    textAlign: 'left',
                  }}
                  onClick={() => {
                    history.push(`/product/${post.id}`);
                  }}
                >
                  <div>
                    {post.category.map(category => (
                      <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                        {category.name}
                      </Text>
                    ))}
                  </div>
                  <div style={{ marginTop: '-8px' }}>
                    <Text
                      style={{
                        fontSize: '12px',
                        marginLeft: '10px',
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      }}
                    >
                      {post.title.length > 20
                        ? post.title.slice(0, 20)
                        : post.title}
                    </Text>
                  </div>
                  <div style={{ marginTop: '-10px' }}>
                    <Text
                      style={{
                        fontSize: '8px',
                        paddingLeft: '10px',
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      }}
                    >
                      {post.brand}
                    </Text>

                    {post.isSold === true ? (
                      <Text
                        style={{
                          fontSize: '8px',
                          paddingLeft: '68px',
                          color: 'red',
                          fontWeight: 'bold',
                        }}
                      >
                        ₹ {Math.floor(post.price)}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: '8px',
                          paddingLeft: '68px',
                          color: '#42FF00',
                          fontWeight: 'bold',
                        }}
                      >
                        ₹ {Math.floor(post.price)}
                      </Text>
                    )}
                  </div>
                </div>
              </Col>
            ))
          : posts.map(post => (
              <Col
                span={12}
                style={{
                  height: '140px',
                  width: '140px',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                <img
                  src={post.image.image}
                  alt="product"
                  height="140px"
                  width="140px"
                  style={{ borderRadius: '10px', cursor: 'pointer' }}
                  onClick={() => {
                    history.push(`/product/${post.id}`);
                  }}
                />

                <div
                  style={{
                    position: 'relative',
                    bottom: '50px',
                    background: 'rgba(57, 57, 57, 0.5)',
                    width: '140px',
                    height: '50px',
                    borderRadius: '0px 0px 10px 10px',
                    cursor: 'pointer',
                    margin: 'auto',
                    textAlign: 'left',
                  }}
                  onClick={() => {
                    history.push(`/product/${post.id}`);
                  }}
                >
                  <div>
                    {post.category.map(category => (
                      <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                        {category.name}
                      </Text>
                    ))}
                  </div>
                  <div style={{ marginTop: '-8px' }}>
                    <Text
                      style={{
                        fontSize: '12px',
                        marginLeft: '10px',
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      }}
                    >
                      {post.title.length > 20
                        ? post.title.slice(0, 20)
                        : post.title}
                    </Text>
                  </div>
                  <div style={{ marginTop: '-10px' }}>
                    <Text
                      style={{
                        fontSize: '8px',
                        paddingLeft: '10px',
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      }}
                    >
                      {post.brand}
                    </Text>

                    {post.isSold === true ? (
                      <Text
                        style={{
                          fontSize: '8px',
                          paddingLeft: '68px',
                          color: 'red',
                          fontWeight: 'bold',
                        }}
                      >
                        ₹ {Math.floor(post.price)}
                      </Text>
                    ) : (
                      <Text
                        style={{
                          fontSize: '8px',
                          paddingLeft: '68px',
                          color: '#42FF00',
                          fontWeight: 'bold',
                        }}
                      >
                        ₹ {Math.floor(post.price)}
                      </Text>
                    )}
                  </div>
                </div>
              </Col>
            ))}
      </Row>
    </Fragment>
  );
};

export default withRouter(Recommendations);
