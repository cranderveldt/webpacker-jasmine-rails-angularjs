# Webpack / Jasmine-Rails / AngularJS

## Using Webpacker without Sprockets

This branch utilizes only webpacker for loading assets. In order to do this we create a new pack that is specifc to running specs. Because this is compiled by webpacker, we actually duplicate the work we have in our application pack. We can't import the application pack directly, because we need `angular` on the global scope.

When you run these tests, it becomes clear that jasmine is not behaving correctly. The javascript console reports that `beforeEach` is not defined and one spec fails because `inject` is not defined.

This is because something about the way webpacker prepares `angular-mocks` screws up Jasmine-Rails. If you include `angular-mocks` via sprockets, things work as expected when running tests in a browser, but still fail to work via command-line.
