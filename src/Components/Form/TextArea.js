

const TextArea = ({
    register, errors, label, disabled, setlabelTop, id,name, borderColor, ...textareaProps
}) => {

    return (
        <div className={` relative w-full flex flex-col gap-1.5 `}>
            <label className='text-Gray-900 font-normal text-sm'>{label}{textareaProps.isRequired && <span className="required">*</span>}</label>
            <textarea
                {...register(id)}
                id={id}
                name={name}
                {...textareaProps}
                className={`w-full  text-black border rounded font-normal outline-none text-sm transition duration-150 ease-in-out bg-white ${borderColor ? `border-[${borderColor}]` : 'border-solid'} outline-none focus:border-primary-500  placeholder-[#A6B0CF]  ${textareaProps.height ? textareaProps.height : 'h-auto'} p-3 focus:border-2  placeholder-iron-gray focus:outline-none border-[#AAAAAA]  ${disabled ? 'bg-Gray-50 text-Gray-401 cursor-not-allowed' : ''}  ${errors ? 'focus:border-error' : ''} ${textareaProps.TextaresClass} `}
            />
           {errors?.[name] && (
                <div className="required">
                    {errors[name].message}
                </div>
            )}
       
        </div>
    );
};

export default TextArea;
