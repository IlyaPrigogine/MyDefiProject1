import {DeployFunction} from 'hardhat-deploy/types';


const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy,read,get,execute} = deployments;
    const {owner} = await getNamedAccounts();

};
export default func;
func.tags = ['Greeter'];
