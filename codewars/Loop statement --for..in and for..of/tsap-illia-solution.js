function giveMeFive(obj)
{
    const array = [];
    for(const key in obj)
    {
        const value = obj[key]; //string
        if(key.length === 5)
        {
            array.push(key);
        }
        if(value.length === 5)
        {
            array.push(value);
        }
    }
    return array;
}