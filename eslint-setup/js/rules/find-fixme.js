module.exports = {
    create(context) {

        function findComments(comment) {
            if (comment.value.toLowerCase().indexOf('fixme') !== -1) {
                context.report(comment, "FIXMe is not allowed in comments");
            }
             if (comment.value.toLowerCase().indexOf('todo') !== -1) {
                context.report(comment, "TODO is not allowed in comments");
            }
        }

        return {
            Program(node) {
                let sourceCode = context.getSourceCode();
                let comments = sourceCode.getAllComments();
                for (let comment of comments) {
                    findComments(comment);
                }
            }
        }
    }
}