import { Button, Typo } from '@/components/ui';
import { colors, spacingY } from '@/constants/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface AuthFormProps {
    children: React.ReactNode;
    buttonText: string;
    onButtonPress: () => void;
    isLoading?: boolean;
    showForgotPassword?: boolean;
    onForgotPassword?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
    children,
    buttonText,
    onButtonPress,
    isLoading = false,
    showForgotPassword = false,
    onForgotPassword
}) => {
    return (
        <View style={styles.form}>
            {children}
            {showForgotPassword && (
                <Typo 
                    size={14} 
                    color={colors.text} 
                    style={styles.forgotPassword}
                    onPress={onForgotPassword}
                >
                    Forgot Password?
                </Typo>
            )}
            <Button onPress={onButtonPress} loading={isLoading}>
                <Typo size={21} color={colors.black} fontWeight={"700"}>{buttonText}</Typo>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        gap: spacingY._20
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: "500",
        color: colors.text
    },
});

export default AuthForm;
