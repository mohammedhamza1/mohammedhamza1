import { FC } from "react";
import { View, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Icon, Text } from "@/components";
import { useAppTheme } from "@/utils/useAppTheme";
import { ThemedStyle } from "@/theme";
import { isRTL, TxKeyPath } from "@/i18n";
import { useNavigation } from "@react-navigation/native";

interface CustomHeaderProps {
  titleTx: TxKeyPath;
}

export const CustomHeader: FC<CustomHeaderProps> = ({ titleTx }) => {
  const {
    themed,
    theme: { colors },
  } = useAppTheme();

  const { goBack } = useNavigation();

  return (
    <View style={themed($customHeader)}>
      <Icon
        icon="arrowLeft"
        style={themed($customHeaderIcon)}
        size={32}
        color={colors.palette.neutral900}
        onPress={() => goBack()}
      />
      <Text style={themed($customHeaderTitle)} tx={titleTx} />
    </View>
  );
};

const $customHeader: ThemedStyle<ViewStyle> = ({ spacing }) => ({
  flexDirection: "row",
  alignItems: "center",
  paddingTop: spacing.md,
  paddingBottom: spacing.xs,
});
const $customHeaderIcon: ThemedStyle<ImageStyle> = ({ spacing }) => ({
  transform: [{ rotate: isRTL ? "180deg" : "360deg" }],
  marginRight: spacing.xs,
});

const $customHeaderTitle: ThemedStyle<TextStyle> = ({
  colors,
  typography,
}) => ({
  fontFamily: typography.fonts.somarSans.medium,
  fontSize: 16,
  fontWeight: 600,
  color: colors.palette.neutral900,
});
