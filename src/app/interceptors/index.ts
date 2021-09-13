import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseUrlInterceptor } from './http.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true }
];
