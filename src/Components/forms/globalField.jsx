import './global.css';

export function GlobalField ({label,placeholder,type}) {
    return (
        <>
            <div className="form-group">
                <label htmlFor="" className='form-label'>{label}</label>
                <input type={type} placeholder={placeholder} className="form-control" />
            </div>
        </>  
    );
}