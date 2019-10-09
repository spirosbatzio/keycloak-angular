/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { ModuleWithProviders, NgModule } from '@angular/core';

import { Keycloak } from './keycloak-js-exports';
import {
  KEYCLOAK_ANGULAR_OPTIONS,
  KEYCLOAK_INSTANCE
} from './injection-tokens';
import { KeycloakAngularOptions } from './core/models/keycloak-angular-options';

/**
 * @description
 *
 * TODO:
 */
@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class KeycloakAngularModule {
  /**
   * Creates and configures the keycloak angular module with...
   *
   * @param config An `KeycloakConfig` configuration object that contains initialization
   * for keycloak-js adapter and keycloak-angular library.
   * @return The new keycloak-angular module.
   */
  static forRoot(
    options: KeycloakAngularOptions
  ): ModuleWithProviders<KeycloakAngularModule> {
    return {
      ngModule: KeycloakAngularModule,
      providers: [
        { provide: KEYCLOAK_ANGULAR_OPTIONS, useValue: options },
        {
          provide: KEYCLOAK_INSTANCE,
          useValue: createKeycloakInstance(options)
        }
      ]
    };
  }
  /**
   * Creates and configures the keycloak angular module with...
   *
   * @param config An `KeycloakConfig` configuration object that contains initialization
   * for keycloak-js adapter and keycloak-angular library.
   * @return The new keycloak-angular module.
   */
  static forChild(
    options: KeycloakAngularOptions
  ): ModuleWithProviders<KeycloakAngularModule> {
    return {
      ngModule: KeycloakAngularModule,
      providers: [
        { provide: KEYCLOAK_ANGULAR_OPTIONS, useValue: options },
        {
          provide: KEYCLOAK_INSTANCE,
          useValue: createKeycloakInstance(options)
        }
      ]
    };
  }
}

/**
 * Creates de keycloak instance using the specificied options
 * @param config An ... TODO:
 */
export function createKeycloakInstance({
  config
}: KeycloakAngularOptions): Keycloak.KeycloakInstance {
  return Keycloak(config);
}
