# src / jquery / index.js
Copyright (c) 2017 Florian Klampfer <https://qwtel.com/>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.


```js

import 'core-js/fn/array/from';

import $ from 'jquery'; // eslint-disable-line import/no-extraneous-dependencies

import { JQueryComponent, defineJQueryComponent } from 'hy-component/src/define-jquery-component';
import { sSetupDOM } from 'hy-component/src/symbols';
import { Set } from 'qd-set';

import { drawerMixin, MIXIN_FEATURE_TESTS } from '../mixin';
import '../style.css';

export const JQUERY_FEATURE_TESTS = new Set([...MIXIN_FEATURE_TESTS]);
JQUERY_FEATURE_TESTS.delete('customevent');

defineJQueryComponent('hy.drawer', class extends drawerMixin(JQueryComponent) {
  [sSetupDOM]($el) {
    const children = $el.children().detach();

    $el
      .append($('<div class="hy-drawer-scrim" />'))
      .append($('<div class="hy-drawer-content" />').append(children));

    return $el;
  }
});
```


