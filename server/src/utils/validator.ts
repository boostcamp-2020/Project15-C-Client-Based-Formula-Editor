export enum ValidateType {
  Number = 'number',
  String = 'string',
  Object = 'object',
  Array = 'array',
  Boolean = 'boolean',
  Undefined = 'undefined',
  Null = 'null',
}

export function isValidateType<T>(
  target: T,
  type: ValidateType,
  callback?: (target: T) => boolean
): boolean {
  if (type === ValidateType.Null && target !== null) {
    return false;
  }

  if (type === ValidateType.Number && !Number.isFinite(Number(target))) {
    return false;
  }

  if (type === ValidateType.Array && !Array.isArray(target)) return false;

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
}
