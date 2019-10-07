/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { KeycloakEventType } from './shared-types';

/**
 * Structure of an event triggered by Keycloak, contains it's type
 * and arguments (if any).
 */
export interface KeycloakEvent {
  /**
   * Event type as described at {@link KeycloakEventType}.
   */
  type: KeycloakEventType;
  /**
   * Arguments from the keycloak-js event function.
   */
  args?: any;
}
