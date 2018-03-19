# Webpack / Jasmine-Rails / AngularJS

## Using Webpacker with Sprockets

This branch uses sprockets to get the specs running in a browser, but specs still don't run via command line:

```
$ RAILS_ENV=test bundle exec rake spec:javascript
...
ERROR: TypeError: Attempted to assign to readonly property.
```

This is likely because when specs are run via command line, pack files are not being included correctly.
