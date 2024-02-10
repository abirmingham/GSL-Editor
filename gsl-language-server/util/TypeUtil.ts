export const isDefined = <T>(x: T): x is Exclude<T, null | undefined> =>
    x !== null && x !== undefined;

export const assertNever = <T>(value: never, fallback: T): T => {
    console.error('Expected never', value);
    return fallback;
};

export const hasOwnProperty = <T, PropName extends PropertyKey>(
    obj: T,
    prop: PropName
): obj is T & Record<PropName, unknown> => {
    return obj && typeof obj === 'object' && obj.hasOwnProperty(prop);
};
