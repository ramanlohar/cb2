// function createDiv(valuea) {
//   var newDiv = document.createElement("div");

//   newDiv.id = "dynamicDiv";
//   newDiv.className = "dynamicDivClass";
//   newDiv.textContent = valuea;
//   document.body.appendChild(newDiv);
// }

// let array5 = [];

// for (let i = 0; i < array1.length; i++) {
//   for (let j = 0; j < array3.length; j++) {
//     if (array1[i] === array3[j]) {
//       let praptiya;

//       for (let k = 0; k < array2.length; k++) {
//         for (let l = 0; l < array4.length; l++) {
//           if (array2[k].r_Bajt === array4[l].r_Bajt) {
//             praptiya = k;
//             break; // Exit the loop once the index is found
//           }
//         }
//       }

//       let arv2 = array2[praptiya];
//       let arv4 = array4[praptiya];

//       var finaldata = {
//         bjat: array1[i],
//         ABtotal: arv2.Btotalvalue,
//         ANtotal: arv2.Ntotalvalue,
//         VBtotal: arv4.Btotalvalue,
//         VNtotal: arv4.Ntotalvalue,
//         yBtotal: arv2.Btotalvalue - arv4.Btotalvalue,
//         yNtotal: arv2.Ntotalvalue - arv4.Ntotalvalue,
//       };

//       array5.push(finaldata);
//       break; // Exit the loop once the match is found
//     }
//   }
// }


// /////////////

// // let array5 = [];

// // // for (let index = 0; index <= rbFormCount; index++) {
// // //   let arv2 = array2[index];
// // //   let arv4 = array4[index];
// //   let range;
// //   let available = false;

// //   if (array2.length >= array4.length) {
// //     range = array2.length;
// //   } else {
// //     range = array4.length;
// //   }

// //   for (let i = 0; i < range; i++) {
// //     for (let j = 0; j < range; j++) {
// //       if (array2[i] == array4[j]) {
// //         available = true;
// //         availableindexat = index;
// //         break;
// //       }
// //       if (available) {
// //         // Update the values in the found object
// //         array2[availableindexat]["Btotalvalue"] -= array4[availableindexat]["Btotalvalue"] ;
// //         array2[availableindexat]["Ntotalvalue"] -= array4[availableindexat]["Ntotalvalue"] ;

// //         console.log(availableindexat + " done");
// //       } else {
// //         var finaldata = {
// //             ABtotal: 0,
// //             ANtotal: 0,
// //             VBtotal: array4[availableindexat]["Btotalvalue"],
// //             VNtotal: array4[availableindexat]["Ntotalvalue"],
// //             yBtotal: -(array4[availableindexat]["Btotalvalue"]),
// //             yNtotal: -(array4[availableindexat]["Ntotalvalue"]),
// //           };

// //           array5.push(finaldata);
// //       }
// //     }
// //   }
