import fs from 'fs'
import {yarg} from "./config/plugins/args.plugin";

// console.log(yarg)
// como lo hice yo
// function generateTable5(): string {
//     let table = "=======================\n"+"Tabla del 5\n" + "=======================\n";
//     for (let i = 1; i <= 10; i++) {
//         table += `5 x ${i} = ${5 * i}\n`;
//     }
//     return table;
// }

// const filePath = 'outputs/tabla-5.txt';
// const table5 = generateTable5();

// fs.writeFileSync(filePath, table5, 'utf-8');

// const data = fs.readFileSync('outputs/tabla-5.txt', 'utf-8');
// console.log(data)

//como lo hizo el profe
const {b:base, l:limit, s:show} = yarg
let outputMessage = '';
const headerMessage = `=======================\nTabla del ${base}\n=======================\n`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;


if (show) {
    console.log(outputMessage);

}
const outPuthPath = `outputs`;


fs.mkdirSync(outPuthPath, { recursive: true });

fs.writeFileSync(`${outPuthPath}/tabla-${base}.txt`, outputMessage, 'utf-8');
console.log('File created')

// (async () => {
//     await main();
// })();


// async function main(){
//     const {b, l, s} = yarg

//     if (s) {
//         let outputMessage = '';
//         const headerMessage = `=======================\nTabla del ${b}\n=======================\n`;

//         for (let i = 1; i <= l; i++) {
//             outputMessage += `${b} x ${i} = ${b * i}\n`;
//         }

//         outputMessage = headerMessage + outputMessage;
//         console.log(outputMessage);
//     }
// }