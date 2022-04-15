# File Generator Start from Console

➜  projects mkdir filegenerator
➜  projects cd filegenerator
➜  filegenerator git init
Initialized empty Git repository in /Users/antjeexner/projects/filegenerator/.git/
➜  filegenerator git:(main) npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (filegenerator) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/antjeexner/projects/filegenerator/package.json:

{
  "name": "filegenerator",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
➜  filegenerator git:(main) ✗ touch .gitignore
➜  filegenerator git:(main) ✗ touch .prettierrc
➜  filegenerator git:(main) ✗ touch .prettierignore
➜  filegenerator git:(main) ✗ touch index.js
➜  filegenerator git:(main) ✗ code .
➜  filegenerator git:(main) ✗ cd ..


# Express Intro Start from Console

➜  projects mkdir express-intro
➜  projects cd express-intro 
➜  express-intro git init
Initialized empty Git repository in /Users/antjeexner/projects/express-intro/.git/
➜  express-intro git:(main) npm init -y
Wrote to /Users/antjeexner/projects/express-intro/package.json:

{
  "name": "express-intro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


➜  express-intro git:(main) ✗ touch index.js
➜  express-intro git:(main) ✗ touch .gitignore
➜  express-intro git:(main) ✗ touch .prettierrc
➜  express-intro git:(main) ✗ touch .prettierignore
➜  express-intro git:(main) ✗ code .
➜  express-intro git:(main) ✗ cd ..


# Express Books Start from Console

➜  projects mkdir express-books
➜  projects cd express-books 
➜  express-books git init
Initialized empty Git repository in /Users/antjeexner/projects/express-books/.git/
➜  express-books git:(main) npm init -y
Wrote to /Users/antjeexner/projects/express-books/package.json:

{
  "name": "express-books",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


➜  express-books git:(main) ✗ touch index.js .gitignore .prettierrc .prettierignore
➜  express-books git:(main) ✗ code .
➜  express-books git:(main) ✗ cd ..

# Express Exercise Start from Console

➜  projects git clone git@github.com:PulexIrritans/express-exercise.git
Cloning into 'express-exercise'...
remote: Enumerating objects: 10, done.
remote: Counting objects: 100% (10/10), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 10 (delta 0), reused 9 (delta 0), pack-reused 0
Receiving objects: 100% (10/10), 7.10 KiB | 3.55 MiB/s, done.
➜  projects cd express-exercise 
➜  express-exercise git:(main) npm i

added 51 packages, and audited 52 packages in 517ms

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
➜  express-exercise git:(main) code .
➜  express-exercise git:(main) cd ..


# My first node server

➜  projects code my-first-node-server 
➜  projects cd 

## MongoDB installation
➜  ~ brew tap mongodb/brew             
Running `brew update --preinstall`...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
acl                        gi-docgen                  mariadb@10.6
autocannon                 go@1.17                    melody
bvm                        gops                       mongodb-atlas-cli
cloudflare-quiche          highs                      nickel
compiledb                  httpyac                    nvchecker
criterion                  ifacemaker                 observerward
dagger                     imposm3                    openjdk@17
ddcutil                    inih                       postgraphile
difftastic                 jdtls                      powerman-dockerize
easeprobe                  kmod                       rslint
ecflow-ui                  koka                       shadowsocks-rust
epinio                     kubekey                    stylish-haskell
flyctl                     libcython                  testkube
fortran-language-server    libmarpa                   trivy
fourmolu                   ltex-ls                    ugit
gemgen                     mapproxy                   wasm-tools
==> Updated Formulae
Updated 1712 formulae.
==> Renamed Formulae
richmd -> rich-cli
==> Deleted Formulae
autopano-sift-c            griffon                    komposition
boost-python               gstreamermm                mozilla-addon-sdk

==> Tapping mongodb/brew
Cloning into '/opt/homebrew/Library/Taps/mongodb/homebrew-brew'...
remote: Enumerating objects: 866, done.
remote: Counting objects: 100% (363/363), done.
remote: Compressing objects: 100% (272/272), done.
remote: Total 866 (delta 192), reused 147 (delta 88), pack-reused 503
Receiving objects: 100% (866/866), 190.95 KiB | 2.10 MiB/s, done.
Resolving deltas: 100% (430/430), done.
Tapped 14 formulae (30 files, 258.4KB).
➜  ~ brew install mongodb-community@5.0
==> Downloading https://fastdl.mongodb.org/tools/db/mongodb-database-tools-macos
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libuv/manifests/1.44.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/libuv/blobs/sha256:a6abf837a475
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/manifests/2022-
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/ca-certificates/blobs/sha256:e7
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/manifests/1.1.1n
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/openssl/1.1/blobs/sha256:f9dbd8
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/macos-term-size/manifests/1.0.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/macos-term-size/blobs/sha256:f4
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/node/14/manifests/14.19.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/node/14/blobs/sha256:b40b066d32
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/mongosh/manifests/1.3.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/mongosh/blobs/sha256:e01f4520a7
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-5.0.6.tgz
######################################################################## 100.0%
==> Installing mongodb-community from mongodb/brew
Warning: A newer Command Line Tools release is available.
Update them from Software Update in System Preferences or run:
  softwareupdate --all --install --force

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/all/.
You should download the Command Line Tools for Xcode 13.3.

==> Installing dependencies for mongodb/brew/mongodb-community: mongodb-database-tools, libuv, ca-certificates, openssl@1.1, macos-term-size, node@14 and mongosh
==> Installing mongodb/brew/mongodb-community dependency: mongodb-database-
Warning: A newer Command Line Tools release is available.
Update them from Software Update in System Preferences or run:
  softwareupdate --all --install --force

If that doesn't show you any updates, run:
  sudo rm -rf /Library/Developer/CommandLineTools
  sudo xcode-select --install

Alternatively, manually download them from:
  https://developer.apple.com/download/all/.
You should download the Command Line Tools for Xcode 13.3.

🍺  /opt/homebrew/Cellar/mongodb-database-tools/100.5.2: 13 files, 115.7MB, built in 2 seconds
==> Installing mongodb/brew/mongodb-community dependency: libuv
==> Pouring libuv--1.44.1.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/libuv/1.44.1: 49 files, 3.5MB
==> Installing mongodb/brew/mongodb-community dependency: ca-certificates
==> Pouring ca-certificates--2022-03-29.all.bottle.tar.gz
==> Regenerating CA certificate bundle from keychain, this may take a while...
🍺  /opt/homebrew/Cellar/ca-certificates/2022-03-29: 3 files, 211.6KB
==> Installing mongodb/brew/mongodb-community dependency: openssl@1.1
==> Pouring openssl@1.1--1.1.1n.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/openssl@1.1/1.1.1n: 8,089 files, 18MB
==> Installing mongodb/brew/mongodb-community dependency: macos-term-size
==> Pouring macos-term-size--1.0.0.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/macos-term-size/1.0.0: 5 files, 36.9KB
==> Installing mongodb/brew/mongodb-community dependency: node@14
==> Pouring node@14--14.19.1.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/node@14/14.19.1: 3,956 files, 53MB
==> Installing mongodb/brew/mongodb-community dependency: mongosh
==> Pouring mongosh--1.3.1.arm64_monterey.bottle.tar.gz
🍺  /opt/homebrew/Cellar/mongosh/1.3.1: 5,694 files, 34.4MB
==> Installing mongodb/brew/mongodb-community
==> Caveats
To start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
  mongod --config /opt/homebrew/etc/mongod.conf
==> Summary
🍺  /opt/homebrew/Cellar/mongodb-community/5.0.6: 11 files, 181.5MB, built in 2 seconds
==> `brew cleanup` has not been run in the last 30 days, running now...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
Removing: /opt/homebrew/Cellar/ca-certificates/2022-02-01... (3 files, 213.4KB)
Removing: /Users/antjeexner/Library/Caches/Homebrew/ca-certificates--2022-02-01... (120.8KB)
Removing: /opt/homebrew/Cellar/libuv/1.43.0... (49 files, 3.5MB)
Removing: /Users/antjeexner/Library/Caches/Homebrew/libuv--1.43.0... (1.3MB)
Removing: /Users/antjeexner/Library/Caches/Homebrew/node@16--16.14.0_1... (11.8MB)
Removing: /opt/homebrew/Cellar/openssl@1.1/1.1.1m... (8,081 files, 18MB)
Removing: /Users/antjeexner/Library/Caches/Homebrew/openssl@1.1--1.1.1m... (5MB)
Removing: /Users/antjeexner/Library/Logs/Homebrew/libuv... (64B)
Removing: /Users/antjeexner/Library/Logs/Homebrew/brotli... (64B)
Removing: /Users/antjeexner/Library/Logs/Homebrew/icu4c... (64B)
Removing: /Users/antjeexner/Library/Logs/Homebrew/c-ares... (64B)
Removing: /Users/antjeexner/Library/Logs/Homebrew/node@16... (64B)
Removing: /Users/antjeexner/Library/Logs/Homebrew/libnghttp2... (64B)
Removing: /Users/antjeexner/Library/Logs/Homebrew/ca-certificates... (64B)
Removing: /Users/antjeexner/Library/Logs/Homebrew/openssl@1.1... (64B)
Pruned 0 symbolic links and 2 directories from /opt/homebrew
==> Upgrading 1 dependent of upgraded formulae:
Disable this behaviour by setting HOMEBREW_NO_INSTALLED_DEPENDENTS_CHECK.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).
node@16 16.14.0_1 -> 16.14.2
==> Downloading https://ghcr.io/v2/homebrew/core/node/16/manifests/16.14.2
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/node/16/blobs/sha256:148943a35c
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Upgrading node@16
  16.14.0_1 -> 16.14.2 

==> Pouring node@16--16.14.2.arm64_monterey.bottle.tar.gz
==> Caveats
node@16 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have node@16 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/node@16/bin:$PATH"' >> ~/.zshrc

For compilers to find node@16 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/node@16/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/node@16/include"

==> Summary
🍺  /opt/homebrew/Cellar/node@16/16.14.2: 1,938 files, 44.5MB
==> Running `brew cleanup node@16`...
Removing: /opt/homebrew/Cellar/node@16/16.14.0_1... (1,905 files, 44.3MB)
==> Checking for dependents of upgraded formulae...
==> No broken dependents found!
==> Caveats
==> mongodb-community
To start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
  mongod --config /opt/homebrew/etc/mongod.conf
==> node@16
node@16 is keg-only, which means it was not symlinked into /opt/homebrew,
because this is an alternate version of another formula.

If you need to have node@16 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/node@16/bin:$PATH"' >> ~/.zshrc

For compilers to find node@16 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/node@16/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/node@16/include"

➜  ~ brew services start mongodb-community@5.0
==> Tapping homebrew/services
Cloning into '/opt/homebrew/Library/Taps/homebrew/homebrew-services'...
remote: Enumerating objects: 1960, done.
remote: Counting objects: 100% (467/467), done.
remote: Compressing objects: 100% (198/198), done.
remote: Total 1960 (delta 323), reused 337 (delta 263), pack-reused 1493
Receiving objects: 100% (1960/1960), 541.80 KiB | 1.09 MiB/s, done.
Resolving deltas: 100% (878/878), done.
Tapped 1 command (45 files, 692KB).
==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-commu


## Starting MongoDB
➜  ~ mongosh
Current Mongosh Log ID:	6256c3b17588d95b0a2f4742
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1
Using MongoDB:		5.0.6
Using Mongosh:		1.3.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


To help improve our products, anonymous usage data is collected and sent to MongoDB periodically (https://www.mongodb.com/legal/privacy-policy).
You can opt-out by running the disableTelemetry() command.

------
   The server generated these startup warnings when booting:
   2022-04-13T14:26:18.602+02:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------


### Display all existing DBs
test> show dbs
admin     41 kB
config  61.4 kB
local     41 kB

### Quitting MongoDB
test> exit
➜  ~ mongosh
Current Mongosh Log ID:	6256cc17f326fd59c111f9bf
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1
Using MongoDB:		5.0.6
Using Mongosh:		1.3.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting:
   2022-04-13T14:26:18.602+02:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

### Setup new mongoDB with "use"


#### MongoDB exercises
test> use neuefische
switched to db neuefische
neuefische> db.students.insertOne({name: 'Sue', age: 24, points: 23, happiness: 5})
{
  acknowledged: true,
  insertedId: ObjectId("6256ccc3f326fd59c111f9c0")
}
neuefische> db.students.insertMany({name: "Lucille", age: 30, points: 26, happiness: 5 },)
MongoInvalidArgumentError: Argument "docs" must be an array of documents
neuefische>   { name: "Gilbert", age: 45, points: 0, happiness: 1 },
...   { name: "Jennie", age: 47, points: 39, happiness: 5 },
...   { name: "Lydia", age: 29, points: 14, happiness: 2 },
neuefische> db.students.insertMany([{name: "Lucille", age: 30, points: 26, happiness: 5}, {name: "Gilbert", age: 45, points: 0, happiness: 1}, {name: "Jennie", age: 47, points: 39, happiness: 5}, {name: "Lydia", age: 29, points: 14, happiness: 2}, {name: "Agnes", age: 34, points: 39, happiness: 4}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("6256cedcf326fd59c111f9c1"),
    '1': ObjectId("6256cedcf326fd59c111f9c2"),
    '2': ObjectId("6256cedcf326fd59c111f9c3"),
    '3': ObjectId("6256cedcf326fd59c111f9c4"),
    '4': ObjectId("6256cedcf326fd59c111f9c5")
  }
}
neuefische> db.students.find({points: 0})
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  }
]
neuefische> db.students.find({happiness: 5})
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  }
]
neuefische> db.students.find({age: {$gte: 30}})
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({$and: [age: {$gte: 30}, {happiness: 5}]})
Uncaught:
TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: unknown: Unexpected token, expected "," (1:28)

