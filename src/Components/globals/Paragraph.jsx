export function Paragraph({text,size='16px',color='black',orientation='center'}) {
    return (
        <>
            <p style={{'color':color,'font-size':size,'text-align': orientation}}>
                {text}
            </p>
        </>
    );
}