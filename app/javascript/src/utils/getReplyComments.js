export const getReplyComments = (comments, parent) =>  comments.filter(comment => comment.parent === parent);