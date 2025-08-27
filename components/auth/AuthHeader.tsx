import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typo } from '@/components/ui';
import { colors, spacingY } from '@/constants/theme';

interface AuthHeaderProps {
    title: string;
    subtitle: string;
    description: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle, description }) => {
    return (
        <>
            <View style={styles.titleContainer}>
                <Typo size={30} fontWeight={"800"}>{title}</Typo>
                <Typo size={30} fontWeight={"800"}>{subtitle}</Typo>
            </View>
            <Typo size={16} color={colors.textLighter}>{description}</Typo>
        </>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        gap: 5,
        marginTop: spacingY._20,
    },
});

export default AuthHeader;
