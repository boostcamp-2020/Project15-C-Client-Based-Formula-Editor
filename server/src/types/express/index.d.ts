declare namespace Express {
  interface Request {
    user?: {
      userId: number;
      email?: string;
      nickname?: string;
      profileImage?: string;
      iat?: string;
    };
  }
}
