export default function Input({ type, options, name, id, classes, operation }) {
     return (
          <>
               {type === 'select' ? <select name={name} className={`${classes} border pl-3 py-2.5`} onBlur={operation}  >
                    <option value="" hidden>{name}</option>
                    {
                         options.map((option, index) => (
                              <option key={index} value={option.value}>{option.label}</option>
                         ))
                    }
               </select>
                    : type === 'textarea' ? <textarea name={name} placeholder={name} className={`${classes} border pl-3 py-2.5`} onBlur={operation} ></textarea>
                         : type === 'checkbox' ? <div className={`${classes} flex items-center`}><input name={name} id={id} type={type} className="w-auto mr-1" onChange={operation} /><label htmlFor={id}>{id}</label></div>
                              : <input type={type} name={name} placeholder={name} className={`${classes} border pl-3 py-2.5`} onBlur={operation} />}
          </>
     )
}