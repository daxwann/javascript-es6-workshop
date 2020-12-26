// we'll be importing stuff from './helpers/module-a'

// 1. how could we import a module without doing
// anything with what we get back?
// import './helpers/module-a'

// 2. how could we import the default export?
// import something from './helpers/module-a';

// 3. how could we import `theAnswer` and
// `theQuestion` from './helpers/module-a'?
// import { theAnswer, theQuestion } from './helpers/module-a'

// 4. how could we import `theAnswer` and rename it
// to `fortyTwo`?
// import { theAnswer as fourtyTwo } from './helpers/module-a';

// 5. how could we import `add` (default) and
// `theQuestion` with a single import declaration?
// import add, { theQuestion } from './helpers/module-a'

// 6. how could we avoid the default alias when
// importing `add` and `theQuestion`?
// import { default as add } from './helpers/module-a';

// 7. how could we import everything onto a single
// object called `allTheThings`
import * as allTheThings from './helpers/module-a';

/*







SOLUTIONS ARE BELOW









 */

// But they're commented out because JavaScript

// 1.
// import './helpers/module-a'

// 2.
// import add from './helpers/module-a'

// 3.
// import {theAnswer} from './helpers/module-a'

// 4.
// import {theAnswer as fourtyTwo} from './helpers/module-a'

// 5.
// import {default as add, theQuestion} from './helpers/module-a'

// 6.
// import add, {theQuestion} from './helpers/module-a'

// 7.
// import * as allTheThings from './helpers/module-a'
