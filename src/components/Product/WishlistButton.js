import React, { useEffect } from 'react';
import { Button } from 'antd';
import { addToWishlist } from '../../redux/actions';
import { connect } from 'react-redux';

const WishlistButton = ({
  posts: { post },
  auth: { token },
  addToWishlist,
}) => {
  useEffect(() => {
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Button
        type="primary"
        block
        style={{ border: 'none' }}
        onClick={() => {
          addToWishlist(post.id, token);
        }}
      >
        Save Post
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { addToWishlist })(WishlistButton);
