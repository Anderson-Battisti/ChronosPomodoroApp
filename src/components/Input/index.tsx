type InputProps = 
{
    type: string;
}

export function Input( { type }: InputProps )
{
    return(
        <>
            <label htmlFor='myInput'>task</label>
            <input id='myInput' type={ type } />
        </>
    );
}