/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

/**
 * HTTP Methods to be used for the adapter configuration.
 */
export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';

/**
 * Credentials type. Should be used when The Access Type is configured as Confidential, as
 * mentioned in the keycloak's documentation:
 * http://www.keycloak.org/docs/latest/securing_apps/index.html#_configuring_a_client_for_use_with_client_registration_cli
 */
export type Credentials = {
  /**
   * Secret or Signed JWT. Please, caution where you store this sensitive information!
   */
  secret: string;
};

/**
 * Keycloak event types, as described at the keycloak-js documentation:
 * https://www.keycloak.org/docs/latest/securing_apps/index.html#callback-events
 */
export type KeycloakEventType =
  | 'OnAuthError'
  | 'OnAuthLogout'
  | 'OnAuthRefreshError'
  | 'OnAuthRefreshSuccess'
  | 'OnAuthSuccess'
  | 'OnReady'
  | 'OnTokenExpired';

/**
 * ExcludedUrl type may be used to specify the url and the HTTP method that
 * should not be intercepted by the KeycloakBearerInterceptor.
 *
 * Example:
 * const excludedUrl: ExcludedUrl[] = [
 *  {
 *    url: 'reports/public'
 *    httpMethods: ['GET']
 *  }
 * ]
 *
 * In the example above for URL reports/public and HTTP Method GET the
 * bearer will not be automatically added.
 *
 * If the url is informed but httpMethod is undefined, then the bearer
 * will not be added for all HTTP Methods.
 */
export type UrlMatcher = {
  url: string;
  httpMethods?: HttpMethods[];
};
