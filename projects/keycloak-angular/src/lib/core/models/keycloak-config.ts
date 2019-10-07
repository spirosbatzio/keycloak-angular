/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { Credentials } from './shared-types';

/**
 * This is the interface containing the attributes for the keycloak configuration in case
 * you don't specify a keycloak.json file in your project.
 */
export interface KeycloakConfig {
  /**
   * Keycloak server url, for example: http://localhost:8080/auth
   */
  url: string;
  /**
   * Realm name, ie.: myrealm
   */
  realm: string;
  /**
   * Client ID, ie.: myapp
   */
  clientId: string;
  /**
   * The credentials object contains the secret property that should be used depending on
   * which flow and access type was chosen.
   */
  credentials?: Credentials;
  /**
   * Any eventual new attribute from Keycloak-js should be used by this parameter.
   */
  [attributeName: string]: any;
}
