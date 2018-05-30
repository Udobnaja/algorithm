const DIRECTION = {
  LEFT: 0,
  TOP: 1,
  BOTTOM: 2,
  RIGHT: 3
};

const DIRECTION_MAP = {
  [DIRECTION.LEFT]: DIRECTION.TOP,
  [DIRECTION.TOP]: DIRECTION.BOTTOM,
  [DIRECTION.BOTTOM]: DIRECTION.RIGHT,
  [DIRECTION.RIGHT]: DIRECTION.LEFT
};

const getSpiral = (num) => {
    const result = [];
   if (num <= 0) {
       return result;
   }

   const arr = Array.from(new Array(num*num), (el, i) => ++i);
   let direction = DIRECTION.LEFT;

   let until = num;
   let stepper = num;
   let iteration = 1;
   let index = 0;
   let i = 0;

   while (until > 0){
       result[index] = arr[i];

       if (iteration % until === 0) {
           if (direction === DIRECTION.LEFT){
               until--;
               stepper--;
           }

           if (direction === DIRECTION.BOTTOM){
               until--;
               stepper = num;
           }

           direction = DIRECTION_MAP[direction];

           iteration = 0;
       }

       switch (direction) {
           case DIRECTION.LEFT:
               index++;
               break;
           case DIRECTION.TOP:
               index += stepper + 1;
               break;
           case DIRECTION.BOTTOM:
               index--;
               break;
           case DIRECTION.RIGHT:
               index -= stepper ;
               break;
           default:
               index += stepper + 1;
       }

        iteration++;
        i++;
   }

   return result.reduce((acc, el, i) => {
       const index = Math.floor(i /num);
       if (!acc[index]) {
           acc[index] = [];
       }

       acc[index].push(el);

       return acc;
   },[]);
};

console.log(getSpiral(4));
console.log(getSpiral(5));
console.log(getSpiral(2));
console.log(getSpiral(1));