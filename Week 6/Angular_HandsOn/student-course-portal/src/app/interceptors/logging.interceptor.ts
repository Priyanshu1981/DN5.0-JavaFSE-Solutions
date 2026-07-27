import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

// Hands-on 8: Functional HttpClient interceptor — logs every outgoing
// request and its response/error, similar in spirit to the API Gateway's
// LogFilter from the Week 4 microservices exercise.
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const started = Date.now();
  console.log(`[HTTP] ${req.method} ${req.url}`);

  return next(req).pipe(
    tap({
      next: () => console.log(`[HTTP] ${req.method} ${req.url} completed in ${Date.now() - started}ms`),
      error: (err) => console.error(`[HTTP] ${req.method} ${req.url} failed:`, err)
    })
  );
};
