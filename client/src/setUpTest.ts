import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const handlers = [
  rest.get('http://127.0.0.1:5000/api/label/1', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        title: 'bug',
        description: "Something isn't working",
        color: '#cf0000',
        issueTrackerId: 1,
      })
    );
  }),
  rest.get('http://127.0.0.1:5000/api/labels/1', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          title: 'bug',
          description: "Something isn't working",
          color: '#cf0000',
          issueTrackerId: 1,
        },
        {
          id: 2,
          title: 'documentation',
          description: 'Edit documentation',
          color: '#33b1ff',
          issueTrackerId: 1,
        },
        {
          id: 3,
          title: 'duplicate',
          description: 'This issue already exists',
          color: '#b5babd',
          issueTrackerId: 1,
        },
      ])
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

export default server;
