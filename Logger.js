export default function Logger(reducer){
    return (prestate,action,args) => {
        console.group(action)
        console.log('preState:',prestate)
        console.log('Action Arguments:',args)

        const nextState = reducer(prestate,action,args);
        console.log('nextState:',nextState)
        console.groupEnd();
        return nextState;
    }
}