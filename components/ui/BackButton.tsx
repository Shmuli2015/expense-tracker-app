import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { CaretLeftIcon } from 'phosphor-react-native';
import { verticalScale } from '@/utils/styling';
import { colors, radius } from '@/constants/theme';


interface BackButtonProps {
  style?: ViewStyle;
  iconSize?: number;
};

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
    const router = useRouter();

    const handleBack = () => {
      router.back();
    };
  return (
    <TouchableOpacity style={[styles.backButton, style]} onPress={handleBack}>
      <CaretLeftIcon
       size={verticalScale(iconSize)}
       color={colors.white}
       weight='bold'
      />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backButton: {
        backgroundColor: colors.neutral600,
        borderRadius: radius._12,
        alignSelf: 'flex-start',
        borderCurve: 'continuous',
        padding: 5,
    }   
})