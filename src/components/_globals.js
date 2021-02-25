// automatic component registration
const requireComponent = require.context(
  ".",

  true,

  /_base-[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  Vue.component(
    componentName,

    componentConfig.default || componentConfig
  );
});