> 1 | db.students.find({$and: [age: {$gte: 30}, {happiness: 5}]})
    |                             ^
  2 |'
neuefische> db.students.find({$and: {age: {$gte: 30}, {happiness: 5}}})
Uncaught:
TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: unknown: Unexpected token (1:42)

> 1 | db.students.find({$and: {age: {$gte: 30}, {happiness: 5}}})
    |                                           ^
  2 |'
neuefische> db.students.find({$and: [{age: {$gte: 30}}, {happiness: 5}]})
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  }
]
neuefische> db.students.find({$or:[{name: "Agnes"}, {name: "Sue"}, {name: "Jennie"}])
Uncaught:
TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: unknown: Unexpected token, expected "," (1:72)

> 1 | db.students.find({$or:[{name: "Agnes"}, {name: "Sue"}, {name: "Jennie"}])
    |                                                                         ^
  2 |'
neuefische> db.students.find({$or:[{name: "Agnes"}, {name: "Sue"}, {name: "Jennie"}]})
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({name: {$not: {$eq: "Lydia"}}})
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({$or: [{name: {$not: {$eq: "Lydia"}}}, {name: {$not: {$eq: "Sue"}}}, {name: {$not: {$eq: "Gilbert"}}}
... 
... 
neuefische> db.students.find({$or: [{name: {$not: {$eq: "Lydia"}}}, {name: {$not: {$eq: "Sue"}}}, {name: {$not: {$eq: "Gilbert"}}}]})
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c4"),
    name: 'Lydia',
    age: 29,
    points: 14,
    happiness: 2
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({name: {$not: {$or: {$eq: "Lydia"} {$eq: "Sue"} {$eq: "Gilbert"}}}})
Uncaught:
TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: unknown: Unexpected token, expected "," (1:52)

> 1 | db.students.find({name: {$not: {$or: {$eq: "Lydia"} {$eq: "Sue"} {$eq: "Gilbert"}}}})
    |                                                     ^
  2 |'
neuefische> db.students.find({name: {$not: {$eq: "Lydia"}}})
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({happiness: {$gt: 2}}).sort({age: -1}).limit(2)
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({happiness: {$gt: 2}}).sort({age: 1}).limit(2)
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  }
]
neuefische> db.students.find({happiness: {$gt: 2}}).sort({age: 1}).limit(2).skip(2)
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  }
]
neuefische> db.students.find({$not: {points: 2}})
MongoServerError: unknown top level operator: $not. If you have a field name that starts with a '$' symbol, consider using $getField or $setField.
neuefische> db.students.find({points: {$not: {eq: 2}}})
MongoServerError: unknown operator: eq
neuefische> db.students.find({points: {$not: {$eq: 2}}})
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c4"),
    name: 'Lydia',
    age: 29,
    points: 14,
    happiness: 2
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({$or: [{points: {$lt: 20}}, {happiness: {$lt: 3}}]})
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c4"),
    name: 'Lydia',
    age: 29,
    points: 14,
    happiness: 2
  }
]
neuefische> db.students.find({$or: [{points: {$lt: 10}}, {happiness: {$lt: 3}}]})
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 0,
    happiness: 1
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c4"),
    name: 'Lydia',
    age: 29,
    points: 14,
    happiness: 2
  }
]
neuefische> updateOne({name: 'Gilbert'},{$set: {points: 13}})
ReferenceError: updateOne is not defined
neuefische> db.students.updateOne({name: 'Gilbert'},{$set: {points: 13}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
neuefische> updateMany({name: 'Gilbert'},{$inc: {happiness: 3}})
ReferenceError: updateMany is not defined
neuefische> db.students.updateMany({name: 'Gilbert'},{$inc: {happiness: 3}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
neuefische> db.students.updateMany({happiness: {$lt: 4}}, {$inc: {points: -5}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
neuefische> db.students.countDocuments({points: {$gt: 20}})
neuefische> db.students.find({$or: [{name: {$not: {$eq: "Lydia"}}}, {name: {$not: {$eq: "Sue"}}}] })
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 13,
    happiness: 4
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c4"),
    name: 'Lydia',
    age: 29,
    points: 9,
    happiness: 2
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({$or: [{name: {$not: {$eq: 'Lydia'}}}, {name: {$not: {$eq: 'Sue'}}}] })
[
  {
    _id: ObjectId("6256ccc3f326fd59c111f9c0"),
    name: 'Sue',
    age: 24,
    points: 23,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 13,
    happiness: 4
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c4"),
    name: 'Lydia',
    age: 29,
    points: 9,
    happiness: 2
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.find({$and: [{name: {$not: {$eq: "Lydia"}}}, {name: {$not: {$eq: "Sue"}}}] })
[
  {
    _id: ObjectId("6256cedcf326fd59c111f9c1"),
    name: 'Lucille',
    age: 30,
    points: 26,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c2"),
    name: 'Gilbert',
    age: 45,
    points: 13,
    happiness: 4
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c3"),
    name: 'Jennie',
    age: 47,
    points: 39,
    happiness: 5
  },
  {
    _id: ObjectId("6256cedcf326fd59c111f9c5"),
    name: 'Agnes',
    age: 34,
    points: 39,
    happiness: 4
  }
]
neuefische> db.students.deleteOne({name: 'Jennie'})
{ acknowledged: true, deletedCount: 1 }
neuefische> db.students.deleteAll({points: {$lt: 20}})
TypeError: db.students.deleteAll is not a function
neuefische> db.students.deleteMany({points: {$lt: 20}})
{ acknowledged: true, deletedCount: 2 }
neuefische> exit

