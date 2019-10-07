/**
 * @license
 * Copyright Mauricio Gemelli Vigolo and contributors.
 *
 * Use of this source code is governed by a MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/keycloak-angular/LICENSE
 */

// Workaround for rollup library as pointed out on issue #1267 (https://github.com/rollup/rollup/issues/1267).
import * as _Keycloak from 'keycloak-js';

export const Keycloak = _Keycloak;
