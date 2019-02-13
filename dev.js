// @flow strict
'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import nedb from 'nedb';

const db = new nedb({
  filename: path.resolve(__dirname, 'main.db'),
  autoload: true
});

const exp = express();

exp.use(bodyParser.urlencoded({ extended: true }));
exp.use(bodyParser.json());

const server = exp.listen(3000, () => console.log(server.address().port));

/*
db.insert({
  'user_id': 0,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 1,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 2,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 3,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 4,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 5,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 6,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 7,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 8,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 9,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 10,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 11,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 12,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 13,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 14,
  'wallet': 5000,
  'uuid': 'aaa',
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 15,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 16,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 17,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 18,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'user_id': 19,
  'wallet': 5000,
  'buy': [
    {'id': 0, 'price': 55, 'count': 25}
  ],
  'sell': [
    {'id': 1, 'price': 65, 'count': 25}
  ],
  'bucket': [
    {'id': 1, 'count': 25}
  ]
});

db.insert({
  'shop_id': 0,
  'name': 'tomato',
  'start': 1548990000,
  'end': 1549026000,
  'history': [
    {
      'unix': 1517464800,
      'count': 25,
      'price': 65
    },
    {
      'unix': 1517468400,
      'count': 25,
      'price': 65
    },
  ],
  'sells': [],
  'buys': [
    [55, 20]
  ]
});

db.insert({
  'shop_id': 1,
  'name': 'corn',
  'start': 1548990000,
  'end': 1549026000,
  'history': [
    {
      'unix': 1517464800,
      'count': 25,
      'price': 65
    },
    {
      'unix': 1517468400,
      'count': 25,
      'price': 65
    },
  ],
  'sells': [
    [65, 20],
  ],
  'buys': [
    [55, 20]
  ]
});
*/

// console.log(req.body.name);

exp.post('/item/list', (req, res, next) => {
  db.find({'item_id': { $exists: true }}, (err, docs) => res.json(docs));
});

exp.post('/item/:item_id', (req, res, next) => {
  db.findOne({'item_id': parseFloat(req.params.item_id)}, (err, doc) => res.json(doc));
});

exp.post('/user', (req, res, next) => {
  // TODO: ユーザ一覧も必要かも? でもその場合UUIDは切り離して管理しないと以下の実装ではダメ
  db.findOne({'uuid': req.body.uuid}, (err, doc) => res.json(doc));
});
