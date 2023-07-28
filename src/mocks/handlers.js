import { rest } from "msw";

const todos = ["운동", "게임"];

export const handlers = [
  rest.get("/todos", async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  rest.post("/todos", async (req, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
