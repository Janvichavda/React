import React from 'react';

const ListView = () => {
    // Sample data with unique identifiers
    const items = [
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
        { id: 4, text: 'Item 4' },
    ];

    return (
        <div className='bg-secondary' >
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div >
    );
};

export default ListView;
