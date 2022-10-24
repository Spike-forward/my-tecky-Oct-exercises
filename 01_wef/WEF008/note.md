## Game of Life Project ##
1. Current Board
2. Next Board - next generation situation
   <h5><b>
3. array of array (2D array);
4. Init function </b>
5. highly recommend never comment source code, cuz u can git later on, will be affected your job performance;
6. 
## funcation ##
   1. Rect ()
   2.generate ()
    [] generation = new generation;

3. Why update next, not current? because update self, no move
   because we need to current info to generate next generation, if mixed with next generation info in current one will be affected between current and next generation.

4. generate current situation first
5. then swap with next generation;
5. framerate 35, you can tune framerate by yourself. control drawing frequency

## p5 function ##
1. mouseDrag()
2. createslider()
3. add checking when the snake touch the edge, will return;
4. Math.floor and floor here is the same;
5. you can draw more after the mouse drag
6. mousepress & mouserelease p5 function(give no loop inside)
7. no loop means the loop finished;
8. Then control the speed of the pattern;
9. Rlease pattern finish then, speed(framerate use variable to control, use slider control variable, how to createslider function)
10. Different pattern will be shown.
11. Add reset pattern, static pattern, repeating pattern, movement pattern, 
12. Allow user to input 
13. use resize mechanism, according the pattern to adjust as well;
14. 