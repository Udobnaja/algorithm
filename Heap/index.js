//Not Working Yet

/// / class Heap {
//     constructor() {
//         this.data = [];
//         this.index = 0;
//     }
//
//     compare(a, b) {
//         if (a < b) {
//             return - 1
//         }
//
//         if (a > b) {
//             return 1;
//         }
//
//         return 0;
//     }
//
//     getLeftChildIndex(index) {
//         return (2 * this.index) + 1;
//     }
//
//     getRightChildIndex(index) {
//         return (2 * this.index) + 2;
//     }
//
//     parentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }
//
//     siftUp(index) {
//         let parent = this.parentIndex(index);
//
//         while (index > 0 && this.compare(this.data[parent], this.data[index]) > 0) {
//             const p = this.data[parent];
//             this.data[parent] = this.data[index];
//             this.data[index] = p;
//         }
//     }
//
//     add(element) {
//         // забиваем, что элемент может быть пустым
//         this.data.push(element);
//         this.siftUp(this.data.length - 1);
//     }
//
// }
//
//
// const heap = new Heap();
//
// heap.add(100);
// heap.add(10);
// heap.add(1);
// heap.add(33);
// heap.add(2);
// heap.add(5);
//
// console.log(heap);