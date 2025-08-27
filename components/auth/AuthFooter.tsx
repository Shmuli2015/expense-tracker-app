import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Typo } from '@/components/ui';
import { colors } from '@/constants/theme';

interface AuthFooterProps {
    questionText: string;
    actionText: string;
    onAction: () => void;
}

const AuthFooter: React.FC<AuthFooterProps> = ({ questionText, actionText, onAction }) => {
    return (
        <View style={styles.footer}>
            <Typo size={15}>{questionText}</Typo>
            <Pressable onPress={onAction}>
                <Typo size={15} color={colors.primary} fontWeight={"700"}>{actionText}</Typo>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
});

export default AuthFooter;
