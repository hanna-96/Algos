/*
Store the alredy booked events in one array
Store overlapping events in another array
For each new potential booking check:
-if there are already overlaping bookings that overlap with current one=> if so return true
- if no loop through already booked events and check if there is any prev booking that overlaps with the current one
-if so => push it to the overlaping array with the updated start and end time and still ADD it to events array

*/
var MyCalendarTwo = function () {
    this.events = [];
    this.overlaping = [];
  };
  
  MyCalendarTwo.prototype.book = function (start, end) {
    //check if current potential booking overlaps with excisting ones
    for (const [prevStart, prevEnd] of this.overlaping) {
      if (start < prevEnd && end > prevStart) {
        return false;
      }
    }
    for (const [prevStart, prevEnd] of this.events) {
      if (start < prevEnd && end > prevStart) {
        this.overlaping.push([
          Math.max(start, prevStart),
          Math.min(end, prevEnd),
        ]); // ???
      }
    }
    this.events.push([start, end]);
    return true;
    //solution 2 using hash map
    //      this.events[start] = (this.events[start] || 0) + 1;
    //     this.events[end] = (this.events[end] || 0) - 1;
    //     // console.log('map',this.events)
  
    //     let activeMeetings = 0;
    //     for(let time in this.events){
    //         activeMeetings+=this.events[time];
    //         if(activeMeetings >= 3){
    //             this.events[start]--;
    //             this.events[end] ++;
    //             return false;
    //         }
    //     }
    //     return true;
  };
  