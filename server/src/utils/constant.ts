export enum STATUS_CODE {
  SUCCESS = 200,
  CREATED = 201,
  CLIENT_ERROR = 400,
  UNAUTHORIZED = 401,
  SERVER_ERROR = 500,
}

export enum ERROR_MESSAGE {
  CLIENT_ERROR = 'Request Error',
  UNAUTHORIZED_ERROR = 'Unauthorized Error',
  SERVER_ERROR = 'Server Error',
}
