/**
 * Enumeration of different value types used in Plorth.
 */
export enum PlorthValueType {
  ARRAY = "array",
  BOOLEAN = "boolean",
  ERROR = "error",
  NULL = "null",
  NUMBER = "number",
  OBJECT = "object",
  QUOTE = "quote",
  STRING = "string",
  SYMBOL = "symbol",
  WORD = "word"
}

/**
 * Enumeration of different error codes used in Plorth.
 */
export enum PlorthErrorCode {
  /** Syntax error. */
  SYNTAX = 1,
  /** Reference error. */
  REFERENCE = 2,
  /** Type error. */
  TYPE = 3,
  /** Value error. */
  VALUE = 4,
  /** Range error. */
  RANGE = 5,
  /** Import error. */
  IMPORT = 6,
  /** Unknown error. */
  UNKNOWN = 100
}

export interface PlorthValue {
  type: PlorthValueType;
  start?: number;
  end?: number;
}

export interface PlorthError extends PlorthValue {
  type: PlorthValueType.ERROR;
  code: PlorthErrorCode;
  message?: string;
}

export interface PlorthBoolean extends PlorthValue {
  type: PlorthValueType.BOOLEAN;
  value: boolean;
}

export interface PlorthNumber extends PlorthValue {
  type: PlorthValueType.NUMBER;
  value: number;
}

export interface PlorthString extends PlorthValue {
  type: PlorthValueType.STRING;
  value: string;
}

export interface PlorthArray extends PlorthValue {
  type: PlorthValueType.ARRAY;
  elements: Array<PlorthValue | null>;
}

export interface PlorthObject extends PlorthValue {
  type: PlorthValueType.OBJECT;
  properties: { [key: string]: PlorthValue | null };
}

export interface PlorthError extends PlorthValue {
  type: PlorthValueType.ERROR;
  code: PlorthErrorCode;
  message?: string;
}

export interface PlorthSymbol extends PlorthValue {
  type: PlorthValueType.SYMBOL;
  id: string;
}

export interface PlorthQuote extends PlorthValue {
  type: PlorthValueType.QUOTE;
  values: Array<PlorthValue | null>;
}

export interface PlorthWord extends PlorthValue {
  type: PlorthValueType.WORD;
  symbol: PlorthSymbol;
  quote: PlorthQuote;
}
