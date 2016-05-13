Package.describe({
  name: 'jcheroske:less-bootstrap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Style Bootstrap components',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jcheroske/meteor-less-bootstrap.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');

  api.use('less');
  api.use('jcheroske:less-mouse-and-touch');

  api.addFiles('index.import.less', 'client');
});
