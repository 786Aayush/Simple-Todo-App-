let todo=[];

while (true)
{


    let req=prompt("please enter your request");

    console.log(req);
    if(req=="quit")
    {
        console.log("quitting app");
        break;
    }

    if (req=="list")
    {
        console.log("--------------");
        for(let i=0;i<todo.length;i++)
        {
            for (let j=0;j<todo[i].length;j++)
            {
                console.log(todo[i][j]);
            }
        }
    }

    else if (req=="add")
    {
       let task= prompt("please enter the task you want to add");
       todo.push(task);

       console.log("task added ");

       console.log("------------");

    }

    else if (req=="delete")
    {
        let index=prompt("please enter the task index ");
        todo.splice(index,1);

        console.log("Task deleted");
    }
    else 
    {
        console.log("Wrong Request");
    }
}