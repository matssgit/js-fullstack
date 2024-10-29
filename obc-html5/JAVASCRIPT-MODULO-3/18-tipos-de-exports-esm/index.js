import { inline } from "./inline.js";
import defaultInline from "./inline.js";
import exportDefault, { group } from "./non-inline.js";

inline();
defaultInline();

group();
exportDefault();
