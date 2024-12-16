import * as lodash from "lodash";
let xwing = {
    name: "X-wing",
    pilot: "Luke Skywalker",
    speed: 50,
    weapons: 4,
};
console.log(lodash.camelCase(xwing.pilot));
