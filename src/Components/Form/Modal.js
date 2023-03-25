

const Modal = (props) => (
    <div className={`fixed z-30 inset-0 overflow-y-auto  ${!props.show && 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-center justify-center h-screen">
            <div className={`fixed inset-0 ${!props.notBlur && 'bg-gray-500'} bg-opacity-75 transition-opacity" aria-hidden="true`}></div>
            <div className={`z-40 relative p-6 mt-20 md:mt-0 mx-2 md:mx-1 overflow-hidden inline-block  h-auto  rounded-3xl  bg-white  shadow-xl transform transition-all sm:my-8 sm:align-middle ${props.width ? props.width : 'sm:max-w-xl w-full'} ${props.className}`}>
                <div className='w-full flex items-center justify-between'>
                    <div className="text-2xl md:text-4xl font-medium text-[#F7911E]">{props.heading}</div>
                    <img src='/images/cross.svg' className='cursor-pointer' onClick={props.onCancel} />
                </div>
                <div className={`overflow-y-auto flex justify-center ${props.maxHeight ? props.maxHeight : 'max-h-[80vh]'} h-auto  `}>
                    {props.children}
                </div>
                <img src='/images/ellipstop.svg' className='absolute top-0 right-0 -z-10' />
                <img src='/images/ellipsebuttom.svg' className='absolute bottom-0 left-0 -z-10' />
            </div>
        </div>
    </div>
);

export default Modal;
