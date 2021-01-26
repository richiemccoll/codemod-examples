export default function transform(fileInfo, api) {
  const { jscodeshift: codeshift } = api;
  const result = codeshift(fileInfo.source);
  const callExpressions = result.find(codeshift.CallExpression, {
      callee: {
          type: 'MemberExpression',
          object: { type: 'Identifier', name: 'console' }
      }
  });
  return callExpressions.remove().toSource();
}
