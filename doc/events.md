# Events
Events are dispatched from the root element of the component and are prefixed with the name of the component.
Note that --- to be an idiomatic WebComponent --- all communication form the component back to the outside world occurs via events.

* toc
{:toc}

## `hy-drawer-init`
This event is fired after the component has been initialized.
The current `opened` state is provided in the `detail` field of the event.

jQuery event name
: `init.hy.drawer`

## `hy-drawer-prepare`
This event is fired when there's a tap/click within the [`range`](./options.md#range).
This is when you'd want to set `will-change` CSS properties if you have any animation that move in sync with the drawer
(see [`hy-drawer-move`](#hy-drawer-move)).

jQuery event name
: `prepare.hy.drawer`

## `hy-drawer-slidestart`
This event is fired when the user starts sliding the drawer.
Note that this event does not occur on every touch motion, since the user could also be scrolling the page!

jQuery event name
: `slidestart.hy.drawer`

## `hy-drawer-slideend`
This event is fired when the user stops sliding the drawer, i.e. it is always proceeded by a `slidestart` event.
However, it is fired *before* the drawer starts transitioning towards the next `opened` state.
The next `opened` state is provided in the `detail` field of the event.

**NOTE**: Currently, this event can occur even when there was no prior `slidestart` event.
Specifically, it will occur if the users taps the screen during the animation.
{:.message}

jQuery event name
: `slideend.hy.drawer`

## `hy-drawer-transitioned`
This event is fired after a completed transitioning to the new `opened` state.
The new `opened` state is provided in the `detail` field of the event.

jQuery event name
: `transitioned.hy.drawer`

## `hy-drawer-move`
This event is fired on every frame while the drawer is moving  (both sliding and animations).
The `detail` field of the event is a value between 0 and 1, where
0 means the drawer is fully closed, and 1 means the drawer is fully opened.
You can use this to animate other elements in sync with the drawer.

jQuery event name
: `move.hy.drawer`
