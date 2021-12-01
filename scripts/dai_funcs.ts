import {deployments, getNamedAccounts} from 'hardhat';

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    // // read
    // const supply = await read('Dai', 'totalSupply');
    // console.log("Dai totalSupply:", supply.toString());

    console.log(`${await read('Greeter','greet')}`);

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
