type DefaultResponseType = {
  Desc: string;
  Result: number;
  ResultString: string;
};

type ResponseType<T> = DefaultResponseType & {
  data: T;
};

type ResponseUnsignedType = DefaultResponseType & {
  hash: Array<string>;
  otherHash: unknown;
};

type PreparedDataType = {
  client_id: string;
  expires_in: number;
  request_id: string;
};

type JwtDataType = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  token_type: string;
};

type UnsignedTxDataType = {};

export type { ResponseType, PreparedDataType, JwtDataType, ResponseUnsignedType };
