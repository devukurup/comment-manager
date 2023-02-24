export const getSortedComments = comments => comments.sort(
    (commentA, commentB) => new Date(commentB.created_at).getTime() - new Date(commentA.created_at).getTime()
)