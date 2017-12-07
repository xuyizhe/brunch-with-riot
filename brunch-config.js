// See http://brunch.io/#documentation for docs.
exports.files = {
  javascripts: { joinTo: 'main.js' },
  stylesheets: { joinTo: 'app.css' }
};

exports.plugins = {
  riot: {
    extension: 'tag',
    pattern: /\.tag$/,
    template: 'pug',
    type: 'typescript'
  }
};

exports.npm = {
  globals: { riot: 'riot' }
};

exports.watcher = {
  awaitWriteFinish: true
};
