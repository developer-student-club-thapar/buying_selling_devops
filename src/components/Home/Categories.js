import React, { Fragment, useEffect } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { fetchCategories, filterPosts } from '../../redux/actions';

const Categories = ({
  posts: { categories },
  fetchCategories,
  filterPosts,
}) => {
  useEffect(() => {
    fetchCategories();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div>
        {categories &&
          categories.map((category) => (
            <Button
              type="primary"
              style={{
                marginRight: '5px',
                backgroundColor: '#BDBDBD',
                border: 'none',
                color: '#333333',
                width: '106px',
              }}
              onClick={() => {
                filterPosts(category.id);
              }}
            >
              {category.name}
            </Button>
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchCategories, filterPosts })(
  Categories,
);
