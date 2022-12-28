import React, { ReactNode } from 'react';

interface IButtonProps {
    children: ReactNode
}

export const Button: React.FC<IButtonProps> = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
};

