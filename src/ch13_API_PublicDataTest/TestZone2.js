//비동기 방식 설명 및
//SetTimeout함수 소개,
//콜백 지옥 모양 소개,
//Promise로 개선하는 부분
//axios 진행하기

//동기 vs 비동기
// 동기 : 순서대로 작업 진행(작업 완료 후 다른작업 수행)
// 비동기 : 여러개 겹쳐서 동시에 작업 진행

// function printHello() {
//   console.log("Hello world!!!");
// }

//setTimeout(콜백함수, 기다리는 시간)
//작업1
//setTimeout(printHello, 3000);
//작업2
//console.log("대기중입니다");

//포인트 : 작업1, 작업2는 순서에 상관없이 같이 실행된다.
// ctrl+alt+n :코드러너 확장팩으로 실행

//==============================================================
//콜백함수 지옥 모양

function decrease(number, callbackFunction) {
  setTimeout(() => {
    const result = number - 1;
    if (callbackFunction) {
      callbackFunction(result);
    }
  }, 1000);
}

//호출
// decrease(0, (result) => {
//   console.log(result);
// });

//콜백지옥 함수
// console.log("작업 시작");
// decrease(0, (result) => {
//   console.log(result);
//   decrease(result, (result) => {
//     console.log(result);
//     decrease(result, (result) => {
//       console.log(result);
//       decrease(result, (result) => {
//         console.log(result);
//         console.log("작업완료");
//       });
//     });
//   });
// });

//promise로 개선(가독성)
function decrease2(number) {
  //resolve : 성공시 수행할 함수
  // reject : 실패시 수행할 함수
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number - 1;
      if (result < 50) {
        const error = new Error("error");
        return reject(error);
      }
      resolve(result);
    }, 1000);
  });
  return promise;
}

//promise
// decrease2(60)
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .then((number) => {
//     console.log(number);
//     return decrease2(number);
//   })
//   .catch((e) => console.log(e));

//비동기식
async function test() {
  try {
    let result = await decrease2(60);
    console.log(result);

    result = await decrease2(result);
    console.log(result);

    result = await decrease2(result);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

//작업1
console.log("작업시작, async  await사용해서 가독성 높이기");
//작업2
test();
