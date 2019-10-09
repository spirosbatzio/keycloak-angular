/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

import { InjectionToken } from '@angular/core';

import { KeycloakAngularOptions } from './core/models/keycloak-angular-options';

/**
 * The [DI token](guide/glossary/#di-token) for keycloak-angular options
 * configuration.
 */
export const KEYCLOAK_ANGULAR_OPTIONS = new InjectionToken<
  KeycloakAngularOptions
>('KEYCLOAK_ANGULAR_OPTIONS');

/**
 * The [DI token](guide/glossary/#di-token) for the keycloak-js instance.
 */
export const KEYCLOAK_INSTANCE = new InjectionToken<Keycloak.KeycloakInstance>(
  'KEYCLOAK_INSTANCE'
);
