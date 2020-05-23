import React, { Fragment } from 'react';
import { Row, Col } from 'antd';
import headphones from '../../assets/headphones.jpeg';
import Text from 'antd/lib/typography/Text';

const Recommendations = () => {
  return (
    <Fragment>
      <Row>
        <Col
          span={12}
          style={{ height: '140px', width: '140px', textAlign: 'center' }}
        >
          <img
            src={headphones}
            alt="product"
            height="140px"
            width="140px"
            style={{ borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => {
              console.log('yo');
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
              console.log('yo');
            }}
          >
            <div>
              <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                Electronics
              </Text>
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
                Headphones
              </Text>
            </div>
            <div style={{ marginTop: '-10px' }}>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '10px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Sony
              </Text>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '80px',
                  color: '#42FF00',
                  fontWeight: 'bold',
                }}
              >
                ₹ 999
              </Text>
            </div>
          </div>
        </Col>
        <Col
          span={12}
          style={{ height: '140px', width: '140px', textAlign: 'center' }}
        >
          <img
            src={headphones}
            alt="product"
            height="140px"
            width="140px"
            style={{ borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => {
              console.log('yo');
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
              console.log('yo');
            }}
          >
            <div>
              <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                Electronics
              </Text>
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
                Headphones
              </Text>
            </div>
            <div style={{ marginTop: '-10px' }}>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '10px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Sony
              </Text>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '80px',
                  color: '#42FF00',
                  fontWeight: 'bold',
                }}
              >
                ₹ 999
              </Text>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col
          span={12}
          style={{ height: '140px', width: '140px', textAlign: 'center' }}
        >
          <img
            src={headphones}
            alt="product"
            height="140px"
            width="140px"
            style={{ borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => {
              console.log('yo');
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
              console.log('yo');
            }}
          >
            <div>
              <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                Electronics
              </Text>
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
                Headphones
              </Text>
            </div>
            <div style={{ marginTop: '-10px' }}>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '10px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Sony
              </Text>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '80px',
                  color: '#42FF00',
                  fontWeight: 'bold',
                }}
              >
                ₹ 999
              </Text>
            </div>
          </div>
        </Col>
        <Col
          span={12}
          style={{ height: '140px', width: '140px', textAlign: 'center' }}
        >
          <img
            src={headphones}
            alt="product"
            height="140px"
            width="140px"
            style={{ borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => {
              console.log('yo');
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
              console.log('yo');
            }}
          >
            <div>
              <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                Electronics
              </Text>
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
                Headphones
              </Text>
            </div>
            <div style={{ marginTop: '-10px' }}>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '10px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Sony
              </Text>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '80px',
                  color: '#42FF00',
                  fontWeight: 'bold',
                }}
              >
                ₹ 999
              </Text>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <Row>
        <Col
          span={12}
          style={{ height: '140px', width: '140px', textAlign: 'center' }}
        >
          <img
            src={headphones}
            alt="product"
            height="140px"
            width="140px"
            style={{ borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => {
              console.log('yo');
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
              console.log('yo');
            }}
          >
            <div>
              <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                Electronics
              </Text>
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
                Headphones
              </Text>
            </div>
            <div style={{ marginTop: '-10px' }}>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '10px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Sony
              </Text>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '80px',
                  color: '#42FF00',
                  fontWeight: 'bold',
                }}
              >
                ₹ 999
              </Text>
            </div>
          </div>
        </Col>
        <Col
          span={12}
          style={{ height: '140px', width: '140px', textAlign: 'center' }}
        >
          <img
            src={headphones}
            alt="product"
            height="140px"
            width="140px"
            style={{ borderRadius: '10px', cursor: 'pointer' }}
            onClick={() => {
              console.log('yo');
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
              console.log('yo');
            }}
          >
            <div>
              <Text style={{ fontSize: '8px', marginLeft: '10px' }}>
                Electronics
              </Text>
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
                Headphones
              </Text>
            </div>
            <div style={{ marginTop: '-10px' }}>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '10px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}
              >
                Sony
              </Text>
              <Text
                style={{
                  fontSize: '8px',
                  marginLeft: '80px',
                  color: '#42FF00',
                  fontWeight: 'bold',
                }}
              >
                ₹ 999
              </Text>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Recommendations;
