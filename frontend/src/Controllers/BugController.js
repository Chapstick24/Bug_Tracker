import bug from "../Models/bugModel";

export function retrieveBugs(){
    let data = [];

    data.push(new bug({
        _id:1234567,
        name:"Crash on Load",
        details:"Crashes after three seconds ",
        steps:"Open Application and it will crash",
        version: "V2.0",
        assigned: "Joey bugs",
        priority: 1,
        time: "1:33",
    }))
    data.push(new bug({
        _id:1234567,
        name:"Won't Load",
        details:"Crashes after three seconds ",
        steps:"Open Application and it will crash",
        version: "V2.0",
        assigned: "Joey bugs",
        priority: 3,
        time: "1:33",
    }))

    let sorted = data.sort ((a,b)=> {return a.priority- b.priority })
    return sorted;

}