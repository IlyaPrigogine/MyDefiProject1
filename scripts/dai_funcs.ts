import {deployments, getNamedAccounts} from 'hardhat';

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    /* code of Greeter func*/
    // console.log(`BEFORE ${await read('Greeter','greet')}`);
    // await execute('Greeter',{from: owner}, 'setGreeting', 'A new greeting');
    // console.log(`AFTER: ${await read('Greeter','greet')}`);

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
