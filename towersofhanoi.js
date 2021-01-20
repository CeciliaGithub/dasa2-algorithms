
 function solve_tower_of_hanoi(disk, start, destination, staging) {
     if (disk == 1) {
         // base case of 1 disk, we know how to solve that
         console.log("Move disk 1 from post " + start + " to post " + destination);
     } else {
         // first solve for n - 1 disks
         solve_tower_of_hanoi(disk - 1, start, staging, destination);

         // now move the nth disk
         console.log("Move disk " + disk  + " from post " + start + " to post " +
         destination);

         // now solve for the n-1 disks from post B to post C
         solve_tower_of_hanoi(disk - 1, staging, destination, start);
     }
 }

  // call the function to start solving the puzzle for 7 disks
  solve_tower_of_hanoi(3, "A", "C", "B");
 