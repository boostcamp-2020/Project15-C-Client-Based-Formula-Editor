declare namespace Express {
  interface Request {
    user?: {
      id: number;
      userId?: string;
      email?: string;
    };
  }
}
