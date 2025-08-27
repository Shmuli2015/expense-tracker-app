import { BackButton, ScreenWrapper } from '@/components'
import { AuthFooter, AuthForm, AuthHeader, AuthInput } from '@/components/auth'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import { AtIcon, LockIcon, UserIcon } from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

const Register = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");

    const handleChangeEmail = (text: string) => {
        emailRef.current = text;
    }

    const handleChangePassword = (text: string) => {
        passwordRef.current = text;
    }

    const handleChangeName = (text: string) => {
        nameRef.current = text;
    }

    const handleSignup = async () => {
        if (!emailRef.current || !passwordRef.current || !nameRef.current) {
            Alert.alert('Sign up', 'Please fill in all fields');
            return;
        }
        
        setIsLoading(true);
        try {
            // TODO: Implement actual signup logic here
            console.log('Signing up with:', nameRef.current, emailRef.current);
        } catch (error) {
            Alert.alert('Error', `Signup failed: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        } finally {
            setIsLoading(false);
        }
    }

    const handleLogin = () => {
        router.navigate('/(auth)/login')
    }

    return (
        <ScreenWrapper>
            <View style={styles.container}>
                <BackButton iconSize={28} />

                <AuthHeader
                    title="Let's"
                    subtitle="Get Started"
                    description="Create an account to track all your expenses"
                />

                <AuthForm
                    buttonText="Sign up"
                    onButtonPress={handleSignup}
                    isLoading={isLoading}
                >
                    <AuthInput
                        onChangeText={handleChangeName}
                        placeholder="Enter your name"
                        icon={
                            <UserIcon
                                size={verticalScale(26)}
                                color={colors.neutral300}
                                weight="fill"
                            />
                        }
                    />
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
                    questionText="Already have an account?"
                    actionText="Login"
                    onAction={handleLogin}
                />
            </View>
        </ScreenWrapper>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20
    },
})