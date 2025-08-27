import { BackButton, ScreenWrapper } from '@/components'
import { AuthFooter, AuthForm, AuthHeader, AuthInput } from '@/components/auth'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import { AtIcon, LockIcon } from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleChangeEmail = (text: string) => {
        emailRef.current = text;
    }

    const handleChangePassword = (text: string) => {
        passwordRef.current = text;
    }

    const handleLogin = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Login', 'Please fill in all fields');
            return;
        }
        
        setIsLoading(true);
        try {
            // TODO: Implement actual login logic here
            console.log('Logging in with:', emailRef.current);
        } catch (error) {
            Alert.alert('Error', `Login failed: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        } finally {
            setIsLoading(false);
        }
    }

    const handleSignup = () => {
        router.navigate('/(auth)/register')
    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28} />

                <AuthHeader
                    title="Hey,"
                    subtitle="Welcome Back"
                    description="Login now to track all your expenses"
                />

                <AuthForm
                    buttonText="Login"
                    onButtonPress={handleLogin}
                    isLoading={isLoading}
                    showForgotPassword={true}
                >
                    <AuthInput
                        onChangeText={handleChangeEmail}
                        placeholder="Enter your email"
                        icon={
                            <AtIcon
                                size={verticalScale(26)}
                                color={colors.neutral300}
                                weight="fill"
                            />
                        }
                    />
                    <AuthInput
                        onChangeText={handleChangePassword}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        icon={
                            <LockIcon
                                size={verticalScale(26)}
                                color={colors.neutral300}
                                weight="fill"
                            />
                        }
                    />
                </AuthForm>

                <AuthFooter
                    questionText="Don't have an account?"
                    actionText="Sign up"
                    onAction={handleSignup}
                />
            </View>
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },
})