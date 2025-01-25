const fs=require("fs");
function abhi(fileName)
{

    fs.readFile(fileName, "utf-8" ,function(err,data)
    {
        let count=0;
    for(let i=0;i<data.length;i++)
    {
        if(data[i]===" ")
        {
            count++;
        }
    }
    console.log(count+1);
    })
}
abhi("a.txt");