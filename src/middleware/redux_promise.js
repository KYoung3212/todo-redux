export default (store) => (next) =>  async (action) => {

    console.log('Action', action);

    if(!action.payload || !action.payload.then){ 
        return next(action);
     }

     const response = await action.payload;

     const newAction = {
         ...action,
         payload: response
     };

     store.dispatch(newAction);

    }




// export default store => next => action => {
//     if(!action.payload || !action.payload.then) {
//         return next(action);;
//     }
//     const resp = await action.payload;
//         const newAction = {
//             ...action,
//             payload: resp
//         };
//         store.dispatch(newAction);
//     };
    

// action.payload.then(resp => {
//     const newAction = {
//         ...action,
//         payload: resp
//     };
//     store.dispatch(newAction);
// });
// return action.payload;
// }



// function (store) {
//     return function (next){
//         return function(action){

//         }
//     }
// }