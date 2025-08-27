import { Input } from '@/components/ui';
import React, { ReactElement } from 'react';

interface AuthInputProps {
    onChangeText: (text: string) => void;
    placeholder: string;
    icon: ReactElement;
    secureTextEntry?: boolean;
}

const AuthInput: React.FC<AuthInputProps> = ({
    onChangeText,
    placeholder,
    icon,
    secureTextEntry = false
}) => {
    return (
        <Input
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            icon={icon}
        />
    );
};

export default AuthInput;
