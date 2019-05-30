import { Observable } from "rxjs";

var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        observer.next('What are you doing?');
        setInterval(() => {
            observer.next('I am good')
        }, 2000);
    } catch (err) {
        observer.error(err)
    }
});

var subscription = observable.subscribe(
    (x:any) => addItem(x),
    (e:any) => addItem(e),
    () => addItem('Completed')
);

setTimeout(()=>{
    subscription.unsubscribe();
    console.log('Subscription ended');
}, 6001);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}