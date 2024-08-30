/* Build a function that, given an array of objects, determines if the object key value of “DateEntered” is a valid date, 
if the date is before or after today, and if the date has already been evaluated by the function. 
1. [{id:1,DateEntered:’1/1/2023’},{id:2,DateEntered:’4/1/2023’}{id:3,DateEntered:’hell o’},{id:4,DateEntered:’1/1/2023’] 
1. True, before, New 
2. True, after, New 
3. False, False, False 
4. True, before, Old
*/

soluction = (ar) => 
{
    var today = new Date;
    var list = new Map();
    for(var x = o; x<ar.length;x++)
    {
        var dt = new Date(ar[x].DataEntered);
        var valid = IsValid(dt.toString()) ;
        console.log(valid);
        var res =  list.get(ar[x].DataEntered) ? "New" :"OLD";
        list.set(ar[x].DataEntered) = dt;
        if (dt > today)
        {
            console.log("before");
        }
        else
        {
            console.log("after");
        }

        console.log(res);
        // list.forEach(el, (){
        //     if (dt.getDate() == el.getDate())
        //     {
        //         res = "Old";
        //     }
        // console.log(res);

        });

    }
}