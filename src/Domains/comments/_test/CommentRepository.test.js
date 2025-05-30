const CommentRepository = require('../CommentRepository');

describe('CommentRepository interface', () => {
  it('should throw error when invoke unimplemented method', async () => {
    // Arrange
    const commentRepository = new CommentRepository();

    // Action & Assert
    await expect(commentRepository.addComment({})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.getCommentById({})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.deleteCommentById({})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.getAllCommentsByThreadId({})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.verifyCommentOwner({}, {})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.verifyCommentAvailability({})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.addCommentLikeById({}, {})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.deleteCommentLikeById({}, {})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(commentRepository.verifyIsCommentLiked({}, {})).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
