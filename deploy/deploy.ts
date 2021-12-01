import {DeployFunction} from 'hardhat-deploy/types';


const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy,read,get,execute} = deployments;
    const {owner} = await getNamedAccounts();

    const BUSD = await deploy('BUSD', {
        from: owner,
        args: [],
        log: true,
    });

    const MyDefiProject = await deploy('MyDefiProject', {
        from: owner,
        args: [BUSD.address],
        log: true,
    });

};
export default func;
func.tags = ['Greeter'];
