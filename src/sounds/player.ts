import createCharm from "./charm";
import boop from "./boop";

export default () => ({ charm: createCharm(boop) });
