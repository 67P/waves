# Waves

Waves is a viewer for public chat logs stored in a [remoteStorage][1] account
using the [Kosmos JSON-LD format for chat messages][2]. [Kosmos][3] is an
open-source software suite for group chats, based entirely on open standards
and protocols.

One can log IRC and XMPP MUC channels live using a [Hubot][4] bot and the
[hubot-remotestorage-logger][5] plugin for example.

Please contact someone via IRC in #kosmos on Freenode, in case you want to have
your channel logged by a Kosmos bot and your channel history added to our
[public Waves instance][6].

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TODO add deployment script/instructions

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

[1]: https://remotestorage.io
[2]: https://github.com/remotestorage/modules/blob/master/src/chat-messages.js#L45-L131
[3]: https://kosmos.org
[4]: https://hubot.github.com
[5]: https://github.com/67P/hubot-remotestorage-logger
[6]: https://waves.kosmos.org
