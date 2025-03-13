export enum ErrorType {
  warning = 'warning',
  danger = 'danger'
}

export interface ErrorInfo {
  errorCode: string;
  container?: string;
  field?: string;
  errorMessage: string;
  status?: number;
  serviceName?: string;
  type?: ErrorType;
}

export function isErrorInfo(arg: any): arg is ErrorInfo {
  return arg && arg.errorMessage !== undefined;
}
