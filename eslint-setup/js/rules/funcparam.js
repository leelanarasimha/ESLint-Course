module.exports = {
    create(context) {
        return {
            CallExpression(node) {
                if (node.callee.name === 'checkPositive') {
                    if (typeof node.arguments[0].value !== 'number') {
                        context.report(node, 'Checkpostive method should send only number');
                    }
                }
            }
        }
    }
}