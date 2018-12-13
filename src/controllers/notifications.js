const express = require('express')
const router = express.Router()
const { Expo } = require('expo-server-sdk')
let expo = new Expo();




// setInterval(() => {
//     console.log('executou')
//     let messages = [];
//     let pushToken = 'ExponentPushToken[4CKQHUKMmZSgtyLm5jgw-V]'
//         if (!Expo.isExpoPushToken(pushToken)) {
//           console.error(`Push token ${pushToken} is not a valid Expo push token`);
//         }

//         messages.push({
//           to: pushToken,
//           sound: 'default',
//           body: 'teste2',
//           data: { withSome: 'data' },
//         })
      
//       let chunks = expo.chunkPushNotifications(messages);
//       let tickets = [];
//       (async () => {

//         for (let chunk of chunks) {
//           try {
//             let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
//             console.log(ticketChunk);
//             tickets.push(...ticketChunk);
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       })();
      
//       let receiptIds = [];
//       for (let ticket of tickets) {
//         if (ticket.id) {
//           receiptIds.push(ticket.id);
//         }
//       }

//       let receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
//       (async () => {
//         for (let chunk of receiptIdChunks) {
//           try {
//             let receipts = await expo.getPushNotificationReceiptsAsync(chunk);
//             console.log(receipts);
//             for (let receipt of receipts) {
//               if (receipt.status === 'ok') {
              
//               } else if (receipt.status === 'error') {
//                 console.error(`There was an error sending a notification: ${receipt.message}`);
//                 if (receipt.details && receipt.details.error) {
//                   console.error(`The error code is ${receipt.details.error}`);
//                 }
//               }
//             }
//           } catch (error) {
//             console.error(error);
//           }
//         }
//       })()
    
// }, 5000);

module.exports = app => app.use('/notification',router)