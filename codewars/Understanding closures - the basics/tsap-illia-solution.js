function buildFun(n)
{
	const funcs = [];
	for(const index = 0; index < n; index++)
	{
		funcs.push(function()
		{
			return index;
		})
	}
	return funcs;
}