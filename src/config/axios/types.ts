export interface ErrorResponse<Details = undefined> {
  errorType: string;
  message: string;
  details: Details;
}

export interface ValidationErrorDetails {
  property: string;
  value: string;
  messages: string[];
}

export type ValidationErrorResponse = ErrorResponse<ValidationErrorDetails[]>;
