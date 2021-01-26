const DEPRECATED_APIS = {
  willMount: "UNSAFE_willMount",
  willUpdate: "UNSAFE_willUpdate",
};

function replaceDeprecatedApis(path) {
  const name = path.node.key.name;

  if (DEPRECATED_APIS[name]) {
    path.value.key.name = DEPRECATED_APIS[name];
  }
}

export default function transform(fileInfo, api) {
  const { jscodeshift: codeshift } = api;
  const result = codeshift(fileInfo.source);

  return result
    .find(codeshift.MethodDefinition)
    .forEach(replaceDeprecatedApis)
    .toSource();
}
