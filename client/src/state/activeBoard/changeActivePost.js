import state from './state';

const changeActivePost = function (content) {
  if (!content) {
    throw new Error('Content is missing.');
  }

  if (state.activePost) {
    state.activePost.content = content;
  }
};

export default changeActivePost;
