import { StyleSheet, Text, View, TextInput, TextInputProps, ViewStyle, TextStyle } from 'react-native'
import React, { RefObject, ReactNode } from 'react'
import { colors, radius, spacingX } from '@/constants/theme';
import { verticalScale } from "@/utils/styling";

export interface InputProps extends TextInputProps {
    icon?: ReactNode;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    inputRef?: RefObject<TextInput>;
}

const Input = ({ containerStyle, inputStyle, inputRef, icon, ...props }: InputProps) => {
    return (
        <View style={[styles.containor, containerStyle]}>
            {icon && icon}
            <TextInput
                style={[styles.input, inputStyle]}
                placeholderTextColor={colors.neutral400}
                ref={inputRef}
                {...props}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    containor: {
        flexDirection: 'row',
        height: verticalScale(54),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.neutral300,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        paddingHorizontal: spacingX._15,
        gap: spacingX._10,
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: verticalScale(14),
    }
})