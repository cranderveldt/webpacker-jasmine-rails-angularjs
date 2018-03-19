# Webpack / Jasmine-Rails / AngularJS

This branch uses sprockets to get the specs running in a browser, but specs still don't run via commandline: 

```
$ RAILS_ENV=test bundle exec rake spec:javascript
...
ERROR: TypeError: Attempted to assign to readonly property.
```
