// # src / vanilla / index.js
// Copyright (c) 2017 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import 'core-js/fn/array/from';

import { VanillaComponent } from 'hy-component/src/vanilla';
import { sSetupDOM } from 'hy-component/src/symbols';

import { createElement } from 'create-element-extended/library';

import { drawerMixin, MIXIN_FEATURE_TESTS } from '../mixin';
import '../style.css';

export const VANILLA_FEATURE_TESTS = MIXIN_FEATURE_TESTS;

export class Drawer extends drawerMixin(VanillaComponent) {
  [sSetupDOM](el) {
    if (!el) throw Error('No element provided');

    const df = new DocumentFragment();
    df.appendChild(createElement('div', { class: 'hy-drawer-scrim' }));
    df.appendChild(createElement('div', { class: 'hy-drawer-content' }, el.children));

    el.appendChild(df);

    return el;
  }
}
