function min(arr, toReturn)
{
    if(arr.length === 0)
    {
        return undefined;
    }
    if(arr.length === 1)
    {
        return (toReturn === "value" ? arr[0] : 0);
    }
    if(toReturn === "value")
    {
        return arr.reduce((min, current) =>
        {
            return (current < min ? current : min);
        }, arr[0]);
    }
    else
    {
        let min_value = arr[0];
        return arr.reduce((min_index, current, index) =>
        {
            if(current < min_value)
            {
                min_value = current;
                return index;
            }
            return min_index;
        }, 0);
    }
}