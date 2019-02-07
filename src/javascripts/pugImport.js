import html from '../pug/index.pug';

console.log(html);

if (module.hot) {
  module.hot.accept(console.error);

  module.hot.addStatusHandler((status) => {
    console.log('status', status);
  });

  module.hot.accept(['../pug/index.pug'], () => {
    console.log('pug change');
  });

  module.hot.dispose(() => {
    console.log('dispose');
  });
}
