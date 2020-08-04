
Effortless technique to build components that works across frameworks.


## Ideas looked out

- [x] Need a simple view layer that responds to data - ReactJS. Because angular is heavy for head, jquerymobile lacked something.
- [x] An atomic, scalable, composable system to build pages and interactive items - Found the concept of components and it lacked message passing.
- [x] A standard for components - None. Disappointment, anger.
- [x] Message passing model for components - took inspiration of browser event model and applied on component model. Excitement.
- [x] A transpiler that can work in browser - babel-core. Happy.
- [x] An execution context within browser context - eval - double happy.
- [x] Need to choose a syntax for component - React class component - slick. Message passing from parent to child - use state and props. Message passing from child to parent - Pass a callback in prop. Simple.
- [x] Requirements to components - Acceptance criteria in gherkins to component and component variants as sub tree. Learnt a lot here, visually different state is a variant, thats just, css. javascript does the state transistion via events, events are bound to elements and the dots connected very well. But, touching requirement is not fun. bye bye to automated component coverage. Coverages kill fun. and not so much puzzle for head.
- [x] Need a syntax to embed a child component - Simple with reactJS and JSX. Put the component name in form of tag - funny and confident as concept gains strength as child component now resembles an element with publishable events. More confidence as core concept remains strong.
- [x] Enough of thinking and drawing sketches. Its not real unless its taken out.

## Experiments

- [x] Put Component markup, style, state as inputs and call it an Editor - Fun
- [x] Patch them together and call it a Component string generator - double Fun
- [x] Run Component string through babel transpiler. Pass it to eval and call it a component evaluator - Tough times. but had a good kick.
- [x] Component renderer - Edgy idea. A component renderer on screen with editable input on screen is flawless. So much tooling can be built on top.
- [x] Component with dynamic data - Thrilling. on click of a button, change the data shown on screen.
- [x] Component with dynamic styling - hmm. About this. it includes css. finished it using style object and classes. Snapped out of this as quick as possible.
- [x] Movable, collapsable panels for each purpose - inspired by gimp, adobe, game builder products, but not usable. Switched to plain panels apearing from sides. - Not interesting. Bad for Head
- [x] Component to embed child component - This was something which worked just like that. - More confidence to do more stuffs.
- [x] Component to alter child component's initial state - Figured out. A parent state should decide child's data so put the child's state as an object in parent's state. If array is empty don't render, else render. this also helped to render lists. one stone, two mangoes. 
- [x] Component to subscribe to child's event. Make a child component's event publishable. done. It was fruitful only when I played with it, not while coding.
- [x] More components to mange - Need a folder management and component management - Created an explorer. Needed feature.
- [x] Need to load images - Created Assets.
- [x] Need to track history - Did, but didnt complete. History can be faked. 
- [x] Lets build a ux design tool using this - Very bad move. but made conditional multiple publish from a reducer which is a necessary concept. - Lesson learnt. 
- [x] Component drag and drop builder - bad experience. Moving mouse on top of a rendered component to detect parent child div, and drop logic is not worth.   - Not intersting. Bad for head.
- [x] At this point I have realised the fun faded. No more helping the community but it will hit back. So I thought I'll discontinue this. Two days break and realised there is more experiments to do.

## Experiments to watchout and not chase

- [ ] Generate code for svelte, vue, angular - but wont do. Its the same technique of code generation and does not bring any joy.
- [ ] Generate a boiler plate for backend - but wont do. DOM API is good enough to play with browsers. AJAX API, or any other API does the same thing.
- [ ] Build ux tool - Nope. not at all interesting
- [ ] Integrate ux tool within the ui-editor and provide immediate editing and design/ style changes to respond to the client's requirement. No chance
- [ ] Closely watch the browser's API updates and convert them in form of configurable interfaces to speed up fancy things - Jinxed.

## Experiments to chase
- [ ] Just put this out.
- [ ] Provide help to somebody else solving the same problem. Not for closed commercial product, but for the open community.
- [ ] SNAP OUT FROM FRONT END CODING. Its not interesting anymore.
- [ ] SNAP OUT. FRAMEWORK EXPERIEMENTS STARTED BORING.
- [ ] SNAP OUT. WEB DEVELOPMENT problem is not interesting either at front end / backend.
- [ ] SNAP ON - Neural networks - Nope not yet. Concept of artificial neuron is fundamentally flawed and the entire communnity is a pyramid on a tip. 
- [ ] SNAP on - AI system design - hmm, started a repo with one design. Good.
- [ ] Hope this is the last commit. Stop joking around. 

You can contact me https://twitter.com/VetrivelShanmu3 for any questions, I'll be glad to help.

