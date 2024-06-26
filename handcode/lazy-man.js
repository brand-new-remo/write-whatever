/**
 * 
LazyMan('Tony');
// Hi I am Tony

LazyMan('Tony').sleep(10).eat('lunch');
// Hi I am Tony
// 等待了10秒...
// I am eating lunch

LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
// Hi I am Tony
// I am eating lunch
// 等待了10秒...
// I am eating diner

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
// Hi I am Tony
// 等待了5秒...
// I am eating lunch
// I am eating dinner
// 等待了10秒...
// I am eating junk food

 */

function LazyMan(name) {
    console.log('Hi I am ' + name);
    const obj = {
        sleep (ms){
            new Promise(resolve => setTimeout(resolve, ms * 1000))
            return obj;
        },

        eat(what) {
            Promise.resolve().then(() => {
                console.log('I am eating ' + what);
            })
            return this;
        },

        sleepFirst(ms){

        }
    }

    return obj
}

LazyMan('Tony').eat('lunch').eat('dinner').sleep(3).eat('bre')