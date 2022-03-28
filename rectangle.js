// exports.perimeter = (x,y) => 2 * (x + y);
// exports.area = (x, y) => x * y;



// Modify Rectangle Module to use Callbacks and handle errors

// module.exports = (x, y, callback) => {
//     if(x <= 0 || y <= 0){
//         callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`))
//     } else {
//         setTimeout(()=>
//             callback(null,{
//                 perimeter: () => 2 * (x + y),
//                 area: () => x * y
//             }),
//             2000
//         );
//     }
// };

export default (x, y, callback) => {
    if(x <= 0 || y <= 0){
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`))
    } else {
        setTimeout(()=>
            callback(null,{
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};
