// import { Observable } from "rxjs/Observable";
// import { merge } from 'rxjs/observable/merge';
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/pluck";
// import { from } from "rxjs";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs";
import "rxjs/add/operator/skipUntil";

var observable1 = Observable.create((data:any) => {
    var i = 1
    setInterval(() => {
        data.next(i++)
    }, 1000)
})

var observable2 = new Subject;

observable2.subscribe(addItem);

setTimeout(() => {
    observable2.next('Hey!')
}, 3000)

var newObs = observable1.skipUntil(observable2)

newObs.subscribe((x:any) => addItem(x));

// var observable = Observable.create((observer:any) => {
//     observer.next('Hey guys!')
// })

// var observable2 = Observable.create((observer:any) => {
//     observer.next('How is it going?')
// })

// // We're using our merge operator here:
// var newObs = merge(observable, observable2);

// newObs.subscribe((x:any) => addItem(x));


    // Observable.create((observer:any) => {
    //     observer.next('Hey guys!')
    // })
    // .map((val:any) => val.toUpperCase())
    // .subscribe((x:any) => addItem(x));

//     from([
//         { first: 'Gary', last: 'Simon', age: '34'},
//         { first: 'Jane', last: 'Simon', age: '34'},
//         { first: 'John', last: 'Simon', age: '34'},
// ])
// .pluck('first')
// .subscribe((x:any) => addItem(x));

// Our handy function for showing the values:
function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}