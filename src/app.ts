


import { yarg} from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";


// console.log(process.argv)
// console.log(yarg.b)

(async () => {
    await main();
})();

async function main(){
    const {b:base, l:limit, s:show, n:name, d:destination} = yarg;
    // console.log(yarg)
    
    ServerApp.run({ base, limit, show, name, destination })
}