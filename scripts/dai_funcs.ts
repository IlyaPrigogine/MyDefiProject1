import {deployments, getNamedAccounts} from 'hardhat';
import {formatEther, parseEther} from "ethers/lib/utils";
import {ethers} from "ethers";

const {execute, read} = deployments;

async function main() {
    const {deploy, execute, get, read} = deployments;
    const {owner} = await getNamedAccounts();

    const MyDefiProject = await get("MyDefiProject");
    const BUSD = await get('BUSD');

    const busd_owner = await read('BUSD','balanceOf',owner);
    console.log(`busd.balanceOf(owner): ${formatEther(busd_owner)}`);

    await execute('BUSD',{from: owner, log: true}, 'approve',MyDefiProject.address,parseEther('10000'));
    await execute('MyDefiProject', {from: owner, log: true}, 'foo', ethers.constants.AddressZero,parseEther('1.23'));

    console.log(`busd.balanceOf(owner): ${formatEther(await read('BUSD','balanceOf',owner))}`);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
