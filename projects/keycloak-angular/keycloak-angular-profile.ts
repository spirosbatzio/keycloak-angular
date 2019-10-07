/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { Keycloak } from './src/lib/keycloak-js-exports';

export interface KeycloakAngularProfile extends Keycloak.KeycloakProfile {
  attributes: any;
}
