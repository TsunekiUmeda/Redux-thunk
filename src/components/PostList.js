import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost()
  }
  render() {
    console.log('PostList', this.props.posts)
    return <div>Post List</div>
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPost })(PostList)
