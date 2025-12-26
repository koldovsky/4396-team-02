var min = function(list)
{
    if(list.length === 0)
    {
        return undefined;
    }
    if(list.length === 1)
    {
        return list[0];
    }
    return list.slice(1).reduce((min, current) =>
    {
        return (current < min ? current : min);
    }, list[0]);
}
var max = function(list)
{
    if(list.length === 0)
    {
        return undefined;
    }
    if(list.length === 1)
    {
        return list[0];
    }
    return list.slice(1).reduce((max, current) =>
    {
        return (current > max ? current : max);
    }, list[0]);
}