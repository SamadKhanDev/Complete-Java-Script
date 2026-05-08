// ---------> JavaScript Execution Context (Complete Concept)

/*

JavaScript runs program in 2 main phases inside:

➡ Global Execution Context (GEC)
(Automatically created when program starts)

--------------------------------------------------

STEP 1: Global Execution Context (GEC)
--------------------------------------
- Created before any code runs
- Contains:
  - global variables
  - global functions
  - "this"

✔ Only ONE GEC exists per program

--------------------------------------------------

STEP 2: Memory Creation Phase (Creation Phase)
---------------------------------------------
(JS scans code BEFORE executing it)

✔ Variables:
   var a → undefined

✔ Functions:
   function stored as full definition

✔ Memory is allocated but NO execution yet

Example:
var a = 10;
function test() {}

Memory Phase:
a → undefined
test → function definition

--------------------------------------------------

STEP 3: Execution Phase
-----------------------
(JS runs code line by line)

✔ Variables get actual values
   a = 10

✔ Functions are NOT executed here directly
   only when called

Example:
a = 10

--------------------------------------------------

STEP 4: Function Call → New Execution Context
---------------------------------------------
When a function is called:

✔ A NEW Function Execution Context is created
✔ It goes inside Call Stack

Inside this context:

1. Memory Phase (for function)
   - parameters → undefined
   - variables → undefined

2. Execution Phase (function runs)

Example:
function test() {
  var x = 5;
}
test();

→ new execution context created for test()

--------------------------------------------------

STEP 5: Return Phase
--------------------
- Function returns value (if any)
- Returned value goes back to calling context (GEC or another function)
- Function execution context is removed from Call Stack

Example:
return 5 → goes back to GEC

--------------------------------------------------

FINAL FLOW SUMMARY
------------------

1. GEC is created
2. Memory Phase runs
   - variables = undefined
   - functions stored
3. Execution Phase runs
   - values assigned
   - functions called
4. Function call creates new Execution Context
5. After execution → context deleted
6. Control returns to GEC

--------------------------------------------------

IMPORTANT POINTS:
------------------
✔ JavaScript is single-threaded
✔ One Call Stack only
✔ Each function call = new execution context
✔ Execution is line-by-line inside GEC

*/