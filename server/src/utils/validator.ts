export enum ValidateType {
  Number = 'number',
  String = 'string',
  Object = 'object',
  Array = 'array',
  Boolean = 'boolean',
  Undefined = 'undefined',
  Null = 'null',
}

export const isValidateType = (
  target: any,
  type: ValidateType,
  callback?: (target: any) => boolean
) => {
  if (type === ValidateType.Null && target !== null) {
    return false;
  }

  if (type === ValidateType.Number && !Number.isFinite(Number(target))) {
    return false;
  }

  if (type === ValidateType.Array && !Number.isFinite(target.length)) return false;

  if (
    (type === ValidateType.Object ||
      type === ValidateType.String ||
      type === ValidateType.Boolean ||
      type === ValidateType.Undefined) &&
    typeof target !== type
  )
    return false;

  if (callback && !callback(target)) return false;

  return true;
};
