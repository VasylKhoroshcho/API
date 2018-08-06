const it = require('ava');
const sinon = require('sinon');
const { mockRes } = require('sinon-express-mock');
const hendlers = require('../handlers');
const { Image } = require('../../db/models');


it('tests', (t) => {
  t.pass();
});

let findAll;
let findOne;
let create;

it.before(() => {
  findAll = sinon.stub(Image, 'findAll');
  findOne = sinon.stub(Image, 'findOne');
  create = sinon.stub(Image, 'create');
});

it('Get imges success', async (t) => {
  const appropriateResponse = [{ name: 'test', url: 'url' }];

  findAll.resolves(appropriateResponse);

  const res = mockRes();

  const result = await hendlers.getImages(null, res);

  t.is(result.send.called, true);
  t.deepEqual(result.send.lastCall.lastArg, JSON.stringify(appropriateResponse));
});

it('Delete image success ', async (t) => {
  const appropriateResponse = {
    updateAttributes(arg) {
      if (arg.deleted) return 'success';
    }
  };
  const request = {
    query: {
      id: 'id'
    }
  };

  findOne.resolves(appropriateResponse);

  const res = mockRes();
  const req = mockRes(request);

  const result = await hendlers.deleteImage(req, res);

  t.is(result.send.called, true);
  t.deepEqual(result.send.lastCall.lastArg, 'success');
});


it('Upload image success ', async (t) => {
  const appropriateResponse = {};
  const request = {
    body: {
      name: 'name'
    },
    files: [{ filename: 'name' }]
  };

  create.resolves(appropriateResponse);

  const res = mockRes();
  const req = mockRes(request);

  const result = await hendlers.upload(req, res);

  t.is(result.send.called, true);
  t.deepEqual(result.send.lastCall.lastArg, 'success');
});
