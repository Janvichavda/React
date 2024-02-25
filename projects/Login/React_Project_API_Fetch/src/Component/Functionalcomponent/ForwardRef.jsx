import { forwardRef } from 'react';

const MyInput = forwardRef((props, ref) => {
    return (
        <input
            // value={value}
            // onChange={onChange}
            ref={ref}
        />
    );
});

export default MyInput;