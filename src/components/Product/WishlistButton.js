import React from 'react';
import { Button } from 'antd';
import { addToWishlist } from '../../redux/actions';
import { connect } from 'react-redux';

const WishlistButton = ({
  posts: { post },
  auth: { token },
  addToWishlist,
}) => {
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
        Add to wishlist
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  posts: state.posts,
  auth: state.auth,
});

export default connect(mapStateToProps, { addToWishlist })(WishlistButton);
