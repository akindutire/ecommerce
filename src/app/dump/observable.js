// const nu = Observable.create((Observer: Observer<string>) => {
// 			setTimeout(() => {
// 				Observer.next('first package');
// 			}, 2000);

// 			setTimeout(() => {
// 				Observer.next('second package');
// 			}, 4000);

// 			setTimeout(() => {
// 				Observer.error('donnt work');
// 			}, 5000);
// 		});

// 		nu.subscribe(
// 			(data: string) => {
// 				console.log(data);
// 			},
// 			(error: string) => {
// 				console.log(error);
// 			},
// 			() => {
// 				console.log('complete');
// 			}
// 		);